import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import styles from './styles/app.css';
import NotFoundPage from './components/NotFoundPage';

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: '/favicon.png',
    type: 'image/png',
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
  // {
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Inter',
  // },
];

export const meta: MetaFunction = () => {
  const title = 'Bryan Eaton';
  const description = `Bryan Eaton - Making a difference with technology · Full-stack software engineer · Co-founder · Husband · Father`;
  const image = '/images/BryanEatonLogo.png';
  return {
    viewport: 'width=device-width,initial-scale=1',
    charset: 'utf-8',
    title,
    description,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:image:alt': 'Bryan Eaton',
    'og:type': 'website',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:image:alt': 'Bryan Eaton',
    'twitter:card': 'website',
  };
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="text-red-500">ERROR: {error.message}</div>;
        <Scripts />
      </body>
    </html>
  );
}
export function CatchBoundary() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NotFoundPage />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
