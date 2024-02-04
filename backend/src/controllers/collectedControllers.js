const table = require("../tables");

/* ******************************* GET ****************************** */

const read = async (req, res, next) => {
  try {
    const id = req.params.idUser;
    const digimon = await table.collected.readDigimonCollected(id);
    if (digimon) {
      res.json(digimon);
    } else {
      res.status(404).json({ message: "Digimon not found" });
    }
  } catch (err) {
    console.error("Error in read", err);
    next();
  }
};

/* ******************************* POST ****************************** */

const add = async (req, res, next) => {
  try {
    const { userId, digimonId } = req.body;
    const result = await table.collected.create({ digimonId, userId });
    if (!result) {
      res.status(400).json({ message: "Error adding digimon" });
    } else {
      res.status(201).json(result);
    }
  } catch (err) {
    console.error("Error in add", err);
    next();
  }
};

module.exports = {
  read,
  add,
};
