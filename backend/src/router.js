const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const digimonControllers = require("./controllers/digimonControllers");
const collectedControllers = require("./controllers/collectedControllers");
const messageControllers = require("./controllers/messageControllers");
const userMiddleware = require("./middlewares/userMiddleware");
const messageMiddleware = require("./middlewares/messageMiddleware");
const { hashPassword, verifyToken } = require("./services/auth");

// Define the API routes

/* **************************** AUTH ****************************************** */
// Post
router.post("/login", authControllers.login);

/* ***************************** DIGIMON *************************************** */
// Post
router.post("/digimons", digimonControllers.add);
// Get
router.get("/digimons", digimonControllers.browse);
router.get("/digimons/name", digimonControllers.readDigimon);
router.get("/digimons/level", digimonControllers.readLevel);
router.get("/digimons/number", digimonControllers.readAllNumber);
router.get("/digimons/:id", digimonControllers.read);
// Put
router.put("/digimons/:id", digimonControllers.edit);
// Delete
router.delete("/digimons/:id", digimonControllers.deleted);

/* ***************************** USER ***************************************** */
// Post
router.post("/user", userMiddleware, hashPassword, userControllers.add);
// Get
router.get("/user", userControllers.browse);
router.get("/user/all", userControllers.readAllUsers);
router.get("/user/name", userControllers.readUser);
router.get("/user/date", userControllers.readDate);
router.get("/user/:id", userControllers.read);
// Put
router.put("/user/:id", userMiddleware, userControllers.edit);
// Delete
router.delete("/user/:id", userControllers.deleteUser);

/* ***************************** COLLECTED ************************************ */
// Post
router.post("/collected", collectedControllers.add);
// Get
router.get("/collected/:id", collectedControllers.read);

/* ***************************** MESSAGE ************************************** */
// Post
router.post("/message", messageMiddleware, messageControllers.add);
// Get
router.get("/message", messageControllers.browse);
router.get("/message/:id", messageControllers.read);
// Put
router.put("/message/:id", messageControllers.edit);
// Delete
router.delete("/message/user/:id", messageControllers.destroyUser);
router.delete("/message/:id", messageControllers.destroyMessage);

/* ************************************************************************* */

router.use(verifyToken);

module.exports = router;
