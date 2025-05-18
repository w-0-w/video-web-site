import {
  // Meta,
  // Title,
  Links,
  Main,
  Scripts,
} from 'ice';

import { Conf } from '@/config/page';

export default function Document() {
  const pp = '/';
  const { title = '-', pageMeta } = Conf[pp] || {};
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="ice.js 3 fusion pro scaffold" />
        {/* <link rel="icon" href="/ice.ico" type="image/x-icon" /> */}
        {/* <link rel="icon" href="/favicon.jpg" type="image/x-icon" /> */}
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        {/* <Meta /> */}
        {(pageMeta || []).map((pm, pi) => {
          return <meta key={pi} {...pm} />;
        })}
        {/* <Title /> */}
        <title>{title}</title>
        <Links />
      </head>
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
