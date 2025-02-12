import { useEffect, useState } from "react";
import { getPost, deletePost } from "../Apis/postApi";
import { Form } from "./Form";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postToEdit, setPostToEdit] = useState({});
  const getPostData = async () => {
    const res = await getPost();
    // if (res) {
    //   setPosts(res.data);
    // }
    setPosts(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);

  const handlePostDelete = async (id) => {
    console.log("Inside handle post delete.....");
    try {
      const res = await deletePost(id);
      console.log(res.status);
      if (res.status === 200) {
        const updatedPosts = posts.filter((curr, index) => {
          return curr.id != id;
        });

        setPosts(updatedPosts);
        alert("Post with id " + id + " is deleted successfully");
      }
      //   alert("Post is deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostEdit = (post) => {
    console.log("inside handle post edit");
    setPostToEdit(post);
  };
  return (
    <div className="flex flex-col gap-5">
      <Form posts={posts} setPosts={setPosts} postToEdit={postToEdit} setPostToEdit={setPostToEdit} />
      <ol className="flex flex-row gap-2  flex-wrap">
        {posts.map((post, index) => (
          <li
            key={index}
            className="border-2 rounded-md w-80 text-center mt-10"
          >
            <h1 className="text-blue-500 text-2xl font-bold">{post.title}</h1>
            <hr />
            <p className="mb-2 text-1xl">{post.body}</p>

            <div className="flex flex-row mb-2 justify-between">
              <button
                className="bg-green-500 text-white p-2 m-2 rounded-md h-8 flex items-center w-20 justify-center hover:cursor-pointer hover:scale-95 ease-in-out duration-1500 hover:bg-green-300 "
                onClick={() => handlePostEdit(post)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white p-2 m-2 rounded-md h-8 flex items-center w-20 justify-center hover:cursor-pointer hover:scale-95"
                onClick={() => handlePostDelete(post.id)}
              >
                Delete
              </button>
            </div>
            <p className="text-sm">{index + 1}.</p>
          </li>
        ))}
      </ol>
    </div>
  );
};
