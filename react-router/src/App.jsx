import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { AppLayout } from "./components/UI/layout/AppLayout";
import "././App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getAllMovies } from "./apis/GetAllMovies";
import { MovieDetails } from "./pages/MovieDetails";
import { getMovieDetails } from "./apis/GetMovieDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
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
          loader: getAllMovies,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader:getMovieDetails
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
