const models = require('@models');

exports.findOne = (id) => models.counter.findOne({ id, raw: true });

// exports.update = async (payload) => {
//     const counter = await this.findOne(payload.id);
//     await counter.update({ bankbranch: payload.bankbranch });
// };

exports.update = (payload) => models.counter.update(
    { bankbranch: payload.bankbranch },
    {
        where: {
            id: payload.id,
        },
    },
);
