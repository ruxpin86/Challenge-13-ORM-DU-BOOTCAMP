const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const result = await Tag.findAll({include:[
    {
      model: Product
    },
  ]})
  res.status(200).json(result)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  let result = await Tag.findOne({
    where:{
      id: req.params.id
    },
    include:[
    {
      model: Product
    },
  ]})
  res.status(200).json(result)
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = await Tag.create(req.body)
  res.status(200).json(newTag)
  });

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const update = await Tag.update(req.body, {
    where: {
      id: req.params.id
    } 
  })
  res.status(200).json(update)
});

router.delete('/:id', async (req, res) => {
  // delete a tag by its `id` value
  const delTag = await Tag.destroy({
    where:{
      id: req.params.id
    }
  })
  res.status(200).json(delTag)
});

module.exports = router;
