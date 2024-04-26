const httpStatus = require('http-status');
const logger = require('@logger');
const CommonMethods = require('@common-methods');
const router = require('express').Router();
const demandRoutes = require('./demand');

router.use('/demand', demandRoutes);
router.get('/health-check', (req, res) => res.send({ message: 'App running...' }));

// Validating unknown routes
router.all('*', (req, res) => {
    const statusCode = httpStatus.NOT_FOUND;
    logger.error(
        `${statusCode} - ${req.originalUrl} - ${req.method} - ${req.ip}`,
    );
    res.status(statusCode).send(CommonMethods.notFoundResponse('url.not.found'));
});

module.exports = router;
