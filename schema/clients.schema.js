const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().max(100);
const description = Joi.string().max(500);

const createClientSchema = Joi.object({
    name: name.required(),
    description: description,
});

const updateClientSchema = Joi.object({
    name: name,
    description: description,
});

const getClientSchema = Joi.object({
    id: id.required(),
});

