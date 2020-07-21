const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const port = 3001;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost:3002',
    methods: 'GET, POST, PATCH, DELETE',
};
app.use(cors(corsOptions));

server.listen(port, () => {
    console.log(`Listening at ${port}`);
});

app.get('/api/users', async (req, res) => {
    const { data } = await axios.get(
        'http://localhost:3000/api/search?length=32'
    );
    res.send(data);
});