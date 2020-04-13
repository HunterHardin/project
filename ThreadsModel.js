class ThreadsModel {
    constructor (DAO) {
        this.DAO = DAO
    }
  
    async createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS threads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT
        )`
        return await this.DAO.run(sql)
    }

    async add (comment) {
        return await this.DAO.run(
            'INSERT INTO threads (text) VALUES (?)',
            [comment]
        );
    }
    
    async getAll () {
        return await this.DAO.all(
            'SELECT text FROM threads'
        );
    }
}
  
module.exports = ThreadsModel;