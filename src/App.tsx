
//import styles from './App.module.css';
import Home from './views/Home';
import Details from './views/Details';
import Cart from './views/Cart';
import { createBrowserRouter, RouterProvider  } from "react-router-dom";

function App() {


  const browserRouter = createBrowserRouter([
    { path: "/" , element: <Home /> },
    { path: "index.html", element: <Home /> },
    { path: "/details.html", element: <Details /> },
    { path: "/cart.html", element: <Cart /> }

  ]);


  return (


    <>
      <RouterProvider  router={browserRouter} />
    </>


  );
}

export default App;