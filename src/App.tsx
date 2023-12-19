import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [cards, setCards] = useState<any>([]);
  const [input,setInput] = useState<string>('');

  useEffect(() => {
    if (input.length === 0) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=97f1bd616b51e07825e04a855aaeed30&query=${search}"
        )
        .then((data) => setCards(data.data.results))
        .catch((error) => {
          console.log(error);
        });
    }else{
      onSearch()
    }
  }, [input]);
  const onSearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=97f1bd616b51e07825e04a855aaeed30&query=${input}`
      )
      .then((data) => setCards(data.data.results))
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <header>
        <input
        onChange={(e) => setInput(e.target.value)} 
        autoFocus 
        placeholder="Search by name ..." 
        type="text" />
        <button onClick={onSearch}>Search</button>
      </header>
      <main>
        {cards.map((card: any) => {
          return (
            <figure key={card.id}>
              <img src={card.poster_path} alt="" />
              <figcaption>{card.title}</figcaption>
            </figure>
          );
        })}
      </main>
    </div>
  );
}

export default App;
