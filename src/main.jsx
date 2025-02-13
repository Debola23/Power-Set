import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Trainer } from './Components/Trainer/Trainer.jsx';
import { Pricing } from './Components/Pricing/Pricing.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
{
  path: "/trainer",
  element: <Trainer/>,
},
{
  path: "/pricing",
  element: <Pricing/>,
},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} /> 
  </StrictMode>,
)
