import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Main from './components/Main';
import Products from './components/Products';
import UserDetails from './components/UserDetails';
import Users from './components/Users';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/products', element: <Products></Products> },
        {
          path: '/users', element: <Users></Users>, loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },

        },
        {
          path: '/user/:userId',
          element: <UserDetails></UserDetails>,
          loader: ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          }
        },
        { path: '/about', element: <About></About> },
      ]
    },
    { path: '*', element: <div>Not Found !! 404</div> }
  ])

  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
