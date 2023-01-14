---
layout: ../../layouts/blogLayout.astro
thumbnail: " /assets/img4.jpg"
title: React and redux toolkit
description: "How to implement ( redux toolkit ) inside react project easily and
  straight to the point "
summary: "How to implement ( redux toolkit ) inside react project easily and
  straight to the point "
avatar: " /assets/img4.jpg"
author: Mohammed Sinan
date: Jan 14th 23
tag:
  - redux
  - react
  - javascript
  - redux-toolkit
---
# H﻿ey , today we gonna set up redux toolkit inside react let's start

1. ### F﻿irst we need to install some dev-dependencies

   n﻿pm i @reduxjs/toolkit react-redux
2. ### N﻿ow let's configure the store inside src/main.jsx

   w﻿rite this code 

   ```jsx
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import App from './App'
   import './index.css'
   import { configureStore } from '@reduxjs/toolkit'
   import { Provider } from 'react-redux'

   const store = configureStore({
     reducer: {}
   })

   ReactDOM.createRoot(document.getElementById('root')).render(
     <Provider store={store}>
       <App />
     </Provider>,
   )

   ```
3. ### So now our store has been configured let's write our model by creating file inside src folder and naming it model.jsx and write this code

   ```jsx
   import { createSlice } from '@reduxjs/toolkit'

   const initialState = {
       value: 0,
   }

   export const homeSlice = createSlice({
       name: 'counter',
       initialState,
       reducers: {
           increment: (state) => {
               state.value += 1
           },
           decrement: (state) => {
               state.value -= 1
           },
           incrementByAmount: (state, action) => {
               state.value += action.payload
           },
       },
   })

   export const { increment, decrement, incrementByAmount } = counterSlice.actions

   export default counterSlice.reducer
   ```
4. ### Our model is completely done all we have to do now is add this reducer to our store and dispatch our actions and write this code in main.jsx

   ```jsx
   import counterReducer from './model'

   const store = configureStore({
     reducer: { counter: counterReducer }
   })

   ```
5. ### S﻿o Now we need to dispatch our actions and display the counter from src/app.jsx

   ```jsx
   import React from 'react'
   import { useSelector, useDispatch } from 'react-redux'
   import { decrement, increment } from './model'

   function App() {
     const count = useSelector((state) => state.counter.value)
     const dispatch = useDispatch()

     return (
       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
         <div>{count}</div>
         <div>
           <button
             aria-label="Increment value"
             onClick={() => dispatch(increment())}
           >
             Increment
           </button>
           <button
             aria-label="Decrement value"
             onClick={() => dispatch(decrement())}
           >
             Decrement
           </button>
         </div>
       </div>
     )
   }

   export default App
   ```