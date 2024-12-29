import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => alert("error"));
  }, []);
   
  console.log(data);

  return (
     <>
      {data === undefined ? "Loading..." : <div><h3>{data[0].title}</h3><p>{data[0].body}</p></div>}
     </>
  );
};

export default Fetch;