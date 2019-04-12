import queries from './queries';
import { Post, User, Comment } from '../models';

module.exports = {
  async create(req, res) {
    try {
      const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        userId: req.user.id,
      });

      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async list(req, res) {
    try {
      const posts = await Post.findAll(
        queries.posts.list({ User, Post, Comment })
      );
      return res.status(200).send(posts);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async get(req, res) {
    try {
      const post = await Post.findByPk(
        req.params.postId,
        queries.posts.get({ User, Post, Comment })
      );

      if (!post) {
        return res.status(404).send({
          message: 'Post Not Found',
        });
      }

      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async update(req, res) {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
        userId: req.user.id,
      },
    });

    if (!post) {
      return res.status(404).send({
        message: '404 on post update',
      });
    }

    const updatedPost = await post.update({
      title: req.body.title || post.title,
      content: req.body.content || post.content,
    });

    return res.status(200).send(updatedPost);
  },

  async delete(req, res) {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
        userId: req.user.id,
      },
    });

    if (!post) {
      return res.status(404).send({
        message: 'Post Not Found',
      });
    }

    await post.destroy();

    return res.status(200).send({
      message: null,
    });
  },
};
