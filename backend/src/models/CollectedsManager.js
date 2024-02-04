const AbstractManager = require("./AbstractManager");

class CollectedsManager extends AbstractManager {
  constructor() {
    super({ table: "collected" });
  }

  async readDigimonCollected(id) {
    try{
    const [rows] = await this.database.query(
      `
  SELECT d.id, d.name, d.img, d.level FROM ${this.table} AS c
  INNER JOIN digimons AS d ON c.digimon_id = d.id
  INNER JOIN user AS u ON c.user_id = u.id
  WHERE u.id = ?`,
      [id]
    );
    return rows;
}catch(error){
    console.error("Error on readDigimonCollected!", error);
  }
    }

  async create(collected) {
    try{
    const [result] = await this.database.query(
      `insert into ${this.table} (digimon_id, user_id) values (?,?)`,
      [collected.digimonId, collected.userId]
    );
    return result.affectedRows === 1;
  }catch(error){
    console.error("Error on create collected!", error);
  }
}
    
}
module.exports = CollectedsManager;