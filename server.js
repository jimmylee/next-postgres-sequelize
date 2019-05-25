import express from 'express';
import next from 'next';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import url from 'url';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import setupAuth from './api/auth';
import setupApi from './api';
import enforceSSL from './common/enforce-ssl';

import queries from './api/controllers/queries';
import { User, Comment, Post } from './api/models';

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 8000;
const app = next({ dev, quiet: false });
const nextRequestHandler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(compression());
  }

  server.use(enforceSSL());
  server.use('/static', express.static(__dirname + '/static'));
  server.use(cookieParser());
  server.use(morgan('dev'));
  server.use(cors({ credentials: true, origin: true }));
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  setupAuth(server, passport);
  setupApi(server);

  server.get('/post/:id', async (req, res) => {
    const users = await User.findAll(
      queries.users.list({ req, User, Post, Comment })
    );
    const posts = await Post.findAll(
      queries.posts.list({ User, Post, Comment })
    );
    const comments = await Comment.findAll(
      queries.comments.list({ User, Post, Comment })
    );
    const params = { id: req.params.id, users, comments, posts };

    return app.render(req, res, '/post', params);
  });

  server.get('*', async (req, res) => {
    const users = await User.findAll(
      queries.users.list({ req, User, Post, Comment })
    );
    const posts = await Post.findAll(
      queries.posts.list({ User, Post, Comment })
    );
    const comments = await Comment.findAll(
      queries.comments.list({ User, Post, Comment })
    );
    const params = { users, comments, posts };

    return app.render(req, res, req.url, params);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }

    console.log(`Running on localhost:${port}`);
  });
});
