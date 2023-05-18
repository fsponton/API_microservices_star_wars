const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use('/characters', createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true
}));


app.use("/films", createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true
}));

app.use("/planets", createProxyMiddleware({
    target: "http://localhost:8003",
    changeOrigin: true
}));


const PORT = 8000
app.listen(PORT, () => {
    console.log(`Gateway API Star Wars listening on port ${PORT}`)
})