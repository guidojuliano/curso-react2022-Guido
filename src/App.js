import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Noticias from "./components/Noticias";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Noticias></Noticias>
    </div>
  );
}

export default App;
