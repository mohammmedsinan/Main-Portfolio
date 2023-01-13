---
layout: ../../layouts/blogLayout.astro
thumbnail: " /assets/img7.png"
title: CRUD with ( MERN-stack )
description: This blog will make create , read , update  and delete from MongoDB
  using MERN stack
summary: This blog will make create , read , update  and delete from MongoDB
  using MERN stack
avatar: " /assets/img7.png"
author: Mohammed Sinan
date: Jan 13th 23
tag:
  - react
  - express
  - nodejs
  - mongoDB
  - MERN
---
let's start with our MERN-Starter project and make sure you have it locally by cloning it from this [repository ](https://github.com/mohammmedsinan/MERN-Stack-Starter)

O﻿k , now let's start with our server

1. #### C﻿reate three new files (models , routes , controllers)
2. #### A﻿dd this to your index.js file 

   ```javascript
   // src/index.js
   import Post from './routes/post.js';

   app.use('/post' , Post);

   ```
3. #### R﻿outes folder add file and name it post.js and write these lines of code

   ```javascript
   import express from 'express';
   import {} from '../controllers/post.js';

   const router = express.Router();

   export default router;

   ```
4. #### C﻿ontrollers folder add a new file and name it post.js and then add these lines of code

   ```javascript
   //Create Post
   export const createPost = async (req, res) => {};
   //Get All the posts
   export const getAllPosts = async (req, res) => {};
   //Update post
   export const updatePost = async (req, res) => {};
   //delete post
   export const deletePost = async (req, res) => {};

   ```
5. #### m﻿odels folder add a new file and name it post.js , then add these codes

   ```javascript
   import mongoose from 'mongoose';

   const Post = mongoose.Schema({
     postText: {
       type: String,
     },
     createdDate: {
       type: Date,
       default: Date.now(),
     },
   });

   const postsData = mongoose.model('post', Post);
   export default postsData;

   ```
6.