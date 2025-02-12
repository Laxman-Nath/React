/* eslint-disable react/prop-types */
export const Movies = ({ movies }) => {
  console.log("Movies inside movies page:", movies);
  if (!movies) {
    return <div>NO MOVIES FOUND!</div>;
  }
  return (
    <div className="w-full  bg-slate-400   text-center flex justify-center items-center flex-wrap rounded-md">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="flex flex-col items-center mt-2 m-3 bg-white w-60 hover:cursor-pointer hover:bg-red-500 shadow-white rounded-md text-1xl hover:scale-105 transition-all ease-in-out duration-1500"
        >
          <img
            src={movie.Poster}
            alt="error"
            className="object-cover h-80  w-full"
          />
          <h3>
            <strong>Title:</strong>
            {movie.Title}
          </h3>
          <h3>
            <strong>Year:</strong>
            {movie.Year}
          </h3>
          <h3>
            <strong>IMDB:</strong>
            {movie.imdbID}
          </h3>
          <h3>
            <strong>Type:</strong>
            {movie.Type}
          </h3>
        </div>
      ))}
    </div>
  );
};
