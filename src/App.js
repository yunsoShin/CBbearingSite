
import NotFound from './Page/NotFound';
import './App.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import Products from './Page/Products';
import Root from './Page/Root';
import Contact from './Page/Contact';
import Brand from './Page/Brand';
import { AuthContextProvider } from './Component/context/AuthContext';
import NewProduct from './Page/NewProduct';

const router=createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children:[
      {index:true,element:<Home></Home>},
      {path:'/products',element:<Products/>},
      {path:'/Contact',element:<Contact/>},
      {path:'/Brand',element:<Brand/>},
      {path:'/NewProduct',element:<NewProduct/>}


    ]
  },


])

function App() {
  return (
    <AuthContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  );
}

export default App;


