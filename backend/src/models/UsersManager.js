const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  /* ******************************* Create ****************************** */

  async create(user) {
    try {
      const [result] = await this.database.query(
        `insert into ${this.table} (username, email, password, register_date) values (?,?,?,?)`,
        [user.username, user.email, user.password, user.registerDate]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error on create user!", error);
      throw error;
    }
  }

  /* ******************************* Read ****************************** */

  async getByUsername(username) {
    try {
      const [result] = await this.database.query(
        `select id, username, email, description, register_date, is_admin, digi_point from ${this.table} where username LIKE ?`,
        [`%${username}%`]
      );
      return result;
    } catch (error) {
      console.error("Error on getByUsername!", error);
      throw error;
    }
  }

  async read(id) {
    try {
      const [result] = await this.database.query(
        `select id, username, email, description, register_date, is_admin, digi_point from ${this.table} where id LIKE ?`,
        [id]
      );
      return result;
    } catch (error) {
      console.error("Error on read user!", error);
      throw error;
    }
  }

  async readEmail(email) {
    try {
      const [rows] = await this.database.query(
        `SELECT * FROM ${this.table} WHERE email = ?`,
        [email]
      );
      return rows[0];
    } catch (error) {
      console.error("Error on readEmail!", error);
      throw error;
    }
  }

  async readAll() {
    try {
      const [result] = await this.database.query(
        `select id, username, email, description, register_date, is_admin, digi_point from ${this.table}`
      );
      return result;
    } catch (error) {
      console.error("Error on readAll user!", error);
      throw error;
    }
  }

  async readDate(registerDate) {
    try {
      const [rows] = await this.database.query(
        `SELECT id, username, email, description, register_date, is_admin, digi_point FROM ${this.table} WHERE register_date LIKE ?`,
        [`%${registerDate}%`]
      );
      return rows;
    } catch (error) {
      console.error("Error on readDate!", error);
      throw error;
    }
  }

  async readAllUsers() {
    try {
      const [rows] = await this.database.query(`SELECT id FROM ${this.table}`);
      return rows[rows.length - 1];
    } catch (error) {
      console.error("Error on readAllUsers!", error);
      throw error;
    }
  }
  /* ******************************* Update ****************************** */

  async update(id, updatesFields) {
    const allowedFields = ["username", "email", "password", "description"];

    const fieldsToUpdate = Object.keys(updatesFields).filter((field) =>
      allowedFields.includes(field)
    );

    const values = fieldsToUpdate.map((field) => updatesFields[field]);

    if (fieldsToUpdate.length === 0) {
      return 0;
    }

    const updateQuery = `UPDATE ${this.table} SET ${fieldsToUpdate
      .map((field) => `${field} = ?`)
      .join(", ")} WHERE id = ?`;

    values.push(id);

    const [result] = await this.database.query(updateQuery, values);

    return result.affectedRows;
  }

  async updateDigiPoint(id, digiPoint) {
    try {
      const [result] = await this.database.query(
        `UPDATE ${this.table} SET digi_point = ? WHERE id = ?`,
        [digiPoint, id]
      );
      if (result.affectedRows === 0) {
        throw new Error("DigiPoint not found!");
      }

      const [updateUser] = await this.database.query(
        `SELECT digi_point FROM ${this.table} WHERE id = ?`,
        [id]
      );
      return updateUser[0];
    } catch (error) {
      console.error("Error on updateDigiPoint!", error);
      throw error;
    }
  }
  /* ******************************* Delete ****************************** */

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = UsersManager;
