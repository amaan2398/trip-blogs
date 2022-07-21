import TripList from "../components/trips/TripList";
import { useState, useEffect } from "react";

function AllTripsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTrips, setLoadedTrips] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `${process.env.REACT_APP_BACKEND_API_URL}${process.env.REACT_APP_BACKEND_API_DATABASE}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const trips = [];
                for(const key in data){
                    const trip = {
                        id: key,
                        ...data[key]
                    }
                    trips.push(trip);
                }
                setIsLoading(false);
                setLoadedTrips(trips);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    return (
        <section>
            <h1>All Trips</h1>
            <ul>
                <TripList trips={loadedTrips} />
            </ul>
        </section>
    );
}

export default AllTripsPage;
