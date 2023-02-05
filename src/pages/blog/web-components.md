---
layout: ../../layouts/blogLayout.astro
thumbnail: " /assets/1_h744voyjvy5s5jnmyrqpsw.png"
title: Web Components
description: Web component is so powerful now if you are building a simple
  website you don't need to code with a javascript framework but you don't need
  to waste your time on repeat sections ....
summary: Web component is so powerful now if you are building a simple website
  you don't need to code with a javascript framework but you don't need to waste
  your time on repeat sections ....
avatar: " /assets/1_h744voyjvy5s5jnmyrqpsw.png"
author: Mohammed sinan
date: Feb 5th 23
tag:
  - javascript
  - html
  - web-component
---
# I﻿f you want to build a simple website but you have a lot of custom code , yes you can do it using Static (HTML , JS) but it will take so much time to do it and to avoid code repeating we should use web-component



* ### C﻿reate file and then add two files (HTML , JS)
* ### T﻿his code for a simple HTML page 

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
      <script src="app.js"></script>
  </body>

  </html>
  ```


* ### L﻿et's start writing our javascript code here 

  ```javascript
  const template = document.createElement('template'); // create template element
  template.innerHTML = ``; // html code will live in here

  class customElement extends HTMLElement { 
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.append(template.content.cloneNode(true)); // if we add some style here will not affect the main html page
    }
  }

  customElements.define('custom-element', customElement); // you can name your component any name you want 

  ```
* ### W﻿rite our HTML elements inside HTML template 

  ```javascript
  template.innerHTML = `
  <style>
  h1{
      font-size:80px;
      color:red;
      font-wight:bold;
  }
  </style>
  <div>
  <h1>
  <slot></slot>
  </h1>
  </div>
  `;
  ```