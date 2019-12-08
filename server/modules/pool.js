const pg = require(`pg`);
const Pool = pg.Pool;

const config = {
  database: ``,
  host: `localhost`,
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on(`connect`, (client) => {
  console.log('pg connected');
});

pool.on(`error`, (err, client) => {
  console.log('Unexpected error in pg', err);
  process.exit(-1);
});

module.exports = pool;