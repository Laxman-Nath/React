export const Practice = () => {
  const arr = [1];
  return (
    <>
      {/* <p>{arr.length && "Something went wrong"}</p> */}
      {/* <p>{!arr.length && "Something went wrong"}</p> */}
      {/* <p>{arr.length || "Something went wrong"}</p> */}
      {/* <p>{!Boolean(arr.length) && "Something went wrong"}</p> */}
      {/* <p>{arr.length===0 && "Something went wrong"}</p> */}
      <p>{arr.length === 0 || "Something went wrong"}</p>
      <p>Length of array is:{arr.length}</p>
    </>
  );
};
