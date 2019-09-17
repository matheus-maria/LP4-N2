// Requires
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// Api Init
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

//Iniciando Data Base
mongoose.connect('mongodb://localhost:27017/lp4n2', { useNewUrlParser: true } );

// Rotas
app.use('/api',require('./src/routes'));


app.listen(port, () => {
    console.log('Server listening on port %d ...', port);
});