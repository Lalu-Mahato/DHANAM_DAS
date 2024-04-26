const router = require('express').Router();
const demandController = require('@controllers/DemandController');

router.get('/upload', demandController.upload);

module.exports = router;
