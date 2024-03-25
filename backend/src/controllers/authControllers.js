const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await tables.users.readEmail(email);

    if (user == null) {
      res.status(401).json({ error: "Email not found" });
      return;
    }

    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid password" });
      return;
    }

    // Si les informations d'identification sont valides, générer le token JWT
    const token = await jwt.sign(
      { id: user.id, isAdmin: user.is_admin },
      process.env.APP_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Supprimer les données sensibles de l'utilisateur avant de les renvoyer
    delete user.password;
    delete user.register_date;
    delete user.digi_point;
    delete user.description;
    delete user.email;
    delete user.username;
    delete user.profile_img;
    delete user.is_admin;
    delete user.id;

    // Renvoyer une réponse avec le token JWT et les données de l'utilisateur
    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    // Si une erreur se produit, renvoyer une réponse avec un statut 500 et l'erreur
    res.status(500).json({ error: error.message });
  }
};

const editPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password);
    const updatedUser = await tables.users.editPassword(id, hashedPassword);
    res.status(200).json({
      message: "Password updated",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login, editPassword };
