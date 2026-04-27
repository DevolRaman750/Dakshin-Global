import { createServer } from "node:http";
import server from "../dist/server/server.js";

// Vercel serverless function entrypoint
export default async function handler(req, res) {
  // Convert Node IncomingMessage to Web Request
  const url = new URL(req.url || "/", \`http://\${req.headers.host}\`);
  
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      value.forEach((v) => headers.append(key, v));
    } else if (value) {
      headers.set(key, value);
    }
  }

  const init = {
    method: req.method,
    headers,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    // Read body
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    if (chunks.length > 0) {
      init.body = Buffer.concat(chunks);
    }
  }

  const webRequest = new Request(url, init);

  try {
    const webResponse = await server.fetch(webRequest);
    
    // Convert Web Response to Node ServerResponse
    res.statusCode = webResponse.status;
    res.statusMessage = webResponse.statusText;

    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (webResponse.body) {
      const reader = webResponse.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
