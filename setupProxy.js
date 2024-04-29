import createProxyMiddleware from 'http-proxy-middleware';

module.exports = function (app) {
    app.use(
        '/comprar',
        createProxyMiddleware({
            target: 'https://bknshop-back.onrender.com',
            changeOrigin: true,
        })
    );
};