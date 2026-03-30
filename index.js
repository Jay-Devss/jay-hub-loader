const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/file/:filename', (req, res) => {
    const fileName = req.params.filename;
    const safePath = path.join(__dirname, fileName);

    res.sendFile(safePath, (err) => {
        if (err) {
            res.status(404).send('File not found!');
        }
    });
});

app.get('/uptime', (req, res) => {
    const uptimeSeconds = process.uptime();
    res.send(`Uptime: ${uptimeSeconds.toFixed(2)} seconds`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});