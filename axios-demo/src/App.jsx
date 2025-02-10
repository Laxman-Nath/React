import axios from "axios";
import { useEffect, useState } from "react";
import { Movies } from "./UIs/Movies";
import { getMoviesApi } from "./Apis/getMoviesApi";

const App = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getMovies = async () => {
    try {
      // const response = await axios.get(
      //   "http://www.omdbapi.com/?i=tt3896198&apikey=7cb3f4de&s=titanic&page=1"
      // );

      const response=await getMoviesApi();

      console.log(response);
      console.log(response.data);
      if (response) {
        setMovies(response.data.Search);
      }
      // return response.data;
    } catch (error) {
      console.log("Error occured while fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
    // console.log("Movies:", movies);
  }, []);
  if (loading) {
    return <div>Loading........</div>;
  }
  if (error) {
    return <div>`Error occured ${error}........`</div>;
  }
  // return movies.map((movie, index) => <h1 key={index} className="text-red-500">{movie.Title}</h1>);
  // return <h1 className="text-red-500">This is react app</h1>
  return (
    // <div className="h-full w-full ">
      <Movies movies={movies} />
    // </div>
  );
};
export default App;
