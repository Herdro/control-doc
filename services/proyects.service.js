const { Client } = require('../db/models/clients.models');
const { models } = require('../libs/sequelizer');

class ProyectService {
  constructor() {}

  async create(data) {
    const newProyect = await models.Proyect.create(data);
    return newProyect;
  }

  async find() {
    const rta = await models.Proyect.findAll();
    return rta;
  }

  async findOne(id) {
    const Proyect = await models.Proyect.findByPk(
      id,
      {include: [
        {
          model: Client,
          as: 'directClient',
        },
        {
          model: Client,
          as: 'ownerClient',
        }
      ]});
    if (!Proyect) {
      throw boom.notFound('Proyect not found');
    }
    return Proyect;
  }

  async update(id, changes) {
    const Proyect = await this.findOne(id);
    const rta = await Proyect.update(changes);
    return rta;
  }

  async delete(id) {
    const Proyect = await this.findOne(id);
    await Proyect.destroy();
    return { id };
  }
}

module.exports = ProyectService;