const AbstractManager = require("./AbstractManager");

class CollectedsManager extends AbstractManager {
  constructor() {
    super({ table: "collected" });
  }

  async readDigimonCollected(id) {
    try {
      const [rows] = await this.database.query(
        `
  SELECT d.id, d.name, d.img, d.level FROM ${this.table} AS c
  INNER JOIN digimons AS d ON c.digimon_id = d.id
  INNER JOIN users AS u ON c.users_id = u.id
  WHERE u.id = ?`,
        [id]
      );
      return rows;
    } catch (error) {
      console.error("Error on readDigimonCollected!", error);
      throw error;
    }
  }

  async create(collected) {
    try {
      const [result] = await this.database.query(
        `insert into ${this.table} (digimon_id, users_id) values (?,?)`,
        [collected.digimonId, collected.userId]
      );
      return result.affectedRows === 1;
    } catch (error) {
      console.error("Error on create collected!", error);
      throw error;
    }
  }
}
module.exports = CollectedsManager;
