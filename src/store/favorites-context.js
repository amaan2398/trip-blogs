import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteTrip) => {},
    removeFavorite: (tripId) => {},
    itemFavorite: (tripId) => {},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteTrip) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteTrip);
        });
    }

    function removeFavoriteHandler(tripId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(trip => trip.id !== tripId);
        });
    }

    function itemFavoriteHandler(tripId) {
        return userFavorites.some(trip => trip.id === tripId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemFavorite: itemFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;

