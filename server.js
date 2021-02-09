const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const server = express();

server.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
server.use(express.static(path.join(__dirname, 'dist')));

server.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

server.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/bundle.js'));
});

server.get('/asset-manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/asset-manifest.json'));
});

server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on port ${port}`);
});
