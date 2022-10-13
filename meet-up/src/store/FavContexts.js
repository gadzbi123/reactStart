import { createContext, useState } from "react";

const FavContext = createContext({ favs: [], totalFavs: 0 });
function FavContextsProvider(props) {
  const [userFavs, setUserFavs] = useState([]);
  const context = { favs: userFavs, totalFavs: userFavs.length };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}
