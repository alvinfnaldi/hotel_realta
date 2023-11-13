const { Policy } = require("../models");

const getPolicy = async (req, res) => {
  try {
    const result = await Policy.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addPolicy = async (req, res) => {
  try {
    const { poli_name, poli_description } = req.body;

    if (!poli_name) {
      res.status(400).json({ error: "Policy name must be provided" });
    } else {
      const result = await Policy.create({
        poli_name,
        poli_description,
      });
      res.status(201).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePolicy = async (req, res) => {
  try {
    const poli_id = +req.params.poli_id;
    const result = await Policy.destroy({
      where: { poli_id },
    });
    result === 1
      ? res
          .status(200)
          .json({ message: `Policy with id ${poli_id} has been deleted` })
      : res
          .status(404)
          .json({ message: `There's no policy with id ${poli_id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePolicy = async (req, res) => {
  try {
    const poli_id = +req.params.poli_id;
    const { poli_name, poli_description } = req.body;

    if (!poli_name) {
      res.status(400).json({ error: "Policy name must be provided" });
    } else {
      const result = await Policy.update(
        {
          poli_name,
          poli_description,
        },
        { where: { poli_id } }
      );
      result[0] === 1
        ? res
            .status(200)
            .json({ message: `Policy with id ${poli_id} has been updated` })
        : res
            .status(404)
            .json({ message: `There's no policy with id ${poli_id}` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailPolicy = async (req, res) => {
  try {
    const poli_id = +req.params.poli_id;
    const result = await Policy.findByPk(poli_id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({
          message: `Detail Policy with id ${poli_id} not found`,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPolicy,
  addPolicy,
  deletePolicy,
  updatePolicy,
  getDetailPolicy,
};
