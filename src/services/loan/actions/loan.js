const models = require('@models');

exports.create = (payload) => models.loans_master.create(payload);
