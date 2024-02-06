import { useState, useEffect } from "react";

const GetResources = () => {
  const [type, setType] = useState("posts");
  const arrTab = ["posts", "comments", "albums", "photos", "todos", "users"];
  const [data, setData] = useState([]);

  useEffect(() => {
    //console.log(type);
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${type}`
        );
        const dataType = await response.json();
        setData(dataType);
        //console.log(data);
      } catch (error) {
        //console.log(error);
      }
    };
    getData();
  }, [type]);

  //console.log(data);

  return (
    <>
      <div className="mb-6">
        {arrTab.map((tab, index) => {
          return (
            <button
              className={
                type === tab ? "btn-gradients btn-active" : "btn-gradients "
              }
              key={index}
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="container-data">
        <ul className="p-2.5 pl-5 list-disc">
          {data.map((item, index) => {
            if (type === arrTab[0]) {
              return (
                <li key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              );
            } else if (type === arrTab[1]) {
              return (
                <li key={index}>
                  <h3>{item.name}</h3>
                  <p>Email: {item.email}</p>
                  <p>{item.body}</p>
                </li>
              );
            } else if (type === arrTab[2]) {
              return (
                <li key={index}>
                  <h3>{item.title}</h3>
                </li>
              );
            } else if (type === arrTab[3]) {
              return (
                <li key={index}>
                  <h3>{item.title}</h3>
                  <p>
                    url: <a href={item.url}>{item.url}</a>
                  </p>
                </li>
              );
            } else if (type === arrTab[4]) {
              return (
                <li key={index}>
                  <h3>{item.title}</h3>
                  <p>Status: {item.completed ? "Completed" : "Not yet"}</p>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <h3>{item.name}</h3>
                  <p>
                    Website: <a href={item.website}>{item.website}</a>
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default GetResources;
