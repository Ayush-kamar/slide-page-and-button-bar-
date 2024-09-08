import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/home'
const App = () => {
  const routes = createBrowserRouter([
    {
      path:"/:slug?",
    // slug is an optional param 
      element:<Home/>
    }
  ])
return (
<RouterProvider router={routes}/>
)
}

export default App
