import { useNavigate } from 'react-router-dom';
import NewTripForm from "../components/trips/NewTripForm";

function AddNewTripPage() {
    const navigate = useNavigate();
    function onAddTripHandler(tripData) {
        fetch(
            "https://react-trip-backend-default-rtdb.asia-southeast1.firebasedatabase.app/trips.json",
            {
                method: "POST",
                body: JSON.stringify(tripData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() =>{
            navigate('/');
        });
    }
    return (
        <section>
            <h1>Add New Trip</h1>
            <NewTripForm onAddTrip={onAddTripHandler} />
        </section>
    );
}

export default AddNewTripPage;
