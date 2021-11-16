const { models } = require('../libs/sequelizer');

class ClientService {
  constructor() {}

  async create(data) {
    const newClient = await models.Client.create(data);
    return newClient;
  }

  async find() {
    const rta = await models.Client.findAll();
    return rta;
  }

  async findOne(id) {
    const Client = await models.Client.findByPk(id);
    if (!Client) {
      throw boom.notFound('Client not found');
    }
    return Client;
  }

  async update(id, changes) {
    const Client = await this.findOne(id);
    const rta = await Client.update(changes);
    return rta;
  }

  async delete(id) {
    const Client = await this.findOne(id);
    await Client.destroy();
    return { id };
  }
}

module.exports = ClientService;