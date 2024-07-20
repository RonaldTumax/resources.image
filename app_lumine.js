const express = require('express');
const app = express();
const port = 3000;

let maintenanceMode = false;

app.use(express.json());

app.get('/maintenance', (req, res) => {
    res.json({ maintenance: maintenanceMode });
});

app.post('/maintenance', (req, res) => {
    maintenanceMode = req.body.maintenance;
    res.json({ maintenance: maintenanceMode });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});