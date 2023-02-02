---
layout: ../../layouts/blogLayout.astro
thumbnail: " /assets/html-tagst.jpg"
title: How to open images with html
description: How to make the image popup and make it like a wallpaper
summary: How to make the image popup and make it like a wallpaper
avatar: " /assets/html-tagst.jpg"
author: Mohammed Sinan
date: Feb 2nd 23
tag:
  - html
  - css
  - javascript
  - img
---
# Hi , today we will explain how to make images inside your website popup easy and simple !

## G﻿itHub repository : [here](https://github.com/mohammmedsinan/images-popup)

# L﻿et's get started

1. ### N﻿ow first let's create a simple html file

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

   </body>

   </html>
   ```
2. ### I﻿mplement image with style

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
       <img src="../../html-tagst.jpg" alt="html">
   </body>

   <style>
       body {
           display: flex;
           justify-content: center;
           align-items: center;
           height: 100vh;
       }

       img {
           width: 40%;
           border-radius: 10px;
           cursor: pointer;
       }
   </style>
   <script></script>

   </html>
   ```
3. ### W﻿rite our javascript code

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
       <div id="shadow"></div>
       <img src="../../html-tagst.jpg" alt="html">
   </body>

   <style>
       * {
           margin: 0px;
           padding: 0px;
           box-sizing: border-box;
       }

       img {
           width: 40%;
           border-radius: 10px;
           cursor: pointer;
       }

       .img-popup {
           position: absolute;
           left: 50%;
           top: 50%;
           transform: translate(-50%, -50%) scale(1.5);
       }

       #shadow {
           position: absolute;
           width: 100vw;
           height: 100vh;
           background-color: black;
           display: none;
           opacity: 0.6;
       }
   </style>
   <script>
       let toggle = false;
       document.getElementById('shadow').addEventListener('click', e => {
           document.querySelector('.img-popup').remove()
           document.getElementById('shadow').style.display = "none"
           toggle = false;
       })
       document.querySelector('img').addEventListener('click', e => {
           const imgSrc = e.target.src;
           if (!toggle) {
               const img = document.createElement('img');
               img.src = imgSrc;
               img.classList.add('img-popup')
               document.body.appendChild(img);
               document.getElementById('shadow').style.display = "block"
               toggle = true;
           }
       })
   </script>

   </html>
   ```