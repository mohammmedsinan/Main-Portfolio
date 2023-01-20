---
layout: ../../layouts/blogLayout.astro
thumbnail: " /assets/img8.png"
title: Javascript fetching API easily
description: "This Post will make you fetch API from any back-end , easily and
  straight to the point "
summary: "This Post will make you fetch API from any back-end , easily and
  straight to the point "
avatar: " /assets/img8.png"
author: Mohammed sinan
date: Jan 15th 23
tag:
  - javascript
  - api
  - html
---
# A﻿PIs are so powerful and popular that everyone should use them and know this technology

## N﻿ow let's learn together how to make requests from the front-end to the back-end and all we need is html file and a javascript file and we should be ready to go

## T﻿his is the repo from [GitHub ](https://github.com/mohammmedsinan/Simple-api-request)

* ### L﻿et's create a very simple HTML file 

  ```html
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>

  <body>
      <input />
      <div></div>
      <script src="app.js"></script>
  </body>

  </html>
  ```
* ### C﻿reate javascript file and name it app.js
* ### W﻿e will use JSON placeholder as a fake restful APIs
* ### N﻿ow let's code !!

  #### S﻿o we need to make a get request for reading data from the back-end and we will display this data in our HTML file write this code in your javascript file

  ```javascript
  function getApiData() {
    //get and display data from the backend
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          // create a new div element
          const newDiv = document.createElement('div');
          // and give it some content
          const newContent = document.createTextNode(element.username);
          // add the text node to the newly created div
          newDiv.appendChild(newContent);
          // add the newly created element and its content into the DOM
          const div = document.querySelector('div');
          document.body.insertBefore(newDiv, div);
        });
      });
  }
  getApiData();

  ```

  ### N﻿ow let's post some data to our api write this code 

  ```javascript
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: '21321',
        username: document.querySelector('input').value,
        name: document.querySelector('input').value,
      }),
    }).then((e) => {
      // create a new div element
      const newDiv = document.createElement('div');
      // and give it some content
      const newContent = document.createTextNode(document.querySelector('input').value);
      // add the text node to the newly created div
      newDiv.appendChild(newContent);
      // add the newly created element and its content into the DOM
      const div = document.querySelector('div');
      document.body.insertBefore(newDiv, div);
    });
  });

  ```