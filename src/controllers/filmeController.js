const Controller = require('./Controller.js');
const FilmeServices = require('../services/FilmeServices.js');

const filmeServices = new FilmeServices();

class FilmeController extends Controller{
    constructor() {
        super(filmeServices);
    }
}

module.exports = FilmeController;