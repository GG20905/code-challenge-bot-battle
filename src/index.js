import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bot from './components/Bot';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([

{
  path:"/code-challenge-bot-battle",
  element:<App/>
},{
  path:"/code-challenge-bot-battle/bots/:id",
  element:<Bot/>
}
])
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);
// root.render(<RouterProvider router={router}/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
