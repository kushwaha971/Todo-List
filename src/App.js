import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setListe] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item !== "") {
      setListe([...list, item]);
      setItem("");
    }

    console.log(list);
  };

  const handleRemove = (id) => {
    const updateItem = list.filter((item, indx) => id !== indx);
    setListe(updateItem);
  };
  return (
    <div className="App">
      <input
        value={item}
        name="item"
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Add Item</button>
      {list.map((todo, indx) => (
        <div
          key={indx}
          style={{ display: "flex", justifyContent: "center", margin: "25px" }}
        >
          <div>{todo}</div>
          <button
            onClick={() => {
              handleRemove(indx);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
