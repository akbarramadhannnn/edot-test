import { useCallback, useEffect, useState } from "react";
import "./App.css";
import ContentData from "./data/content";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(ContentData);
  }, []);

  const handleLikeCard = useCallback(
    (index) => {
      const state = [...data];
      state[index].like = state[index].like + 1;
      setData(state);
    },
    [data]
  );

  const handleDislikeCard = useCallback(
    (index) => {
      const state = [...data];

      const count = state[index].like - 1;

      if (count !== -1) {
        state[index].like = count;
        setData(state);
      }
    },
    [data]
  );

  const handleLikeAll = useCallback(() => {
    const dataArr = [];
    for (let i = 0; i < data.length; i++) {
      dataArr.push({
        image: data[i].image,
        like: data[i].like + 1,
      });
    }
    setData(dataArr);
  }, [data]);

  const handleResetAll = useCallback(() => {
    const dataArr = [];
    for (let i = 0; i < data.length; i++) {
      dataArr.push({
        image: data[i].image,
        like: 0,
      });
    }
    setData(dataArr);
  }, [data]);

  const handleDislikeAll = useCallback(() => {
    const dataArr = [];
    for (let i = 0; i < data.length; i++) {
      const count = data[i].like - 1;
      dataArr.push({
        image: data[i].image,
        like: count === -1 ? data[i].like : count,
      });
    }
    setData(dataArr);
  }, [data]);

  return (
    <div className="App">
      <div
        style={{
          background: "#E3E3E3",
          width: 600,
          padding: '0px 40px 0px 40px'
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 30,
            marginBottom: 30,
            width: '100%'
          }}
        >
          <Button onClick={handleLikeAll} color="blue">
            Like All
          </Button>
          <Button onClick={handleResetAll}>Reset All</Button>
          <Button onClick={handleDislikeAll} color="red">
            Dislike All
          </Button>
        </div>

        {data.map((d, i) => {
          return (
            <Card
              key={i}
              image={d.image}
              like={d.like}
              handleLikeCard={() => handleLikeCard(i)}
              handleDislikeCard={() => handleDislikeCard(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
