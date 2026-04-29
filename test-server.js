import handler from "./api/server.js";
import http from "node:http";

const server = http.createServer((req, res) => {
  handler(req, res);
});

server.listen(3000, () => {
  console.log("Listening on 3000");
});
