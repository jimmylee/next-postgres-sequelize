module.exports = {
  users: {
    list: ({ req, User, Post, Comment }) => {
      return {
        attributes: {
          exclude: ['salt', 'password'],
        },
        order: [['createdAt', 'DESC']],
      };
    },
    get: ({ req, User, Post, Comment }) => {
      return {
        attributes: {
          exclude: ['salt', 'password'],
        },
        include: [
          {
            model: Post,
            as: 'posts',
          },
          {
            model: Comment,
            as: 'comments',
          },
        ],
        order: [['createdAt', 'DESC']],
      };
    },
  },
  posts: {
    list: ({ req, User, Post, Comment }) => {
      return {
        include: [
          {
            model: Comment,
            as: 'comments',
            include: [
              {
                model: User,
                as: 'user',
                attributes: {
                  exclude: ['salt', 'password'],
                },
              },
              {
                model: Post,
                as: 'post',
              },
              {
                model: Comment,
                as: 'replies',
                include: [
                  {
                    model: User,
                    as: 'user',
                    attributes: {
                      exclude: ['salt', 'password'],
                    },
                  },
                ],
              },
            ],
          },
          {
            model: User,
            as: 'user',
            attributes: {
              exclude: ['salt', 'password'],
            },
          },
        ],
        order: [['createdAt', 'DESC']],
      };
    },
    get: ({ req, User, Post, Comment }) => {
      return {
        include: [
          {
            model: Comment,
            as: 'comments',
            where: {
              commentId: null,
            },
            include: [
              {
                model: User,
                as: 'user',
                attributes: {
                  exclude: ['salt', 'password'],
                },
              },
              {
                model: Post,
                as: 'post',
              },
              {
                model: Comment,
                as: 'replies',
                include: [
                  {
                    model: User,
                    as: 'user',
                    attributes: {
                      exclude: ['salt', 'password'],
                    },
                  },
                ],
              },
            ],
          },
          {
            model: User,
            as: 'user',
            attributes: {
              exclude: ['salt', 'password'],
            },
          },
        ],
      };
    },
  },
  comments: {
    list: ({ req, User, Post, Comment }) => {
      return {
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: User,
            as: 'user',
            attributes: {
              exclude: ['salt', 'password'],
            },
          },
          {
            model: Post,
            as: 'post',
          },
          {
            model: Comment,
            as: 'replies',
            order: [['createdAt']],
            include: [
              {
                model: User,
                as: 'user',
                attributes: {
                  exclude: ['salt', 'password'],
                },
              },
            ],
          },
          {
            model: Comment,
            as: 'parent',
            include: [
              {
                model: User,
                as: 'user',
                attributes: {
                  exclude: ['salt', 'password'],
                },
              },
            ],
          },
        ],
      };
    },
    listForUser: ({ req, User, Post, Comment }) => {
      return {
        where: {
          id: req.params.commentId,
          userId: req.user.id,
        },
        include: [
          {
            model: User,
            as: 'user',
            attributes: {
              exclude: ['salt', 'password'],
            },
          },
          {
            model: Post,
            as: 'post',
          },
          {
            model: Comment,
            as: 'replies',
            order: [['createdAt']],
          },
        ],
        order: [['createdAt', 'DESC']],
      };
    },
    get: ({ req, User, Post, Comment }) => {
      return {
        where: {
          id: req.params.commentId,
          postId: req.params.postId,
          userId: req.user.id,
        },
        include: [
          {
            model: User,
            as: 'user',
            attributes: {
              exclude: ['salt', 'password'],
            },
          },
          {
            model: Post,
            as: 'post',
          },
          {
            model: Comment,
            as: 'replies',
            order: [['createdAt']],
            include: [
              {
                model: User,
                as: 'user',
                attributes: {
                  exclude: ['salt', 'password'],
                },
              },
            ],
          },
        ],
      };
    },
  },
};
