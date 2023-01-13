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
     text: {
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
6. #### R﻿outes in post.js write these lines of code 

   ```javascript

   router.post('/get', getAllPosts);
   router.post('/create', createPost);
   router.put('/update/:id', updatePost);
   router.delete('/delete/:id', deletePost);

   ```
7. #### N﻿ow Let's work on the APIs in controllers/post.js

   * ### W﻿e going to start with creating post write these lines of code

     ```javascript
     //Create Post
     export const createPost = async (req, res) => {
       const postContext = req.body;
       const createNewPost = new Post(postContext);
       try {
         await createNewPost.save().then((postData) => {
           res.status(201).json({
             message: 'Post Created Successfully',
             data: postData,
           });
         });
       } catch (err) {
         res.status(401).json({
           message: 'create post failed',
           error: err,
         });
       }
     };
     ```
   * ### N﻿ow if we need to update the post

     ```javascript
     //Update post
     export const updatePost = async (req, res) => {
       const id = req.params.id;
       const data = req.body;
       try {
         const post = await Post.findOneAndUpdate({ _id: id }, { ...data });
         await post.save((err) => {
           if (err) res.json(err);
           res.json(data);
         });
       } catch (err) {
         res.status(401).json({
           message: 'failed update post',
           err,
         });
       }
     };
     ```
   * #### S﻿o now we can create and update posts , Now we need to display the posts

     ```javascript
     //Get All the posts
     export const getAllPosts = async (req, res) => {
       const BodyReq = req.body.name;
       try {
         //search if the user didn't send any filter
         if (BodyReq === undefined) {
           //return all the posts
           await Post.find({}).then((post) => {
             res.status(201).json({
               message: 'Get all posts work successfully',
               data: post,
               total: post.length,
             });
           });
         } else {
           //return posts by the filter that sent from front-end
           console.log(BodyReq);
         }
       } catch (err) {
         res.status(401).json({
           message: "Get post didn't work, something went wrong",
           err: err,
         });
       }
     };
     ```
   * #### L﻿ast but not least is delete posts

     ```javascript
     //delete post
     export const deletePost = async (req, res) => {
       const id = req.params.id;
       try {
         await Post.deleteOne({ _id: id }).then((e) => {
           res.status(201).json({
             message: 'deleted this post successfully',
             data: e,
           });
         });
       } catch (err) {
         res.status(404).json({
           message: "This id isn't found there sorry!",
           ErrorData: err,
         });
       }
     };
     ```
8. #### N﻿ow we are done from the server side all we need is to fetch API from the front-end