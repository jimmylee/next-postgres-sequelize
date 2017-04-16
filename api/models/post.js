module.exports = (Sequelize, DataTypes) => {
  const Post = Sequelize.define(
    'Post',
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      classMethods: {
        associate: models => {
          Post.hasMany(models.Comment, {
            foreignKey: 'postId',
            as: 'comments',
          });

          Post.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
          });
        },
      },
    }
  );

  return Post;
};
