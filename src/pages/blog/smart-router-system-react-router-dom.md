---
layout: ../../layouts/blogLayout.astro
thumbnail: https://miro.medium.com/max/720/0*nH627PKQdg4-BCfj
title: Smart Router System (React-router-dom)
description: if you are struggling with defining and configuring
  react-router-dom this blog will help you to build a smart route system
summary: if you are struggling with defining and configuring react-router-dom
  this blog will help you to build a smart route system
avatar: https://miro.medium.com/max/720/0*nH627PKQdg4-BCfj
author: Mohammed Sinan
date: Jan 8th 23
tag:
  - React-router-dom
  - react
  - javascript
  - spa
---
Hi, when I was using react-router-dom I was struggling with the configuration of this library every time you tried to add a new route or component will take so long, and hard to find where you put the files, that's why I did switch to this method which is built by me , Now you have to follow this steps to finally be free from the old react-router-dom configuration

**L﻿est's get started**

1. install React with vite by writing ***npm init vite***
2. install the dev dependencies which is (react-route-dom) ***npm i react-router-dom***

N﻿ow let's run this Project with vs code or any code editor you have

f﻿irst let's config react router dom once and forever in *src/main.jsx* add this lines of code

```jsx
// src/main.jsx
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

<Router>
  <App />
</Router>
```

n﻿ext step let's config the route in *src/app.jsx* By writing the lines of code

w﻿e will create another file inside the pages folder inside the src it will be like this *src/pages/Home/index.jsx*

```jsx
// src/pages/Home/index.jsx
import React from 'react'

function index() {
  return (
    <div>Home</div>
  )
}

export default index
```

```jsx
// src/app.jsx
import { Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';

<Routes>
  <Route
   path='/'
   element={<Home />} />
     <Route path="*" element={<>This Page is not found</>} />
</Routes>
```

N﻿ow we configured React-router-dom in app.jsx and main.jsx

t﻿he next step is to create a file inside the src which is gonna be *src/routes.jsx* 

a﻿nd declare an array of objects which is gonna be our main route file and then export it 

```javascript
// src/routes.jsx
export const Routes = [
  {
    name:"Home" ,
    pathName:"/" ,
  }
]
```

We have almost done, Now all we have to do is map this array of objects inside our app.jsx

```jsx
// src/app.jsx
import { Routes } from './routes.jsx';
import { Routes, Route } from 'react-router-dom';

<Routes>
  {Routes.map((route) => {
      const OnePage = require('../Page/' + route.name + '/index').default;
      return (
        <Route
          path={route.pathName}
          key={route.name}
          element={<OnePage />}
        />
      );
    }
  })
  <Route path="*" element={<>This Page is not found</>} />
</Routes>
```

### N﻿ow we done, if you want to add a new page all we have to do is declare another route in routes.jsx and then create a file inside the *src/pages/Your route Name/index.js*