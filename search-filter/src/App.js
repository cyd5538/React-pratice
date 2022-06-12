import JSONDATA from "./MOCK_DATA.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchThem, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {JSONDATA.filter((val) => {
        if (searchThem === ""){
          return val
        }else if(val.first_name.toLowerCase().includes(searchThem.toLowerCase())){
          return val
        }
      }).map((data, key) => {
        return (
          <div className="user" key={key}>
            <p>{data.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
