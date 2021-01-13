const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

(async () => {
    const database = require('./db');
    
    try {
        const resultado = await database.sync();
        console.log(resultado)
    } catch(err) {
        console.log("Erro: " +err);
    }
})();

const port = process.env.PORT || 5000;

const livrosRoute = require('./routes/livrosRoute');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/livros', livrosRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));