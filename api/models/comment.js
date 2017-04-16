module.exports = (Sequelize, DataTypes) => {
  const Comment = Sequelize.define(
    'Comment',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate: models => {
          Comment.belongsTo(models.Post, {
            foreignKey: 'postId',
            onDelete: 'CASCADE',
          });

          Comment.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
          });
        },
      },
    }
  );

  return Comment;
};
