import { Routes, Route } from "react-router-dom";
import AllTripsPage from "./pages/AllTrips";
import FavoritesPage from "./pages/Favorites";
import AddNewTripPage from "./pages/AddNewTrip";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
    return (
        <div>
			<MainNavigation />
            <Routes>
                <Route path="/" element = {<AllTripsPage />} exact/>
				<Route path="/add-new-trip" element = {<AddNewTripPage />} />
				<Route path="/favorites" element = {<FavoritesPage />} />
            </Routes>
        </div>
    );
}

export default App;
