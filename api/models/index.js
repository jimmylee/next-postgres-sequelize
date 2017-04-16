import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const db = {};
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = require(`${__dirname}/../../config.js`)[env];

let sequelize = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  sequelizeConfig
);

db.User = sequelize.import(path.join(__dirname, 'user.js'));
db.Post = sequelize.import(path.join(__dirname, 'post.js'));
db.Comment = sequelize.import(path.join(__dirname, 'comment.js'));

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
