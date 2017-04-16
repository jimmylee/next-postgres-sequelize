module.exports = {
  development: {
    username: 'test',
    password: 'test',
    database: 'testdb',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PRODUCTION_USERNAME,
    password: process.env.PRODUCTION_PASSWORD,
    database: process.env.PRODUCTION_DATABASE,
    host: process.env.PRODUCTION_HOST,
    port: process.env.PRODUCTION_PORT,
    dialect: 'postgres',
  },
  session: {
    secret: process.env.PRODUCTION_SECRET || 'placeholdersecret',
  },
};
