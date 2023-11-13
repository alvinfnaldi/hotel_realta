const { Region, Country, Province, Address } = require("../models");

// regions
const getRegion = async (req, res) => {
  try {
    const result = await Region.findAll({
      include: [Country],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addRegion = async (req, res) => {
  try {
    const { region_name } = req.body;
    const regionExist = await Region.findOne({ where: { region_name } });
    if (regionExist) {
      res.status(400).json({ message: `Region ${region_name} already exists` });
    } else {
      if (!region_name) {
        res.status(400).json({ message: "Region must be provided" });
      } else {
        const result = await Region.create({ region_name });
        res.status(201).json(result);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRegion = async (req, res) => {
  try {
    const region_code = +req.params.region_code;
    const result = await Region.destroy({
      where: { region_code },
    });
    result === 1
      ? res
          .status(200)
          .json({ message: `Region with id ${region_code} has been deleted` })
      : res
          .status(404)
          .json({ message: `There's no region with id ${region_code}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRegion = async (req, res) => {
  try {
    const region_code = +req.params.region_code;
    const { region_name } = req.body;

    if (!region_name) {
      res.status(400).json({ message: "Region must be provided" });
    } else {
      const result = await Region.update(
        {
          region_name,
        },
        { where: { region_code } }
      );
      result[0] === 1
        ? res
            .status(200)
            .json({ message: `Region with id ${region_code} has been updated` })
        : res
            .status(404)
            .json({ message: `There's no region with id ${region_code}` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailRegion = async (req, res) => {
  try {
    const region_code = +req.params.region_code;
    const result = await Region.findByPk(region_code);
    result
      ? res.status(200).json(result)
      : res.status(404).json({
          message: `Detail Region with id ${region_code} not found`,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// country
const getCountry = async (req, res) => {
  try {
    const result = await Country.findAll({
      include: [Province],
      order: [["country_id", "ASC"]],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCountry = async (req, res) => {
  try {
    const { country_name, country_region_id } = req.body;
    const countryExist = await Country.findOne({ where: { country_name } });

    if (countryExist) {
      res
        .status(400)
        .json({ message: `Country ${country_name} already exists` });
    } else {
      if (!country_name) {
        res.status(400).json({ message: "Country must be provided" });
      } else {
        const result = await Country.create({
          country_name,
          country_region_id,
        });
        res.status(201).json(result);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCountry = async (req, res) => {
  try {
    const country_id = +req.params.country_id;
    const result = await Country.destroy({
      where: { country_id },
    });
    result === 1
      ? res
          .status(200)
          .json({ message: `Country with id ${country_id} has been deleted` })
      : res
          .status(404)
          .json({ message: `There's no country with id ${country_id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCountry = async (req, res) => {
  try {
    const country_id = +req.params.country_id;
    const { country_name, country_region_id } = req.body;

    if (!country_name) {
      res.status(400).json({ message: "Country must be provided" });
    } else {
      const result = await Country.update(
        {
          country_name,
          country_region_id,
        },
        { where: { country_id } }
      );
      result[0] === 1
        ? res
            .status(200)
            .json({ message: `Country with id ${country_id} has been updated` })
        : res
            .status(404)
            .json({ message: `There's no country with id ${country_id}` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailCountry = async (req, res) => {
  try {
    const country_id = +req.params.country_id;
    const result = await Country.findByPk(country_id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({
          message: `Detail Country with id ${country_id} not found`,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// provinces
const getProvince = async (req, res) => {
  try {
    const result = await Province.findAll({
      include: [Address],
      order: [
        ["prov_id", "ASC"],
        [Address, "addr_id", "ASC"],
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addProvince = async (req, res) => {
  try {
    const { prov_name, prov_country_id } = req.body;

    const provinceExist = await Province.findOne({ where: { prov_name } });

    if (provinceExist) {
      res.status(400).json({ message: `Province ${prov_name} already exists` });
    } else {
      if (!prov_name) {
        res.status(400).json({ message: "Province must be provided" });
      } else {
        const result = await Province.create({
          prov_name,
          prov_country_id,
        });
        res.status(201).json(result);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProvince = async (req, res) => {
  try {
    const prov_id = +req.params.prov_id;
    const result = await Province.destroy({
      where: { prov_id },
    });
    result === 1
      ? res
          .status(200)
          .json({ message: `Province with id ${prov_id} has been deleted` })
      : res
          .status(404)
          .json({ message: `There's no province with id ${prov_id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProvince = async (req, res) => {
  try {
    const prov_id = +req.params.prov_id;
    const { prov_name, prov_country_id } = req.body;

    if (!prov_name) {
      res.status(400).json({ message: "Province must be provided" });
    } else {
      const result = await Province.update(
        {
          prov_name,
          prov_country_id,
        },
        { where: { prov_id } }
      );
      result[0] === 1
        ? res
            .status(200)
            .json({ message: `Province with id ${prov_id} has been updated` })
        : res
            .status(404)
            .json({ message: `There's no province with id ${prov_id}` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailProvince = async (req, res) => {
  try {
    const prov_id = +req.params.prov_id;
    const result = await Province.findByPk(prov_id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({
          message: `Detail Province with id ${prov_id} not found`,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// city
const getCity = async (req, res) => {
  try {
    const result = await Address.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCity = async (req, res) => {
  try {
    const {
      addr_line1,
      addr_line2,
      addr_postal_code,
      lat,
      long,
      addr_prov_id,
    } = req.body;
    const addr_spatial_location = {
      type: "Point",
      coordinates: [lat, long],
      crs: { type: "name", properties: { name: "EPSG:4326" } },
    };

    if (!addr_line1) {
      res.status(400).json({ message: "Address must be provided" });
    } else {
      const result = await Address.create({
        addr_line1,
        addr_line2,
        addr_postal_code,
        lat,
        long,
        addr_spatial_location,
        addr_prov_id,
      });
      res.status(201).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCity = async (req, res) => {
  try {
    const addr_id = +req.params.addr_id;
    const result = await Address.destroy({
      where: { addr_id },
    });
    result === 1
      ? res
          .status(200)
          .json({ message: `City with id ${addr_id} has been deleted` })
      : res.status(404).json({ message: `There's no city with id ${addr_id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCity = async (req, res) => {
  try {
    const addr_id = +req.params.addr_id;
    const {
      addr_line1,
      addr_line2,
      addr_postal_code,
      lat,
      long,
      addr_prov_id,
    } = req.body;
    const addr_spatial_location = {
      type: "Point",
      coordinates: [lat, long],
      crs: { type: "name", properties: { name: "EPSG:4326" } },
    };

    if (!addr_line1) {
      res.status(400).json({ message: "Address must be provided" });
    } else {
      const result = await Address.update(
        {
          addr_line1,
          addr_line2,
          addr_postal_code,
          lat,
          long,
          addr_spatial_location,
          addr_prov_id,
        },
        { where: { addr_id } }
      );
      result[0] === 1
        ? res
            .status(200)
            .json({ message: `Address with id ${addr_id} has been updated` })
        : res
            .status(404)
            .json({ message: `There's no address with id ${addr_id}` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailCity = async (req, res) => {
  try {
    const addr_id = +req.params.addr_id;
    const result = await Address.findByPk(addr_id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({
          message: `Detail City with id ${addr_id} not found`,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRegion,
  addRegion,
  deleteRegion,
  updateRegion,
  getDetailRegion,
  getCountry,
  addCountry,
  deleteCountry,
  updateCountry,
  getDetailCountry,
  getProvince,
  addProvince,
  deleteProvince,
  updateProvince,
  getDetailProvince,
  getCity,
  addCity,
  deleteCity,
  updateCity,
  getDetailCity,
};
