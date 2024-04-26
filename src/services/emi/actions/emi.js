const models = require('@models');

exports.create = (payload) => models.emis_master.create(payload);
