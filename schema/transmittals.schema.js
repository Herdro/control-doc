const Joi = require('joi');

const id = Joi.number().integer().min(1);
const code = Joi.string().min(1).max(255);
const documentVersion = Joi.string().min(1);
const type = Joi.string().valid("send", "rejected", "semiapproved", "approved", "certified");

const createTransmittalSchema = Joi.object({
    codeIn: code.required(),
    codeOut: code,
    proyectId: id.required(),
});

const updateTransmittalSchema = Joi.object({
    codeIn: code,
    codeOut: code,
    proyectId: id,
});

const getTransmittalSchema = Joi.object({
    id: id.required(),
});

const addDocumentSchema = Joi.object({
    documentId: id.required(),
    transmittalId: id.required(),
    documentVersion: documentVersion.required(),
    type: type.required(),
});

const removeDocumentSchema = Joi.object({
    id: id.required(),
});

module.exports = { updateTransmittalSchema, createTransmittalSchema, getTransmittalSchema, addDocumentSchema, removeDocumentSchema };