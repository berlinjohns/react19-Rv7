import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import ProfilesPage from './pages/ProfilesPage.tsx';



const router= createBrowserRouter([{
  path:'/',
  element:<HomePage/>,
  errorElement:<NotFoundPage/>

},{
  path:'/profiles',
  element:<ProfilesPage/>,
  children:[
    {
      
        path:'/profiles/:profileId',
        element:<ProfilePage/>
      
    }
  ]
}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
