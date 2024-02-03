import { useState, useEffect } from "react";

const GetResources = () => {
  const [type, setType] = useState("posts");
  const arrTab = ["posts", "comments", "albums", "photos", "todos", "users"];
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${type}`
        );
        const dataType = await response.json();
        setData(dataType);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="tab-list">
        {arrTab.map((tab, index) => (
          <button key={index} onClick={() => setType(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="container-data">
        {data.map((item, index) => {
          <p key={index}>{item}</p>;
        })}
      </div>
    </>
  );
};

export default GetResources;
