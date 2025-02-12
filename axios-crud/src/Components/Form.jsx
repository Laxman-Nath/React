/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { addPost, updatePost } from "../Apis/postApi";

export const Form = ({ posts, setPosts, postToEdit,setPostToEdit }) => {
  const [postToAdd, setPostToAdd] = useState({
    title: "",
    body: "",
  });

  const addPostData = async (postToAdd) => {
    const res = await addPost(postToAdd);
    console.log(res.status);
    console.log(res);
    if (res.status === 201) {
      console.log("Inside added data");
      setPosts([...posts, res.data]);
      // setPosts((prevPosts) => [...prevPosts, res.data]);

      console.log("Posts after inserting data", posts);
      alert("Post is added successfully");
      setPostToAdd({ title: "", body: "" });
    }
  };

  const updatePostData = async (post) => {
    const res = await updatePost(postToEdit.id, post);
    console.log(res.status);
    // console.log("ID:",res.data.id);
    if (res.status === 200) {
      setPosts((prev) =>
        prev.map((curr) => (curr.id === res.data.id ? res.data : curr))
      );
      

      setPostToEdit({});


      setPostToAdd({ title: "", body: "" });
      alert("post is updated successfully!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(postToAdd);
    addPostData(postToAdd);
  };

  const handleUpdate = (e) => {
    console.log("Inside handle update");
    e.preventDefault();
    console.log(postToAdd);
    updatePostData(postToAdd);
  };
  const isEmpty = Object.keys(postToEdit).length === 0;
  useEffect(() => {
    postToEdit &&
      setPostToAdd({
        title: postToEdit.title || " ",
        body: postToEdit.body || " ",
      });
  }, [postToEdit]);
  return (
    <div className="flex gap-3 justify-center mt-5">
      <form
        onSubmit={isEmpty ? handleSubmit : handleUpdate}
        className="flex gap-3 justify-center mt-5"
      >
        <input
          type="text"
          name="title"
          value={postToAdd.title}
          onChange={(e) =>
            setPostToAdd({ ...postToAdd, title: e.target.value })
          }
          placeholder="Enter title"
          className="border-white rounded-md text-center outline-2"
        />

        <input
          className="border-white rounded-md text-center outline-2"
          type="text"
          name="body"
          value={postToAdd.body}
          onChange={(e) => setPostToAdd({ ...postToAdd, body: e.target.value })}
          placeholder="Enter body"
        />
        <button
          type="submit"
          className="bg-green-500 text-white  p-2 m-2 rounded-md h-8 flex items-center w-20 justify-center hover:cursor-pointer hover:scale-95"
        >
          {isEmpty ? "Add" : "Update"}
        </button>
      </form>
    </div>
  );
};
