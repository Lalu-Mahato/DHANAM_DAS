const models = require('@models');

exports.create = (payload) => models.products_master.create(payload);
exports.findByCode = (code) => models.products_master.findOne({ where: { code } });
