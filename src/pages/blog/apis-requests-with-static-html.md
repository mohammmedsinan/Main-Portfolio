---
layout: ../../layouts/blogLayout.astro
thumbnail: " /assets/img1.png"
title: APIs requests with static html
description: This blog will make you easily call APIs with static HTML and
  JavaScript with a reusable function
summary: This blog will make you easily call APIs with static HTML and
  JavaScript with a reusable function
avatar: " /assets/img1.png"
author: Mohammed Sinan
date: Jan 20th 23
tag:
  - javascript
  - html5
  - api
---
# H﻿i , Today we going to learn how to make api requests easy while we are using static html and vanila JavaScript



## N﻿ow let's start coding : 

* ### H﻿tml file : 

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

      <div id="root"></div>
      <script src="app.js"></script>
  </body>

  </html>
  ```
* ### JavaScript  : 

  #### w﻿e will use functional programming to make out life easier 

  ```javascript
  const autoFetcher = function (apiURl = '') {
    return function (Method, Suffix, body) {};
  };

  ```

  #### A﻿s you see we have two functions one of them is returning another function

  #### A﻿piURL : the link of our base  API

  #### M﻿ethod : the method will pass to fetch 

  #### S﻿uffix : will put it at the end of the api url

  #### B﻿ody : Body is the data we will pass at the body of fetch
* ### N﻿ow let's add the fetch code : 

  ```javascript
      const details = {};
      fetch(apiURl + '/' + endFix, {
        method: Method.toUpperCase(),
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body),
      })
  ```

  ### S﻿o the details object is the value that we gonna return at the end of the function
* ### W﻿e will add the then and catch as you know fetch is a promise : 

  ```javascript
    .then((response) => {
          details.status = response.status;
          return response.json();
        })
        .then((json) => {
          details.data = json;
        })
        .catch((err) => (details.error = err.message));
      return details;
  ```

  #### N﻿ow we should be ready to go , we can fetch API by calling the function  : 

  ```javascript
  const base = autoFetcher('https://jsonplaceholder.typicode.com/posts');
  const get = base('GET', '/1');
  const post = base('POST', '', {
    id: 12,
  });
  const deletes = base('DELETE', '/2');
  const put = base('PUT', '/1', {
    id: 12,
  });

  setTimeout(() => {
    console.log(get);
    console.log(post);
    console.log(deletes);
    console.log(put);
  }, 500);

  ```

  #### S﻿o at the first we need to initialize the function , after that we can call api any method 

  # T﻿his is the full code 

  ```javascript
  const autoFetcher = function (apiURl = '') {
    return function (Method, endFix, body) {
      const details = {};
      fetch(apiURl + '/' + endFix, {
        method: Method.toUpperCase(),
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body),
      })
        .then((response) => {
          details.status = response.status;
          return response.json();
        })
        .then((json) => {
          details.data = json;
        })
        .catch((err) => (details.error = err.message));
      return details;
    };
  };

  const base = autoFetcher('https://jsonplaceholder.typicode.com/posts');
  const get = base('GET', '/1');
  const post = base('POST', '', {
    id: 12,
  });
  const deletes = base('DELETE', '/2');
  const put = base('PUT', '/1', {
    id: 12,
  });

  setTimeout(() => {
    console.log(get);
    console.log(post);
    console.log(deletes);
    console.log(put);
  }, 500);

  ```