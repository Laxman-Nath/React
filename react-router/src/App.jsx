import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/about", element: <About /> },
    { path: "/movie", element: <Movie /> },
  ]);

  return <RouterProvider router={router}/>
}

export default App;
