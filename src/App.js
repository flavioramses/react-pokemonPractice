import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

// TAKES A STRING AND REPLACES EVERY "-" WITH AN SPACE
const spaceUp = (str) => {
    var string = str.split("-");
    return string.join(" ");
};

function App() {
  const [number, setNumber] = useState(null);
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    const api = axios.create({
      baseURL: "https://pokeapi.co/api/v2/pokemon",
    });

    async function fetchApi(num) {
      const res = await api.get("/" + num);
      const data = await res.data;
      return data;
    }
    async function addPokemon(jay) {
      const {id} = jay;
      await setPokeList([...pokeList, {id,jay}]);
    }
    fetchApi(Math.round(Math.random() * 400)).then((res) => addPokemon(res));
  }, [number]);


  return (
    <div className="cont">
      <button
        onClick={() => {
          setNumber(Math.round(Math.random() * 400));
        }}
      >
        ⟳
      </button>
      <Cards spaceUp={spaceUp} pokeList={pokeList}  />
    </div>
  );
}
export default App;
