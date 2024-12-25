module.exports = {
    headers: () => {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=0, must-revalidate',
            },
          ],
        },
      ]
    },
    redirects: () => {
      return [
        {
          source: '/:path*',
          destination: '/index.html',
          permanent: false
        },
      ]
    },
  }