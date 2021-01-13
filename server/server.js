const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

(async () => {
    const banco = require('./banco/configBanco.js');
    
    try {
        const resultado = await banco.sync();
        console.log(resultado)
    } catch(err) {
        console.log(`Erro: ${err}`);
    }
})();

const port = process.env.PORT || 5000;

const RotaLivros = require('./rotas/RotaLivros.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/livros', RotaLivros);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));