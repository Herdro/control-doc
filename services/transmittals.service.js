const { models } = require('../libs/sequelizer');

class TransmittalService {
  constructor() {}

  async create(data) {
    const newTransmittal = await models.Transmittal.create(data);
    return newTransmittal;
  }

  async addDoc(data) {
    const newDocumentenTransmittal = await models.DocumentenTransmittal.bulkCreate(data);
    return newDocumentenTransmittal;
  }

  async find() {
    const rta = await models.Transmittal.findAll();
    return rta;
  }

  async findOne(id) {
    const Transmittal = await models.Transmittal.findByPk(id, {
      include: ['documents']
    });
    if (!Transmittal) {
      throw boom.notFound('Transmittal not found');
    }
    return Transmittal;
  }

  async update(id, changes) {
    const Transmittal = await this.findOne(id);
    const rta = await Transmittal.update(changes);
    return rta;
  }

  async delete(id) {
    const Transmittal = await this.findOne(id);
    await Transmittal.destroy();
    return { id };
  }
}

module.exports = TransmittalService;