const Joi = require('joi');

const id = Joi.number().integer().min(1);
const clientName = Joi.string().max(100);
const clientDescription = Joi.string().max(500);

const createClientSchema = Joi.object({
    clientName: clientName.required(),
    clientDescription: clientDescription,
});

const updateClientSchema = Joi.object({
    clientName: clientName,
    clientDescription: clientDescription,
});

const getClientSchema = Joi.object({
    id: id.required(),
});

module.exports = { updateClientSchema, createClientSchema, getClientSchema };