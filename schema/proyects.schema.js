const Joi = require('joi');

const id = Joi.number().integer().min(1);
const proyectName = Joi.string().max(100);
const proyectCode = Joi.string().max(100);
const proyectDescription = Joi.string().max(500);

const createProyectSchema = Joi.object({
    proyectName: proyectName.required(),
    proyectCode: proyectCode,
    proyectDescription: proyectDescription,
    directClientId: id.required(),
    ownerClientId: id,
});

const updateProyectSchema = Joi.object({
    proyectName: proyectName,
    proyectCode: proyectCode,
    proyectDescription: proyectDescription,
    directClientId: id,
    ownerClientId: id,
});

const getProyectSchema = Joi.object({
    id: id.required(),
});

module.exports = { updateProyectSchema, createProyectSchema, getProyectSchema };