import "./App.css";
import CustomerContainer from "./components/CustomerContainer";
import ReservationContainer from "./components/ReservationContainer/ReservationContainer";
import HeadingStyled from "./styleds/Heading.styled";
import AppWrapper from "./styleds/AppWrapper.styled";

function App() {
	return (
		<AppWrapper data-testid="app-container">
			<div className="py-6">
				<HeadingStyled $textWhite={true}>Restaurant Reservations</HeadingStyled>
			</div>
			<div className="container flex my-0 mx-auto">
				<ReservationContainer />
				<CustomerContainer />
			</div>
		</AppWrapper>
	);
}

export default App;
