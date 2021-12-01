const { models } = require('../libs/sequelizer');
const { Proyect } = require('../db/models/proyects.model');
const { Client } = require('../db/models/clients.models');
const Op = require("sequelize").Op;

class DocumentService {
  constructor() {}

  async create2(data) {
    const newDocument = await models.Document.bulkCreate(data);
    return newDocument;
  }

  async create(data) {
    const newDocument = await models.Document.create(data);
    return newDocument;
  }

  async findLike(data) {
    const rta = await models.Document.findAll({include: ['transmittals']},{
      where: {
        [Op.or]: {
          documentName: { [Op.like]: `%${data.documentName}%` },
          codeIn: { [Op.like]: `%${data.codeIn}%` },
          codeOut: { [Op.like]: `%${data.codeOut}%` },
          proyectId: { [Op.eq]: `${data.proyectId}` },
        }
      }
    });
    return rta;
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
      }, 'transmittals']});
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