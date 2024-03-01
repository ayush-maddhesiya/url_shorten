const express=  require("express");
const handlerGenerateShortURL = require('../constroller/url.controller.js')
const router = express.Router();

router.post('/url',handlerGenerateShortURL.ayush);

module.exports =  router; 