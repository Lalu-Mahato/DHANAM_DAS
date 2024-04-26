const models = require('@models');

exports.create = (payload) => models.prospects_master.create(payload);
