const { Router } = require('express');
const FilmeController = require('../controllers/filmeController.js');

const filmeController = new FilmeController();

const router = Router();

router.get('/filmes', (req, res) => filmeController.pegaTodos(req, res));
router.get('/filmes/:id', (req, res) => filmeController.pegaUmPorId(req, res));
router.post('/filmes', (req, res) => filmeController.criaNovo(req, res));
router.put('/filmes/:id', (req, res) => filmeController.atualiza(req, res));
router.delete('/filmes/:id', (req, res) => filmeController.exclui(req, res));


module.exports = router;

