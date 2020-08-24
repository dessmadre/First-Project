const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const path = require('path');

// Models
const User = require('../../models/User');
const Post = require('../../models/Post');
const Contact = require('../../models/Contact');

// @route     GET /blog
// @desc      Get all blog posts
// @access    Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST /blog
// @desc      Add new post
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      body('title', 'You forgot a title').not().isEmpty(),
      body('text', 'You forgot the text').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    upload(req, res, err => {
      if (!err) {
        console.log(req.file);
      }
    });

    const { title, text, date } = req.body;

    try {
      const newPost = new Post({
        user: req.user.id,
        title,
        text,
        date,
      });
      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT /blog/:id
// @desc      Update a post
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { title, text, date } = req.body;

  // Build post object
  const postFields = {};
  if (title) postFields.title = title;
  if (text) postFields.text = text;

  try {
    let post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ msg: 'Not Found' });

    // Make sure user owns post
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: postFields },
      { new: true }
    );

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE /blog/:id
// @desc      Update a post
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ msg: 'Not Found' });

    // Make sure user owns post
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Post.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Post Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
