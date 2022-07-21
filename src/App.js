import { Routes, Route } from "react-router-dom";
import AllTripsPage from "./pages/AllTrips";
import FavoritesPage from "./pages/Favorites";
import AddNewTripPage from "./pages/AddNewTrip";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllTripsPage />} exact />
                <Route path="/add-new-trip" element={<AddNewTripPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
