const withPWA = require('next-pwa')({
  dest: 'public',
  disable: true,
  register: true,
  scope: '/app',
  sw: 'service-worker.js',
  skipWaiting: true,
  //...
})

module.exports = withPWA({
  // next.js config
})