
import NotFound from './Page/NotFound';
import './App.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import AllProducts from './Page/AllProducts';
import Root from './Page/Root';
import Contact from './Page/Contact';
import Brand from './Page/Brand';
import { AuthContextProvider } from './Component/context/AuthContext';
import NewProduct from './Page/NewProduct';
import ProtectedRoute from './Page/ProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import QnA from './Page/QnA';
const router=createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children:[
      {index:true,element:<Home></Home>},
      {path:'/products',element:<AllProducts/>},
      {path:'/Contact',element:<Contact/>},
      {path:'/Brand',element:<Brand/>},
      {path:'/QnA',element:<QnA/>},
      {path:'/Product/new',
      element:
        <ProtectedRoute>
          <NewProduct/>
        </ProtectedRoute>}
      


    ]
  }, 


])
const queryClient=new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;


