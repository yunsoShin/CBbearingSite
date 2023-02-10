import Header from './Component/Header';
import NotFound from './Page/NotFound';
import './App.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import Products from './Page/Products';
import Root from './Page/Root';
import Contact from './Page/Contact';
import Brand from './Page/Brand';

const router=createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children:[
      {index:true,element:<Home></Home>},
      {path:'/products',element:<Products/>},
      {path:'/Contact',element:<Contact/>},
      {path:'/Brand',element:<Brand/>}


    ]
  },


])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;


