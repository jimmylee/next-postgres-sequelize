import user from './controllers/user';
import post from './controllers/post';
import comment from './controllers/comment';

const authMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(403).send({
      message: 'not authenticated',
    });
  }
};

module.exports = app => {
  app.get('/api', (req, res) => {
    return res.status(200).send({
      message: 'Welcome',
    });
  });

  app.get('/api/authenticated', (req, res) => {
    if (req.isAuthenticated()) {
      return res.status(200).send({
        isAuthenticated: true,
      });
    }

    return res.status(403).send({
      isAuthenticated: false,
    });
  });

  app.post('/api/signup', user.create);
  app.post('/api/login', user.auth);
  app.post('/api/logout', authMiddleware, user.logout);

  app.post('/api/users', user.create);
  app.get('/api/users', user.list);
  app.get('/api/users/:userId', user.get);
  app.put('/api/users/:userId', authMiddleware, user.update);
  app.delete('/api/viewer/delete', authMiddleware, user.deleteViewer);

  app.post('/api/posts', authMiddleware, post.create);
  app.get('/api/posts', post.list);
  app.get('/api/posts/:postId', post.get);
  app.put('/api/posts/:postId', authMiddleware, post.update);
  app.delete('/api/posts/:postId', authMiddleware, post.delete);

  app.get('/api/comments', comment.list);
  app.post('/api/comments', authMiddleware, comment.create);
  app.get('/api/posts/:postId/comments', comment.getAll);
  app.get('/api/posts/:postId/comments/:commentId', comment.get);
  app.put(
    '/api/posts/:postId/comments/:commentId',
    authMiddleware,
    comment.update
  );
  app.delete(
    '/api/posts/:postId/comments/:commentId',
    authMiddleware,
    comment.delete
  );
};
