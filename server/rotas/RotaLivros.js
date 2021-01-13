const express = require('express');
const router = express.Router();
const LivroController = require('../controllers/LivroController');

router.get('/', LivroController.index);
router.post('/store', LivroController.store);
router.patch('/editar/:id', LivroController.editar);
router.get('/:id', LivroController.read);
router.delete('/deletar/:id', LivroController.delete);

module.exports = router;