import { useContext } from "react";
import FavContext from "../../store/FavContexts";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetUpItem(props) {
  const favCtx = useContext(FavContext);
  const itemIsFav = favCtx.itemIsFav(props.id);
  function toggleFavStatusHandler() {
    if (itemIsFav) favCtx.removeFav(props.id);
    else
      favCtx.addFav({
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
      });
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>
            {itemIsFav ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
