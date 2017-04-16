module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: /^[a-z0-9\_\-]+$/i,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate: models => {
          User.hasMany(models.Post, {
            foreignKey: 'userId',
            as: 'posts',
          });

          User.hasMany(models.Comment, {
            foreignKey: 'userId',
            as: 'comments',
          });
        },
      },
    }
  );

  return User;
};
