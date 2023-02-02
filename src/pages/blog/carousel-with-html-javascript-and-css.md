---
layout: ../../layouts/blogLayout.astro
thumbnail: " /assets/avatar.jpeg"
title: Carousel with (HTML , Javascript and css)
description: This Post will teach you how to make an easy and simple carousel
  slider just using Static HTML , javascript and css combine with just one HTML
  file
summary: This Post will teach you how to make an easy and simple carousel slider
  just using Static HTML , javascript and css combine with just one HTML file
avatar: " /assets/avatar.jpeg"
author: Mohammed Sinan
date: Jan 30th 23
tag:
  - javascript
  - html
  - css
  - carousel
---
# H﻿i , are you trying to make a carousel slider while using static html and css

## T﻿his blog will make you build a carousel

### G﻿itHub repository : https://github.com/mohammmedsinan/carousel-html-css-javascript

### N﻿ow Let's get started :

1. ### C﻿reate file " index.html"
2. ### W﻿rite this code :
3. ```html
   <!DOCTYPE html>
   <html lang="en">

   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>

   <body>
       <div id="root">
           <div id="carousel">
           </div>
       </div>
       <style></style>
       <script></script>
   </body>

   </html>
   ```
4. ### A﻿nd then we need to add images like this :

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
       <div id="root">
           <h1 id="prev">prev</h1>
           <div id="carousel">
              <div class="div div-0 default" style="background-color: red;"></div>
               <div class="div div-1" style="background-color: blue;"></div>
               <div class="div div-2" style="background-color: black;"></div>
               <div class="div div-3" style="background-color: green;"></div>
           </div>
           <h1 id="next">next</h1>
       </div>
       <style>
           #root {
               display: flex;
               justify-content: center;
               align-items: center;
               height: 100vh;
           }

           #carousel {
               position: relative;
               display: flex;
               justify-content: center;
               align-items: center;
               width: 100%;
               height: 100%;
           }

           .div {
               width: 600px;
               height: 300px;
               position: absolute;
               border-radius: 10px;
               transition: all ease 0.4s;
           }

           h1 {
               cursor: pointer;
               font-size: 50px;
           }
       </style>
       <script></script>
   </body>

   </html>
   ```
5. ### N﻿ow let's write our javascript code :

   ```javascript
     <script>
           let counter = 0;
           let classes = [{ class: 0 }, { class: 1 }, { class: 2 }, { class: 3 }]
           function scroller(imgs = [], operation = "",) {
               if (operation === "+" && counter < classes.length - 1) { counter++; } else if (operation === "-" && counter > 0) { counter--; }
               imgs.map(img => {
                   if (counter === Number(img.class)) {
                       document.querySelector('.default').classList.remove("default")
                       document.querySelector(`.div-${img.class}`).classList.add("default")
                   }
               })
           }
           document.getElementById('next').addEventListener('click', e => {
               scroller(classes, "+")
           })
           document.getElementById('prev').addEventListener('click', e => {
               scroller(classes, "-")

           })
       </script>
   ```

   # H﻿ere we are done 

   ## Y﻿ou can use our carousel easy , this is the full code 

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
       <div id="root">
           <h1 id="prev">prev</h1>
           <div id="carousel">
               <div class="div div-0 default" style="background-color: red;"></div>
               <div class="div div-1" style="background-color: blue;"></div>
               <div class="div div-2" style="background-color: black;"></div>
               <div class="div div-3" style="background-color: green;"></div>
           </div>
           <h1 id="next">next</h1>
       </div>
       <style>
           #root {
               display: flex;
               justify-content: center;
               align-items: center;
               height: 100vh;
           }

           #carousel {
               position: relative;
               display: flex;
               justify-content: center;
               align-items: center;
               width: 100%;
               height: 100%;
           }

           .div {
               width: 600px;
               height: 300px;
               position: absolute;
               border-radius: 10px;
               transition: all ease 0.4s;
               opacity: 0.1;
           }

           h1 {
               cursor: pointer;
               font-size: 50px;
           }

           .default {
               z-index: 1;
               opacity: 1;
           }
       </style>
       <script>
           let counter = 0;
           let classes = [{ class: 0 }, { class: 1 }, { class: 2 }, { class: 3 }]
           function scroller(imgs = [], operation = "",) {
               if (operation === "+" && counter < classes.length - 1) { counter++; } else if (operation === "-" && counter > 0) { counter--; }
               imgs.map(img => {
                   if (counter === Number(img.class)) {
                       document.querySelector('.default').classList.remove("default")
                       document.querySelector(`.div-${img.class}`).classList.add("default")
                   }
               })
           }
           document.getElementById('next').addEventListener('click', e => {
               scroller(classes, "+")
           })
           document.getElementById('prev').addEventListener('click', e => {
               scroller(classes, "-")

           })
       </script>
   </body>

   </html>
   ```