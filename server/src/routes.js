const express = require('express');
const routes = express.Router();

//#region Controllers
const ClothesController = require('./controller/ClothesController');
//#endregion

//#region Categoty
routes.get('/clothes', ClothesController.index);
routes.get('/clothes/:id', ClothesController.show);
routes.post('/clothes', ClothesController.store);
routes.put('/clothes/:id', ClothesController.update);
routes.delete('/clothes/:id', ClothesController.delete);
//#endregion

module.exports = routes;