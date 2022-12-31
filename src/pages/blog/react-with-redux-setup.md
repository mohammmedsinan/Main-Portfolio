---
layout: ../../layouts/blogLayout.astro
thumbnail: " /assets/img4.jpg"
title: React with redux setup
description: we gonna talk about react and redux and how to set up things like
  reducers and actions while you can add reducers automatic to redux store
summary: we gonna talk about react and redux and how to set up things like
  reducers and actions while you can add reducers automatic to redux store
avatar: " /assets/img4.jpg"
author: Mohammed Sinan
date: Dec 31st 22
tag:
  - HTML5
  - javascript
  - typescript
  - nodejs
  - css3
---
# *L﻿et walk through redux and how to setup things*

### F﻿irst lets simplefie redux



Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur



```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title}</title>
</head>
      <img src={img} alt="Hero" id="img" width="100%" height="100%">
  <div id="blog-header">
  <h1 id="blog-title">{title}</h1>
    <div id="tags-container">
      {tag.map((element:String) => <span class="tags"> - #{element}</span>)}
    </div>
  </div>
```