import path from 'path';
import sequelize from 'sequelize';

const db = {};
const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = require(`${__dirname}/../../config.js`)[env];

const ORM = new sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  sequelizeConfig
);

db.User = ORM.import(path.join(__dirname, 'user.js'));
db.Post = ORM.import(path.join(__dirname, 'post.js'));
db.Comment = ORM.import(path.join(__dirname, 'comment.js'));

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.ORM = ORM;
db.sequelize = sequelize;

module.exports = db;
