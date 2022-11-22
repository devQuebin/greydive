import items from "./items";
import Header from "./components/Header";
import Tester from "./components/Tester";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Header items={items} />
      <Routes>
        {items.map((item, i) => {
          return (
            <Route
              path={`/tester${i + 1}`}
              key={item.idVideo}
              element={<Tester item={item} />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}
export default App;
