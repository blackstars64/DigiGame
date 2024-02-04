const tables = require("../tables");

/* ******************************* POST ****************************** */

const add = (req, res, next) => {
  const received = new Date();
  const { title, message, userId } = req.body;

  try {
    const newMessage = tables.messages.create({
      title,
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

const edit = (req, res, next) => {
  const messageId = req.params.id;
  const updatedMessage = req.body;

  try {
    const editedMessage = tables.messages.editMessage(messageId, {
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

const browse = (req, res, next) => {
  try {
    const messages = tables.messages.browseMessages();
    if (!messages) {
      res.status(404).json({ message: "Messages not found" });
    } else {
      res.status(200).json(messages);
    }
  } catch (error) {
    next(error);
  }
};

const read = (req, res, next) => {
  const userId = req.params.id;

  try {
    const message = tables.messages.readMessage(userId);
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

const deleteMessage = (req, res, next) => {
  const messageId = req.params.id;

  try {
    tables.messages.delete(messageId);

    res.status(204).json({ message: "The message is deleted" }).end();
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req, res, next) => {
  const userId = req.params.id;

  try {
    tables.messages.deleteByUserId(userId);

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
  deleteMessage,
  deleteUser,
};
