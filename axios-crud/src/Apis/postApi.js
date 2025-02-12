import axios from "axios";
const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPost = () => {
  return Api.get("/posts");
};

export const deletePost = (id) => {
  return Api.delete(`/posts/${id}`);
};

export const addPost = (post) => {
  return Api.post("/posts", post);
};

export const updatePost = (id, post) => {
  console.log(post);
  console.log("Id",id);
  return Api.put(`/posts/${id}`, post);
};
