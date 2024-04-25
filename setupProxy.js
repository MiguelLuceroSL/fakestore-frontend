import createProxyMiddleware from 'http-proxy-middleware';

module.exports = function (app) {
    app.use(
        '/comprar',
        createProxyMiddleware({
            target: 'https://fakestore-backend.vercel.app',
            changeOrigin: true,
        })
    );
};