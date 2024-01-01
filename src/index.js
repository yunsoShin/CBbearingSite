import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';
import NewQuestion from './pages/NewQuestion';
import 'antd/dist/reset.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { index: true, path: '/react-shop', element: <Home /> },
      { path: '/questions', element: <NewQuestion /> },
      { path: '/products', element: <AllProducts /> },
      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <HashRouter>
        <App />
      </HashRouter>
    </RouterProvider>
  </React.StrictMode> 
);

