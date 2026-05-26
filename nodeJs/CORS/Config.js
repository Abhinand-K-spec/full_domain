const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'https://localhost:3000.com',
    methods: ['GET','POST']
}))