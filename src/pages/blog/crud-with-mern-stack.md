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
# ***let's start with our MERN-Starter project and make sure you have it locally by cloning it from this [repository](https://github.com/mohammmedsinan/MERN-Stack-Starter)***

# ***O﻿k , now let's start with our server***

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
8. #### N﻿ow we are done from the server side all we need is to fetch the API from the front-end

   * ##### W﻿e need to display and create posts on the page inside client/src/App.jsx write these lines of code 

     ```jsx
     import React from 'react'

     function App() {
       const [data, setData] = React.useState([]);
       const [text, setText] = React.useState("");
       React.useEffect(() => {
         fetch("http://localhost:5000/post/get", { method: "post" }).then(Data => Data.json()).then(Data => setData(Data.data))
         console.log(data)
       }, [])
       return (
         <div>
           <form onSubmit={e => {
             e.preventDefault()
             fetch(`http://localhost:5000/post/create`, {
               method: 'POST', // or 'PUT'
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify({ text }),
             }).then(e => fetch("http://localhost:5000/post/get", { method: "post" }).then(Data => Data.json()).then(Data => setData(Data.data)))
           }}
           >
             <input onChange={e => setText(e.target.value)} style={{ margin: "auto", display: "block", width: "300px", height: "40px" }} />
           </form>
           <div>
             {data.map(post => {
               return (
                 <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "120px" }}>
                   <h2>{post.text}</h2>
                   <button>Edit</button>
                   <button >delete</button>
                 </div>
               )
             })}
           </div>
         </div>
       )
     }

     export default App
     ```
   * ##### N﻿ow let's delete the post

     ```jsx
         <div>
             {data.map(post => {
               return (
                 <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "120px" }}>
                   <h2>{post.text}</h2>
                   <button>Edit</button>
                   <button onClick={e => fetch(`http://localhost:5000/post/delete/${post._id}`, { method: "delete" }).then(() => fetch("http://localhost:5000/post/get", { method: "post" }).then(Data => Data.json()).then(Data => setData(Data.data)))}>delete</button>
                 </div>
               )
             })}
           </div>
     ```
   * ##### N﻿ow let's update the post 
9. ```jsx
   import React from 'react'

   function App() {
     const [data, setData] = React.useState([]);
     const [text, setText] = React.useState("");
     const [updatedText, setUpdatedText] = React.useState("");
     const [switcher, setSwitcher] = React.useState(false);
     const [id, setId] = React.useState("");
     React.useEffect(() => {
       fetch("http://localhost:5000/post/get", { method: "post" }).then(Data => Data.json()).then(Data => setData(Data.data))
     }, [])
     function onSubmitHandler(e) {
       e.preventDefault()
       if (switcher) {
         fetch(`http://localhost:5000/post/update/${id}`, {
           method: "PUT",
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ text: updatedText }),
         })
           .then(() => fetch("http://localhost:5000/post/get", { method: "post" })
             .then(Data => Data.json())
             .then(Data => setData(Data.data)))
         setSwitcher(false)
       } else {
         fetch(`http://localhost:5000/post/create`, {
           method: 'POST', // or 'PUT'
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ text }),
         }).then(e => fetch("http://localhost:5000/post/get", { method: "post" }).then(Data => Data.json()).then(Data => setData(Data.data)))
       }
       setText("")
       setUpdatedText("")
     }
     return (
       <div>
         <form onSubmit={onSubmitHandler}
         >
           <input onChange={e => {
             setText(e.target.value)
             setUpdatedText(e.target.value)
           }} style={{ margin: "auto", display: "block", width: "300px", height: "40px" }} value={updatedText && updatedText} />
         </form>
         <div>
           {data.map(post => {
             return (
               <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "120px" }}>
                 <h2>{post.text}</h2>
                 <button onClick={e => {
                   setUpdatedText(post.text)
                   setSwitcher(true)
                   setId(post._id)
                 }}>Edit</button>
                 <button onClick={e => fetch(`http://localhost:5000/post/delete/${post._id}`, { method: "delete" }).then(() => fetch("http://localhost:5000/post/get", { method: "post" }).then(Data => Data.json()).then(Data => setData(Data.data)))}>delete</button>
               </div>
             )
           })}
         </div>
       </div>
     )
   }

   export default App


   ```

   # N﻿ow that we have done , we did (update , delete , create and read) the posts from the back-end to display them on the client side