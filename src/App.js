import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./css/app.css";

function App() {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(
          `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
        )
        .then((result) => {
          let data = result.data;
          setData(data);
          for (let index = 0; index < 10; index++) {
            fetchSingle(data[index]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const fetchSingle = async (id) => {
      await axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((result) => {
          let data = result.data;
          console.log(data);
          setPosts((posts) => [...posts, data]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetch();
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h1>KDigital Test</h1>
      </div>
      <div className="content">
        <div className="col">
          {posts.map((element, index) => {
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
}

export default App;
