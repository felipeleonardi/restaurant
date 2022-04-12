import "./App.css";
import CustomerContainer from "./components/CustomerContainer";
import ReservationContainer from "./components/ReservationContainer/ReservationContainer";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <div className="container">
        <ReservationContainer />
        <CustomerContainer />
      </div>
    </div>
  );
}

export default App;