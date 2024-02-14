const tables = require("../tables");

/* ******************************* GET ****************************** */

const browse = async (req, res, next) => {
  try {
    const user = await tables.users.readAll();

    res.json(user);
  } catch (err) {
    next(err);
  }
};

const readAllUsers = async (req, res, next) => {
  try {
    const users = await tables.users.readAllUsers();
    if (users.length === 0) {
      res.status(404).json({ message: "No users found" });
    } else {
      res.json(users);
    }
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const users = await tables.users.read(req.params.id);

    if (users == null) {
      res.sendStatus(404).json({ message: "User not found" });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
};
const readUser = async (req, res, next) => {
  try {
    const { name } = await req.query;
    const users = await tables.users.getByUsername(name);

    if (users == null) {
      res.sendStatus(404).json({ message: "User not found" });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
};

const readDate = async (req, res, next) => {
  try {
    const { registerDate } = await req.query;
    const users = await tables.users.readDate(registerDate);

    if (users == null) {
      res.sendStatus(404).json({ message: "User not found" });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
};

/* ******************************* POST ****************************** */

const add = async (req, res, next) => {
  const registerDate = new Date();
  try {
    const { username, email, password } = req.body;

    const newUser = await tables.users.create({
      username,
      email,
      password,
      registerDate,
    });

    res.json({ message: "New user added good game!", user: newUser });
  } catch (err) {
    next(err);
  }
};

/* ******************************* PUT ****************************** */

const edit = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Empty body" });
    }

    const { username, email, description, idImg } = req.body;

    const haveUser = await tables.users.read(id);

    if (!haveUser) {
      return res.status(404).json({ message: "user not found" });
    }

    const updatedFields = {};

    if (username !== undefined) {
      updatedFields.username = username;
    }
    if (email !== undefined) {
      updatedFields.email = email;
    }
    if (description !== undefined) {
      updatedFields.description = description;
    }
    if (idImg !== undefined) {
      updatedFields.profile_img = idImg;
    }

    const affectedRows = await tables.users.update(id, updatedFields);

    if (affectedRows === 0) {
      return res.status(500).json({ message: "Update fail" });
    }

    const editeduser = await tables.users.read(id);
    return res.json({ message: "Success Update", user: editeduser });
  } catch (err) {
    return res.status(500).json({ message: "Error on user update" });
  }
};

const editDigiPoint = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "Empty body" });
    }
    const { id } = req.params;
    const { digiPoint } = req.body;

    const affectedRows = await tables.users.updateDigiPoint(id, digiPoint);

    if (affectedRows === 0) {
      res.status(500).json({ message: "Update fail" });
    } else {
      res.json({ message: "Success Update", user: affectedRows });
    }
  } catch (err) {
    res.status(500).json({ message: "Error on user update" });
    throw err;
  }
};

/* ******************************* Delete ****************************** */

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await tables.users.delete(id);

    res.sendStatus(204).json({ message: "User deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readAllUsers,
  read,
  readUser,
  readDate,
  add,
  edit,
  editDigiPoint,
  deleteUser,
};
