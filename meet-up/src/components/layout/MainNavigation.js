import { useContext } from "react";
import { Link } from "react-router-dom";
import FavContext from "../../store/FavContexts";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favCtx = useContext(FavContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>

      <ul>
        <li>
          <Link to="/"> All Meet Ups</Link>
        </li>
        <li>
          <Link to="/new-meetup"> New Meet ups</Link>
        </li>
        <li>
          <Link to="/favorites">
            Favorites <span className={classes.badge}>{favCtx.totalFavs}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
