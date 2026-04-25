import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dakshin Global — From Indian Shores to Australian Doors" },
      { name: "description", content: "India to Australia import/export and sea freight specialists. FCL, LCL, custom sourcing and door-to-door delivery for individuals and businesses." },
      { name: "author", content: "Dakshin Global" },
      { property: "og:title", content: "Dakshin Global — From Indian Shores to Australian Doors" },
      { property: "og:description", content: "India to Australia import/export and sea freight specialists. FCL, LCL, custom sourcing and door-to-door delivery for individuals and businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dakshin Global — From Indian Shores to Australian Doors" },
      { name: "twitter:description", content: "India to Australia import/export and sea freight specialists. FCL, LCL, custom sourcing and door-to-door delivery for individuals and businesses." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cb6aa919-2ccc-48db-a7fe-6aee55d2d80f/id-preview-617294dc--7e467956-f552-4be2-bd76-7cb50b6d6060.lovable.app-1777031620742.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cb6aa919-2ccc-48db-a7fe-6aee55d2d80f/id-preview-617294dc--7e467956-f552-4be2-bd76-7cb50b6d6060.lovable.app-1777031620742.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,500;1,700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
