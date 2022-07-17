import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React Trip Blogs
            </div>
            <nav>
                <ul>
                <li>
                    <Link to='/'> All trips Blogs </Link>
                </li>
                <li>
                    <Link to='/add-new-trip'> Add trip Blog </Link>
                </li>
                <li>
                    <Link to='/favorites'> Favorites </Link>
                </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
