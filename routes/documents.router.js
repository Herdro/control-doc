const express = require('express');

const DocumentService = require('../services/documents.service');
const validatorHandler = require('../middleware/validator.handler');
const { updateDocumentSchema, createDocumentSchema, getDocumentSchema } = require('../schema/documents.schema');

const router = express.Router();
const service = new DocumentService();

router.get('/', async (req, res, next) => {
  try {
    const Documents = await service.find();
    res.json(Documents);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getDocumentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createDocumentSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getDocumentSchema, 'params'),
  validatorHandler(updateDocumentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getDocumentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;