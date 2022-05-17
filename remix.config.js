/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  serverBuildTarget: 'netlify',
  server: './server.js',
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: 'app',
  // browserBuildDirectory: 'public/build',
  // publicPath: '/build/',
  // serverBuildDirectory: 'build',
  // devServerPort: 8002,
};
