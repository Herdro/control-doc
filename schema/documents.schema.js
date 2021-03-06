const Joi = require('joi');

const id = Joi.number().integer().min(1);
const documentName = Joi.string().min(1).max(255);
const documentDescription = Joi.string().min(1).max(255);
const deadline = Joi.date().iso().allow("").allow(null);
const codeIn = Joi.string().min(1).max(255);
const codeOut = Joi.string().min(1).max(255);
const active = Joi.boolean();



const createDocumentSchema = Joi.object({
    // id
    proyectId: id.required(),
    documentName: documentName.required(),
    documentDescription: documentDescription,
    deadline: deadline,
    codeIn: codeIn.required(),
    codeOut: codeOut,
    // active
});

const createArrayDocumentSchema = Joi.array().items({
    // id
    proyectId: id.required(),
    documentName: documentName.required(),
    documentDescription: documentDescription,
    deadline: deadline,
    codeIn: codeIn.required(),
    codeOut: codeOut,
    // active
});

const updateDocumentSchema = Joi.object({
    // id
    proyectId: id,
    documentName: documentName,
    documentDescription: documentDescription,
    deadline: deadline,
    codeIn: codeIn,
    codeOut: codeOut,
    active: active,
});

const getDocumentSchema = Joi.object({
    id: id.required(),
});

module.exports = { updateDocumentSchema, createDocumentSchema, createArrayDocumentSchema, getDocumentSchema };