import { useEffect, useState } from "react";

export const NotToFetchApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message || "An error occurred");
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h1>Loading...........</h1>;
  }
  if (error) {
    return <h1>Error:{error}</h1>;
  }
  return (
    <>
      <ul>
        {data.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </>
  );
};
