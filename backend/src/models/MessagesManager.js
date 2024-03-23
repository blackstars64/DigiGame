const AbstractManager = require("./AbstractManager");

class MessagesManager extends AbstractManager {
  constructor() {
    super({ table: "messages" });
  }

  /* ******************************* Create ****************************** */

  async create(message) {
    try {
      const [result] = await this.database.query(
        `insert into ${this.table} ( message, users_id, received) values (?,?,?)`,
        [message.message, message.userId, message.received]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error on create message!", error);
      throw error;
    }
  }

  /* ******************************* Read ****************************** */

  async getAll() {
    try {
      const [result] = await this.database.query(
        `select u.username, u.profile_img, m.users_id, m.id, m.message, m.received from ${this.table} AS m
        INNER JOIN users AS u ON m.users_id = u.id ORDER BY m.id ASC`
      );
      return result;
    } catch (error) {
      console.error("Error on getAll messages!", error);
      throw error;
    }
  }

  async getByUserId(userId) {
    try {
      const [result] = await this.database.query(
        `select * from ${this.table} where user_id = ?`,
        [userId]
      );
      return result;
    } catch (error) {
      console.error("Error on getByUserId messages!", error);
      throw error;
    }
  }

  /* ******************************* Update ****************************** */

  async update(id, message) {
    try {
      const [result] = await this.database.query(
        `update ${this.table} set message = ? where id = ?`,
        [message.message, id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error on update message!", error);
      throw error;
    }
  }

  /* ******************************* Delete ****************************** */

  async delete(id) {
    try {
      const [result] = await this.database.query(
        `delete from ${this.table} where id = ?`,
        [id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error on delete message!", error);
      throw error;
    }
  }

  async deleteByUserId(userId) {
    try {
      const [result] = await this.database.query(
        `delete from ${this.table} where user_id = ?`,
        [userId]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error on deleteByUserId message!", error);
      throw error;
    }
  }
}

module.exports = MessagesManager;
