const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const authControllers = require("./controllers/authControllers");

// Define the API routes

/* **************************** AUTH ****************************************** */
// Post
router.post("/login", authControllers.login);

/* ************************************************************************* */

module.exports = router;
