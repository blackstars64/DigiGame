const tables = require("../tables");

/* ******************************* POST ****************************** */

const add = async (req, res, next) => {
  const received = new Date();
  const { message, userId } = req.body;

  try {
    const newMessage = await tables.messages.create({
      message,
      userId,
      received,
    });
    if (!newMessage) {
      res.status(400).json({ message: "Error adding message" });
    } else {
      res.status(201).json(newMessage);
    }
  } catch (error) {
    next(error);
  }
};

/* ******************************* PUT ****************************** */

const edit = async (req, res, next) => {
  const messageId = req.params.id;
  const updatedMessage = req.body;

  try {
    const editedMessage = await tables.messages.update(messageId, {
      updatedMessage,
    });
    if (!editedMessage) {
      res.status(400).json({ message: "Error editing message" });
    } else {
      res.status(200).json(editedMessage);
    }
  } catch (error) {
    next(error);
  }
};

/* ******************************* GET ****************************** */

const browse = async (req, res, next) => {
  try {
    const messages = await tables.messages.getAll();
    if (!messages) {
      res.status(404).json({ message: "Messages not found" });
    } else {
      res.json(messages);
    }
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const message = await tables.messages.getByUserId(userId);
    if (!message) {
      res.status(404).json({ message: "Message not found" });
    } else {
      res.status(200).json(message);
    }
  } catch (error) {
    next(error);
  }
};

/* ******************************* DELETE ****************************** */

const destroyMessage = async (req, res, next) => {
  const messageId = await req.params.id;

  try {
    await tables.messages.delete(messageId);

    res.status(204).json({ message: "The message is deleted" }).end();
  } catch (error) {
    next(error);
  }
};

const destroyUser = async (req, res, next) => {
  const userId = await req.params.id;

  try {
    await tables.messages.deleteByUserId(userId);

    res
      .status(204)
      .json({ message: "all messages for this user is deleted" })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  edit,
  browse,
  read,
  destroyMessage,
  destroyUser,
};
