import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import Layout from './components/Layout/Layout'
import Aboutpage from './components/aboutpage/Aboutpage'
import ServicePage from './components/servicepage/ServicePage'
import ContactPage from './components/contactpage/ContactPage'
import Emails from './components/contactpage/Emails/Emails'
import Locations from './components/contactpage/Locations/Locations'
import Phone from './components/contactpage/Phone/Phone'
import ErrorPage from './components/errorPage/ErrorPage'

export default function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>, 
      children: [
        {
          path:"",
          element: <Homepage/>
        },
        {
          path:"/about",
          element: <Aboutpage/>
        },
        {
          path:"/service",
          element: <ServicePage/>
        },
        {
          path:"/contact",
          element: <ContactPage/>,
        },
        {
          path:"/contact/emails",
          element: <Emails/>
        },
        {
          path:"/contact/locations",
          element: <Locations/>
        },
        {
          path:"/contact/phone",
          element: <Phone/>
        },
        {
          path: "*",
          element: <ErrorPage />,
        }
      ],
    }
  ])
  return (
      <>
      <RouterProvider router={route}></RouterProvider>
    <div>
      
    </div>
      </>
  )
}
