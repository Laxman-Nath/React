export const GetAllMovies=async()=>{
    try {
        const response=await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7cb3f4de&s=titanic&page=1");
        
        const data=await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}