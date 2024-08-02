const express = require('express');
const filmes = require('./filmesRoute.js');
const usuarios = require('./usuariosRoute.js');

module.exports = app => {
    app.use(
        express.json(),
        filmes,
        usuarios
    );
};