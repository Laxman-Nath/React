import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { AppLayout } from "./components/UI/layout/AppLayout";
import "././App.css"
import { ErrorPage } from "./pages/ErrorPage";
import { GetAllMovies } from "./apis/GetAllMovies";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader:GetAllMovies
        },
      ],
    },
  ]);

  // const router=createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/about" element={<About/>}/>
  //       <Route path="/movie" element={<Movie/>}/>
  //     </Route>
  //   )
  // )

  return <RouterProvider router={router} />;
}

export default App;
