---
layout: ../../layouts/blogLayout.astro
thumbnail: " /assets/img9.jpg"
title: Express How to CRUD easily
description: Express is a framework built on top of nodejs, in this post we will
  cover (Create , update, read and delete)
summary: Express is a framework built on top of nodejs, in this post we will
  cover (Create , update, read and delete)
avatar: " /assets/img9.jpg"
author: Mohammed Sinan
date: Jan 21st 23
tag:
  - express
  - nodejs
  - CRUD
---
# Hi again ! , today we will make the (CRUD) System using express as a server

1. ## F﻿irst we need to write this in your bash ( `npm init -y `)
2. ## S﻿econd let's write this again in your bash ( `npm i express nodemon` )
3. ## I﻿nside package.json write this ( 

   ` "scripts": { "test": "echo \"Error: no test specified\" && exit 1", "start": "nodemon index.js" },`

   ## )﻿
4. ## N﻿ow we should create a file name ( index.js )
5. ## L﻿et's get the data first : 

   ```javascript
   import express from 'express';

   const app = express();

   const database = [
     {
       id: 1,
       name: 'John',
       age: 30,
     },
     {
       id: 2,
       name: 'alex',
       age: 16,
     },
     {
       id: 3,
       name: 'steve',
       age: 23,
     },
     {
       id: 4,
       name: 'doe',
       age: 33,
     },
   ];

   app.get('/get', (req, res) => {
     res.json(database);
   });

   app.listen(3000, () => console.log('Server has been started'));

   ```
6. ## N﻿ow let's post data : 

   ```javascript
   app.post('/post', (req, res) => {
     database.push({
       id: 5,
       name: 'john doe',
       age: 19,
     });
     res.json(database).status(201);
   });

   ```
7. ## W﻿e should update users : 

   ```javascript
   app.put('/put', (req, res) => {
     database.map((user, index) => {
       if (user.id === 1) {
         database[index] = { id: 123, name: 'Johns', age: 34 };
       }
       return user;
     });
     res.json(database).status(201);
   });
   ```
8. ## T﻿he last but not least delete : 

   ```javascript
   app.delete('/delete', (req, res) => {
     database.pop();
     res.json(database).status(201);
   });

   ```