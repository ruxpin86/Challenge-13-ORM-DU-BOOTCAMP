const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  let result = await Category.findAll({include:[
    {
      model: Product
    },
  ]})
  res.status(200).json(result)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const result = await Category.findOne({
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
  // create a new category
  const newCategory = await Category.create(req.body)
  res.status(200).json(newCategory)
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const update = await Category.update(req.body, {
    where:{
      id:req.params.id
    }
  })
  res.status(200).json(update)
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  const delCategory = await Category.destroy({
    where:{
      id: req.params.id
    }
  })
  res.status(200).json(delCategory)
});

module.exports = router;
