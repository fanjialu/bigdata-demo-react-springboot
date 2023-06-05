import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import InitRoutes from './routers.tsx'

// window.addEventListener('resize', (event) => {
//   const width = window.innerWidth;
//   const body = document.body;
//   console.log(window, width);

//   if (width > 800) {
//     body.dataset.media = 'large'
//   } else {
//     body.dataset.media = 'small'
//   }

// })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <InitRoutes />
  </React.StrictMode>,
)
