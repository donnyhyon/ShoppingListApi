const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: `http://${process.env.REACT_APP_API_URL}:8080`,
      changeOrigin: true,
    })
  );
};