const { models } = require('../libs/sequelizer');
const { Proyect } = require('../db/models/proyects.model');
const { Client } = require('../db/models/clients.models');

class DocumentService {
  constructor() {}

  async create(data) {
    const newDocument = await models.Document.create(data);
    return newDocument;
  }

  async find() {
    const rta = await models.Document.findAll();
    return rta;
  }

  async findOne(id) {
    const Document = await models.Document.findByPk(
      id,
      {include: [{
        model: Proyect,
        as: "proyect",
        include: [{model: Client, as: "directClient"},{model: Client, as: "ownerClient"}]
      }]});
    if (!Document) {
      throw boom.notFound('Document not found');
    }
    return Document;
  }

  async update(id, changes) {
    const Document = await this.findOne(id);
    const rta = await Document.update(changes);
    return rta;
  }

  async delete(id) {
    const Document = await this.findOne(id);
    await Document.destroy();
    return { id };
  }
}

module.exports = DocumentService;