import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './shell/App'
import Home from './pages/Home'
import About from './pages/About'
import Gpts from './pages/Gpts'
import Articles from './pages/Articles'
import Book from './pages/Book'
import ViyaGita from './pages/ViyaGita'
import Art from './pages/Art'
import Community from './pages/Community'
import Contact from './pages/Contact'
import Membership from './pages/Membership'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'gpts', element: <Gpts /> },
      { path: 'articles', element: <Articles /> },
      { path: 'book', element: <Book /> },
      { path: 'viyagita', element: <ViyaGita /> },
      { path: 'art', element: <Art /> },
      { path: 'community', element: <Community /> },
      { path: 'contact', element: <Contact /> },
      { path: 'membership', element: <Membership /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
