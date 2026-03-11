import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
function App() {
  const route = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [{
      path: "/",
      element: <Home/>
    },
  {
      path: "/Product",
      element: <Product/>
    },
  {
      path: "/Contact",
      element: <Contact/>
    },
  {
      path: "/Blog",
      element: <Blog/>
    },
  {
    path: "/Signup",
    element: <Signup/>
  },
{
  path: "/Signin",
  element: <Signin/>
}]
  }])
  return (
    <div>
      <RouterProvider  router={route} />
    </div>
  )
}

export default App
