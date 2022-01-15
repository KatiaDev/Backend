const express = require("express");
const server = express();

const PORT = 1234;

server.get("/", (req,res) => {
    return res.send("<html><body><h1>Hello World</h1></body></html>")
})

server.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`);
})


module.exports = server;