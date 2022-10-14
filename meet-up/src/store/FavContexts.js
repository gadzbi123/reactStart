import { createContext, useState } from "react";

const FavContext = createContext({
  favs: [],
  totalFavs: 0,
  addFav: (favoriteMeetUp) => {},
  removeFav: (id) => {},
  itemIsFav: (id) => {},
});
export function FavContextsProvider(props) {
  const [userFavs, setUserFavs] = useState([]);

  function addFavHandler(favMeetup) {
    setUserFavs((prevFavs) => {
      return prevFavs.concat(favMeetup);
    });
  }
  function removeFavHandler(id) {
    setUserFavs((prevFavs) => {
      return prevFavs.filter((meetup) => id !== meetup.id);
    });
  }
  function itemIsFavHandler(id) {
    return userFavs.some((meetup) => meetup.id === id);
  }
  const context = {
    favs: userFavs,
    totalFavs: userFavs.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemIsFav: itemIsFavHandler,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}
export default FavContext;
