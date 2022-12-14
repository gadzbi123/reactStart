import { useNavigate } from "react-router-dom";

import NewMeetUpForm from "../components/meetups/NewMeetupForm";

function NewMeetUpsPage(props) {
  const navigate = useNavigate();
  function MeetUpFireBaseHandler(meetUpData) {
    fetch(
      "https://react-start-app-3ce36-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  // function MeetUpLocalHandler(meetUpData) {
  //   localStorage.setItem("meetups", JSON.stringify(meetUpData));
  //   history.replace("/");
  // }
  return (
    <section>
      <h1>MeetUps Form</h1>
      <NewMeetUpForm onAddMeetup={MeetUpFireBaseHandler} />
    </section>
  );
}
export default NewMeetUpsPage;
