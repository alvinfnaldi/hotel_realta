const { Member } = require("../models");

const getMember = async (req, res) => {
  try {
    const result = await Member.findAndCountAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMember = async (req, res) => {
  try {
    const { memb_name, memb_description } = req.body;

    const memberExist = await Member.findOne({ where: { memb_name } });

    if (memberExist) {
      res.status(400).json({ error: "Member name already exist" });
    } else {
      if (!memb_name) {
        res.status(400).json({ error: "Member name must be provided" });
      } else {
        const result = await Member.create({
          memb_name,
          memb_description,
        });
        res.status(201).json(result);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMember = async (req, res) => {
  try {
    const memb_name = req.params.name;
    const result = await Member.destroy({
      where: { memb_name },
    });
    result === 1
      ? res
          .status(200)
          .json({ message: `Member ${memb_name} has been deleted` })
      : res.status(404).json({ message: `There's no member ${memb_name}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailMember = async (req, res) => {
  try {
    const memb_name = req.params.name;
    const result = await Member.findByPk(memb_name);
    result
      ? res.status(200).json(result)
      : res.status(404).json({
          message: `Detail Member ${memb_name} not found`,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMember,
  addMember,
  deleteMember,
  getDetailMember,
};
