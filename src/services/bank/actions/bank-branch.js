const models = require('@models');

exports.create = (payload) => models.bank_branches_master.create(payload);
exports.findByCode = (code) => models.bank_branches_master.findOne({ where: { code } });
