const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const port = 3001;

const API_END_POINT = 'http://localhost:3000/api';
axios.defaults.baseURL = API_END_POINT;

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
    const UsersURL = '/search?length=32';
    const { data } = await axios.get(UsersURL);
    const { items } = data;
    const profilesURL = '/profiles?ids=' + items.map(item => item.id).join('&ids=');
    const { data: profiles } = await axios.get(profilesURL);
    const users = profiles.map(profile => ({ ...items.find(item => item.id === profile.id), ...profile }));
    res.send(users);
});