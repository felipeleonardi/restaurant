import "./App.css";
import ReservationContainer from "./components/ReservationContainer/ReservationContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ReservationContainer />
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;