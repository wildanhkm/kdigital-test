import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingle = async () => {
      await axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((result) => {
          let data = result.data;
          console.log(data);
          setData((posts) => [...posts, data]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchSingle();
  }, []);

  return (
    <div className="container">
      <NavLink to="/">← Back to Home</NavLink>
      <div className="title">
        <h1>KDigital Test</h1>
      </div>
      <div className="content">
        <div className="col">
          {data.map((element, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <div className="card-title">
                    <h2>{element.title}</h2>
                  </div>
                  <div className="card-content">
                    <p>Comments: {element.descendants}</p>
                    <p>Score: {element.score}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
