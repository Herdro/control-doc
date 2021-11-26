const express = require('express');

const ProyectService = require('../services/proyects.service');
const validatorHandler = require('../middleware/validator.handler');
const { updateProyectSchema, createProyectSchema, getProyectSchema } = require('../schema/proyects.schema');

const router = express.Router();
const service = new ProyectService();

router.get('/', async (req, res, next) => {
  try {
    const Proyects = await service.find();
    res.json(Proyects);
  } catch (error) {
    next(error);
  }
});

router.get('/search/:proyectCode',
  validatorHandler(updateProyectSchema, 'params'),
  async (req, res, next) => {
    try {
      const { proyectCode } = req.params;
      const category = await service.findLike(proyectCode);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  validatorHandler(getProyectSchema, 'params'),
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
  validatorHandler(createProyectSchema, 'body'),
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
  validatorHandler(getProyectSchema, 'params'),
  validatorHandler(updateProyectSchema, 'body'),
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
  validatorHandler(getProyectSchema, 'params'),
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