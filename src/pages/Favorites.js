import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import TripList from "../components/trips/TripList";

function FavoritesPage(){
    const favoritesCtx = useContext(FavoritesContext);
    const favoriteTrips = favoritesCtx.favorites;
    let content;
    if(favoritesCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start adding some?</p>;
    }
    else{
        content = <TripList trips={favoriteTrips} />;
    }
    return (
        <section>
            <h1>Favorite Trips</h1>
            {content}
        </section>
    )
}

export default FavoritesPage;