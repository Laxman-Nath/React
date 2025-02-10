import axios from "axios";

const Api=axios.create({
    baseURL:"http://www.omdbapi.com/"
});

export const getMoviesApi=()=>{
    return Api.get("?i=tt3896198&apikey=7cb3f4de&s=titanic&page=1");
}