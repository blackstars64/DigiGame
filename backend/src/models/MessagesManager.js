const AbstractManager = require("./AbstractManager");

class MessagesManager extends AbstractManager {
  constructor() {
    super({ table: "messages" });
  }

  /* ******************************* Create ****************************** */

  async create(message) {
    try {
    const [result] = await this.database.query(
      `insert into ${this.table} (title, message, user_id, received) values (?,?,?)`,
      [message.title, message.message, message.userId, message.received]
    );
    return result.insertId;
    }catch(error){
        console.error("Error on create message!", error);
    }
  }

  /* ******************************* Read ****************************** */

  async getAll() {
    try {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return result;
    }catch(error){
        console.error("Error on getAll messages!", error);
    }
  }

  async getByUserId(userId) {
    try {
    const [result] = await this.database.query(
      `select * from ${this.table} where user_id = ?`,
      [userId]
    );
    return result;
    }catch(error){
        console.error("Error on getByUserId messages!", error);
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
    }catch(error){
        console.error("Error on update message!", error);
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
    }catch(error){
        console.error("Error on delete message!", error);
    }
  }

  async deleteByUserId(userId) {
    try {
    const [result] = await this.database.query(
      `delete from ${this.table} where user_id = ?`,
      [userId]
    );
    return result.affectedRows > 0;
    }catch(error){
        console.error("Error on deleteByUserId message!", error);
    }
  }
}

module.exports = MessagesManager;