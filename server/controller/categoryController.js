const { Category_Group } = require("../models");

const getCategory = async (req, res) => {
  try {
    const result = await Category_Group.findAll({
      order: [["cagro_id", "ASC"]]
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCategory = async (req, res) => {
  try {
    const { cagro_name, cagro_description, cagro_type } = req.body;
    let cagro_icon, cagro_icon_url

    if (!cagro_name) {
      res.status(400).json({ error: "Category group name must be provided" });
    } else {
      const result = await Category_Group.create({
        cagro_name,
        cagro_description,
        cagro_type,
        cagro_icon,
        cagro_icon_url,
      });
      res.status(201).json(result);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const cagro_id = +req.params.cagro_id;
    const result = await Category_Group.destroy({
      where: { cagro_id },
    });
    result === 1
      ? res
        .status(200)
        .json({ message: `Category with id ${cagro_id} has been deleted` })
      : res
        .status(404)
        .json({ message: `There's no category with id ${cagro_id}` });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCategory = async (req, res) => {
  try {
    const cagro_id = +req.params.cagro_id;
    const {
      cagro_name,
      cagro_description,
      cagro_type,
      cagro_icon,
      cagro_icon_url,
    } = req.body;

    if (!cagro_name) {
      res.status(400).json({ error: "Category Group name must be provided" });
    } else {
      const result = await Category_Group.update(
        {
          cagro_name,
          cagro_description,
          cagro_type,
          cagro_icon,
          cagro_icon_url,
        },
        { where: { cagro_id } }
      );
      result[0] === 1
        ? res
          .status(200)
          .json({ message: `Category with id ${cagro_id} has been updated` })
        : res
          .status(404)
          .json({ message: `There's no category with id ${cagro_id}` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailCategory = async (req, res) => {
  try {
    const cagro_id = +req.params.cagro_id;
    const result = await Category_Group.findByPk(cagro_id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({
        message: `Detail Category with id ${cagro_id} not found`,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showImg = async (req, res) => {
  const { img } = req.params;
  res.sendFile(img, { root: ".public/image/master" })
};

module.exports = {
  getCategory,
  addCategory,
  deleteCategory,
  updateCategory,
  getDetailCategory,
  showImg
};
