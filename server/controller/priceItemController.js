const { Price_Item } = require("../models");

const getPrice = async (req, res) => {
  try {
    const result = await Price_Item.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addPrice = async (req, res) => {
  try {
    const { prit_name, prit_price, prit_description } = req.body;

    let prit_type;
    const modifdate = new Date();

    if (!prit_name) {
      res.status(400).json({ error: "Item name must be provided" });
    } else {
      const result = await Price_Item.create({
        prit_name,
        prit_price,
        prit_description,
        prit_type,
        prit_modified_date: modifdate,
      });
      res.status(201).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePrice = async (req, res) => {
  try {
    const prit_id = +req.params.prit_id;
    const result = await Price_Item.destroy({
      where: { prit_id },
    });
    result === 1
      ? res
          .status(200)
          .json({ message: `Price with id ${prit_id} has been deleted` })
      : res
          .status(404)
          .json({ message: `There's no Price with id ${prit_id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePrice = async (req, res) => {
  try {
    const prit_id = +req.params.prit_id;
    const { prit_name, prit_price, prit_description, prit_type } = req.body;

    const result = await Price_Item.update(
      {
        prit_name,
        prit_price,
        prit_description,
        prit_type,
      },
      { where: { prit_id } }
    );
    result[0] === 1
      ? res
          .status(200)
          .json({ message: `Price with id ${prit_id} has been updated` })
      : res
          .status(404)
          .json({ message: `There's no price with id ${prit_id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailPrice = async (req, res) => {
  try {
    const prit_id = +req.params.prit_id;
    const result = await Price_Item.findByPk(prit_id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({
          message: `Detail Price with id ${prit_id} not found`,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPrice,
  addPrice,
  deletePrice,
  updatePrice,
  getDetailPrice,
};
