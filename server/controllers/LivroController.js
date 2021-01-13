
const Livro = require('../models/Livro');

module.exports = {
    async index(req, res) {
        const livros = await Livro.findAll();

        return res.json(livros)
    },

    async read(req, res) {
        const livro_id = req.params.id
        const livro = await Livro.findByPk(livro_id)
        return res.json(livro)
    },

    async store(req, res) {
        const titulo = req.body.titulo
        const autor = req.body.autor 

       const novoLivro = await Livro.create({titulo, autor})
       return res.json(novoLivro)
    },

    async editar(req, res) {
        const livro_id = req.params.id; 
        const livro = await Livro.findByPk(livro_id)
        const livro_titulo = livro.titulo
        const livro_autor = livro.autor
        if (livro){
            livro.update({
                titulo: req.body.titulo,
                autor: req.body.autor
            })
        }
        return res.json(livro)
    },

    async delete(req, res) {
        const livro_id = req.params.id; 
        await Livro.destroy({
            where: {
                id:livro_id
            }
        })
        return res.json("Livro deletado")
        
    }

}
