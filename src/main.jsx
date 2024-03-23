import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import {
    createBrowserRouter,
    RouterProvider,
  }from "react-router-dom";
import Root from './componenets/root/Root.jsx';
import ErrorPage from './componenets/errorPage/ErrorPage.jsx';
import Home from './componenets/home/Home.jsx';
import Statistics from './componenets/Statistics/Statistics.jsx';
import Applied from './componenets/applied/Applied.jsx';
import JobDetails from './componenets/JobDetails/JobDetails.jsx';
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
                  path:'/jobs'

                },
                {
                          path:'/statistics',
                          element:<Statistics></Statistics>
                        },
                        {
                                 path:'/applied',
                                element:<Applied></Applied>
                               },
                               {
                                path:'/job/:id',
                                element:<JobDetails></JobDetails>,
                                loader: () => fetch('../jobs.json')
                                
                               }
      ]
      
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
