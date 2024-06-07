
//import styles from './App.module.css';
import Home from './views/Home';
import Details from './views/Details';
import Cart from './views/Cart';
import NotFound from './views/NotFound';
import OnSale from './views/OnSale';

import { createBrowserRouter, RouterProvider  } from "react-router-dom";

function App() {


  const browserRouter = createBrowserRouter([
    { path: "/" , element: <Home /> },
    { path: "index.html", element: <Home /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/cart", element: <Cart /> },
    { path: "/onsale", element: <OnSale />},
    { path: "/*", element: <NotFound />}    

  ]);


  return (


    <>
      <RouterProvider  router={browserRouter} />
    </>


  );
}

export default App;