const express = require('express');
const routes = express.Router();

//import controlling functions
const CctvController = require('../Controllers/CctvControllers')
const GpsController = require('../Controllers/Gps_Controllers')

//API end points for this project
routes.get('/CCTV',CctvController.getData);
routes.get('/gps',GpsController.getData);


//export Router
module.exports = routes;