const NAME = '5ma';
const DESC = `${NAME}-亚洲国产无码精品成人在线，免费下载资源就找${NAME}。`;
const SITE_URL = 'https://www.5ma.org/';

const pageMeta = [
  { charSet: 'UTF-8' },
  { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
  {
    name: 'viewport',
    content:
      'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover',
  },
  {
    name: 'keywords',
    content: NAME,
  },
  {
    name: 'description',
    content: DESC,
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:title',
    content: `${NAME}`,
  },
  {
    property: 'og:keywords',
    content: NAME,
  },
  {
    property: 'og:description',
    content: DESC,
  },
  {
    property: 'og:site_name',
    content: NAME,
  },
  {
    property: 'og:url',
    content: SITE_URL,
  },
  {
    name: 'robots',
    content:
      'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  },
];

export const Conf = {
  '/': {
    title: `${NAME}-亚洲国产无码精品成人在线`,
    pageMeta,
  },
};
