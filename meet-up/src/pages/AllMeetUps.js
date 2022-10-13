import { useEffect, useState } from "react";
import MeetUpList from "../components/meetups/MeetUpList";

function AllMeetUpsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState([]);

  // with EMPTY it will run constantly,
  // with [] it will only execute when the component is loaded,
  // with [condition] it will run only when condition has changed
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-start-app-3ce36-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((promise) => {
        return promise.json();
      })
      .then((data) => {
        data = Object.values(data);
        setIsLoading(false);
        setContent(data);
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
      <MeetUpList meetups={content} />
    </section>
  );
}
export default AllMeetUpsPage;
