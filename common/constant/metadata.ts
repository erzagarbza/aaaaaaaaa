export const METADATA = {
  creator: 'Erzagar',
  description:
    'Personal website, portfolio, fullstack website developer',
  keyword:
    'erzagar, erzzz, erzagar bza, programming tips, belajar javascript, belajar typescript',
  authors: {
    name: 'Erzagar BZA',
    url: process.env.DOMAIN,
  },
  openGraph: {
    url: process.env.DOMAIN,
    siteName: 'Erzagar',
    locale: 'id-ID',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'favicon',
      url: '/favicon.ico',
    },
  },
  exTitle: '| Erzagar BZA',
  profile: 'https://avatars.githubusercontent.com/u/44162954?s=96&v=4',
  githubUsername: process.env.GITHUB_USERNAME,
  githubToken: process.env.GITHUB_TOKEN,
};