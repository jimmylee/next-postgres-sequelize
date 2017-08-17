import queries from './queries';
import { Comment, User, Post } from '../models';

module.exports = {
  async create(req, res) {
    try {
      await Comment.create({
        content: req.body.content,
        commentId: req.body.commentId,
        postId: req.body.postId,
        userId: req.user.id,
      });

      return res.status(200).send({});
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async list(req, res) {
    try {
      const comments = await Comment.findAll(
        queries.comments.list({ User, Post, Comment })
      );

      return res.status(200).send(comments);
    } catch (err) {
      throw new Error(err);
      return res.status(500).send(err);
    }
  },

  async get(req, res) {
    try {
      const comment = await Comment.find(
        queries.comments.get({ req, User, Post, Comment })
      );

      if (!comment) {
        return res.status(404).send({
          message: '404 comment',
        });
      }

      return res.status(200).send(comment);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async getAll(req, res) {
    try {
      const comments = await Comment.findAll(
        queries.comments.listForUser({ req, User, Post, Comment })
      );

      if (!comments) {
        return res.status(404).send({
          message: '404 comments',
        });
      }

      return res.status(200).send(comments);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async update(req, res) {
    try {
      const comment = await Comment.find({
        where: {
          id: req.params.commentId,
          postId: req.params.postId,
          userId: req.user.id,
        },
      });

      if (!comment) {
        return res.status(404).send({
          message: '404 comment to update',
        });
      }

      const updatedComment = await comment.update({
        content: req.body.content || commment.content,
      });

      return res.status(200).send(updatedComment);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async delete(req, res) {
    try {
      const comment = await Comment.find({
        where: {
          id: req.params.commentId,
          postId: req.params.postId,
          userId: req.user.id,
        },
      });

      if (!comment) {
        return res.status(404).send({
          message: '404 comment to delete',
        });
      }

      await comment.destroy();

      return res.status(200).send();
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
