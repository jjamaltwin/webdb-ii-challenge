const db = require('./dbConfig');

module.exports = {
  READ,
  CREATE,
  findByVin
};


function READ(query={}) {
    let { page = 1, limit = 5, sortby = 'VIN', sortdir = 'asc' } = query;
    const offset = limit * (page - 1);
  
    let rows = db('cars')
      .orderBy(sortby, sortdir)
      .limit(limit)
      .offset(offset);
  
    return rows;
  }

  function findByVin(vin) {
    return db('cars')
      .where({ vin })
      .first();
  }

  async function CREATE(car) {
    const [vin] = await db('cars').insert(car);
  
    return findByVin(vin);
  }