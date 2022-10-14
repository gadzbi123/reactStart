import { useContext } from "react";
import MeetUpList from "../components/meetups/MeetUpList";
import FavContexts from "../store/FavContexts";
function FavoritesPage() {
  const favCtx = useContext(FavContexts);

  let content;
  if (favCtx.totalFavs === 0)
    content = <p>You got no favorites yet. Add some</p>;
  else content = <MeetUpList meetups={favCtx.favs} />;
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
export default FavoritesPage;
