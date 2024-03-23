import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// }from "react-router-dom";
// // import Root from './componenets/root/Root.jsx';
// // import Home from './home/Home.jsx';
// // import Applied from './applied/Applied.jsx';
// // import Statistics from './Statistics/Statistics.jsx';
// import ErrorPage from './errorPage/ErrorPage.jsx';

// const router = createBrowserRouter([
//   {
//    path:'/',
//    element:<Root
//     errorElement:<ErrorPage></ErrorPage>,
//     children:[
//       {
//         path:'/',
//         element:<Home></Home>
//       },
//       {
//         path:'/statistics',
//         element:<Statistics></Statistics>
//       },
//      {
//       path:'/applied',
//       element:<Applied></Applied>
//      }
      
//     ]
//   },
// ]);
 import {
    createBrowserRouter,
    RouterProvider,
  }from "react-router-dom";
import Root from './componenets/root/Root.jsx';
import ErrorPage from './componenets/errorPage/ErrorPage.jsx';
import Home from './componenets/home/Home.jsx';
import Statistics from './componenets/Statistics/Statistics.jsx';
import Applied from './componenets/applied/Applied.jsx';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
                  path:'/',
                element:<Home></Home>
                },
                {
                          path:'/statistics',
                          element:<Statistics></Statistics>
                        },
                        {
                                 path:'/applied',
                                element:<Applied></Applied>
                               }
      ]
      
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
