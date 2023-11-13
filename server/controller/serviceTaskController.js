const { Service_Task } = require("../models");

const getService = async (req, res) => {
  try {
    const result = await Service_Task.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addService = async (req, res) => {
  try {
    const { seta_name, seta_seq } = req.body;

    if (!seta_name) {
      res.status(400).json({ error: "Service name must be provided" });
    } else {
      const result = await Service_Task.create({
        seta_name,
        seta_seq,
      });
      res.status(201).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const seta_id = +req.params.seta_id;
    const result = await Service_Task.destroy({
      where: { seta_id },
    });
    result === 1
      ? res
          .status(200)
          .json({ message: `Service with id ${seta_id} has been deleted` })
      : res
          .status(404)
          .json({ message: `There's no service with id ${seta_id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateService = async (req, res) => {
  try {
    const seta_id = +req.params.seta_id;
    const { seta_name, seta_seq } = req.body;

    const result = await Service_Task.update(
      {
        seta_name,
        seta_seq,
      },
      { where: { seta_id } }
    );
    result[0] === 1
      ? res
          .status(200)
          .json({ message: `Service with id ${seta_id} has been updated` })
      : res
          .status(404)
          .json({ message: `There's no service with id ${seta_id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailService = async (req, res) => {
  try {
    const seta_id = +req.params.seta_id;
    const result = await Service_Task.findByPk(seta_id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({
          message: `Detail Service with id ${seta_id} not found`,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getService,
  addService,
  deleteService,
  updateService,
  getDetailService,
};
