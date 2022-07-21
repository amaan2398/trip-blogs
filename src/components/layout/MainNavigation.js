import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);
    let favoriteTotal = favoritesCtx.totalFavorites;
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                Trip Blogs
                <section className={classes.section}>
                    (- React App)
                </section>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> All trips Blogs </Link>
                    </li>
                    <li>
                        <Link to="/add-new-trip"> Add trip Blog </Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            Favorites
                            <span className={classes.badge}>
                                {favoriteTotal}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
