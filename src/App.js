import "./App.css";
import ParticleBackground from "./components/ParticleBackground";
import Header from "./components/Header";
import Card from "./components/Card";
import { Provider } from "react-redux";
import { createStore } from "redux";
import cardReducer from "./reducers/cardReducer";

function App() {
  const store = createStore(cardReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
        <ParticleBackground></ParticleBackground>
        <Card></Card>
      </Provider>
    </div>
  );
}

export default App;
