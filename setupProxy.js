import createProxyMiddleware from 'http-proxy-middleware';

module.exports = function (app) {
    app.use(
        '/comprar',
        createProxyMiddleware({
            target: 'http://fakestore-backend.vercel.app',
            changeOrigin: true,
        })
    );
};