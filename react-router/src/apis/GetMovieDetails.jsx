export const getMovieDetails = async ({ params }) => {
  const id = params.movieId;

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    console.log("before:",response);
    const data = await response.json();
    console.log("after:",data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
