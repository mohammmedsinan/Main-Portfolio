---
layout: ../../layouts/blogLayout.astro
thumbnail: " /assets/opengraph.png"
title: How to setup jest inside your project
description: Setup jest to make your life easier and also to detect any errors
  in your code before you push into production branch
summary: Setup jest to make your life easier and also to detect any errors in
  your code before you push into production branch
avatar: " /assets/opengraph.png"
author: Mohammed Sinan
date: Feb 3rd 23
tag:
  - jest
  - javascript
  - testing
  - testing-unit
---
# S﻿o let's be honest here if you are working on your own project and it's not that big you shouldn't set it up jest why ?

## B﻿eacuse it will make you configure extra things and slow you down while coding



## B﻿ut the power of jest comes when it will include in a big project and have more than one programmer that works on it



## N﻿ow Let's code and set up jest inside our project 



* ### F﻿irst write in your bash `npm init -y`
* ### S﻿econd write this npm i -D jest
* ### S﻿o it's a lot of ways and methods to configure jest but I will write the standard one



## C﻿reate file and name it (anything.test.js)

### y﻿ou should add this suffix (.test.js)

* ### L﻿et's say we have this function inside our project 

  ```javascript
  function greetings(name) {
    return 'hello' + ' ' + name;
  }

  module.exports = greetings;

  ```

  ### S﻿o this function will return hello and whatever string you did pass inside the argument
* ### N﻿ow inside (anything.test.js)

  ```javascript
  const Greeting = require('./index');

  test('Greeting for the user', () => {
    expect(
      Greeting('joe')
      ).toBe('hello joe');
  });

  ```

  ### T﻿his test function is static you need to add it in every test jest file

  ### A﻿lso expect is static inside this expect function you will pass whatever function you wanna test it and this test is called unity testing

  ### a﻿fter expected method you will write this 
* ### .﻿toBe(whatever value you expect the function will return)

  ## A﻿nd don't forget this a lot of testing option check the docs inside jest website