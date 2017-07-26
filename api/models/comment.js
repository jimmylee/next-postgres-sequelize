module.exports = (Sequelize, DataTypes) => {
  const Comment = Sequelize.define('Comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Comment.associate = models => {
    Comment.hasMany(models.Comment, {
      foreignKey: 'commentId',
      as: 'replies',
      onDelete: 'CASCADE',
    });

    Comment.belongsTo(models.Comment, {
      foreignKey: 'commentId',
      as: 'parent',
      onDelete: 'CASCADE',
    });

    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post',
      onDelete: 'CASCADE',
    });

    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };

  return Comment;
};
