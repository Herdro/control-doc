const { Client } = require("../db/models/clients.models");
const { models } = require("../libs/sequelizer");
const Op = require("sequelize").Op;

class ProyectService {
  constructor() {}

  async create2(data) {
    const newProyect = await models.Proyect.bulkCreate(data);
    return newProyect;
  }

  async create(data) {
    const newProyect = await models.Proyect.create(data);
    return newProyect;
  }

  async find() {
    const rta = await models.Proyect.findAll();
    return rta;
  }

  async findLike(data) {
    const rta = await models.Proyect.findAll({
      where: {
        [Op.or]: {
          proyectCode: {
            [Op.like]: `%${data.proyectCode}%`,
          },
          proyectName: {
            [Op.like]: `%${data.proyectName}%`,
          },
        },
      },
    });
    return rta;
  }

  async findOne(id) {
    const Proyect = await models.Proyect.findByPk(id, {
      include: [
        {
          model: Client,
          as: "directClient",
        },
        {
          model: Client,
          as: "ownerClient",
        },
      ],
    });
    if (!Proyect) {
      throw boom.notFound("Proyect not found");
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
