import createProxyMiddleware from 'http-proxy-middleware';

module.exports = function (app) {
    app.use(
        '/comprar',
        createProxyMiddleware({
            target: 'http://localhost:3000/',
            changeOrigin: true,
        })
    );
};