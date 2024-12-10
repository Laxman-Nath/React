import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   { path: "/about", element: <About /> },
  //   { path: "/movie", element: <Movie /> },
  // ]);

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/movie" element={<Movie/>}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App;
