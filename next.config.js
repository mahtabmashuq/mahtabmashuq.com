// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
      {
        source: '/home',
        destination: '/index.html',
      },
      {
        source: '/blog',
        destination: '/blog.html',
      },
      {
        source: '/case-studies',
        destination: '/case-studies.html',
      },
      {
        source: '/true-cost',
        destination: '/true-cost.html',
      },
      {
        source: '/daily-system',
        destination: '/daily-system.html',
      },
      {
        source: '/linkedin-presence',
        destination: '/linkedin-presence.html',
      },
      {
        source: '/priorcut',
        destination: '/priorcut.html',
      },
      {
        source: '/fpc',
        destination: '/fpc.html',
      },
      {
        source: '/lodel-energy',
        destination: '/lodel-energy.html',
      },
      {
        source: '/saucerswap',
        destination: '/saucerswap.html',
      },
      {
        source: '/404',
        destination: '/404.html',
      },
    ];
  },
};
