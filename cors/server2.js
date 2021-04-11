const express = require('express');
app = express();
const whiteList = ['http://localhost:3000']
app.use(function (req, res, next) {
    let origin = req.headers.origin;
    if (whiteList.includes(origin)) {
        // 设置源，允许访问
        res.setHeader('Access-Control-Allow-Origin', origin);
        // 允许携带头访问
        res.setHeader('Access-Control-Allow-Headers', 'token');
        // 允许那个方法访问
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        // 允许携带 cookie
        res.setHeader('Access-Control-Allow-Credentials', true);
        // 预检存活时间
        res.setHeader('Access-Control-Max-Age', 6);
        // 允许前端获取那个头
        res.setHeader('Access-Control-Expose-Headers', 'name');
        if (req.method === 'OPTIONS') {
            res.end(); //  OPTIONS 请求不做任何处理
        }
    }
    next();
})
app.put('/getData', function (req, res) {
    console.log(req.headers, '头部');
    res.end('我不爱你 -- put')
})
app.get('/getData', function (req, res) {
    console.log(req.headers, '头部');
    res.setHeader('')
    res.end('我不爱你 -- get')
})
app.listen(4000, function () {
    console.log('serve start 4000!')
});