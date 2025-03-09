const schemes = require("../models/govtSchemesModel");

const getSchemes = (req, res) => {
  res.json(schemes);
};

module.exports = { getSchemes };
