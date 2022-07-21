import "./App.css";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DayList />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_day" element={<CreateDay />} />
      </Routes>
    </div>
  );
}

export default App;
