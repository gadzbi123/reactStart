import NewMeetUpForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
function NewMeetUpsPage(props) {
  const history = useNavigate();
  function MeetUpHandler(meetUpData) {
    fetch("firebase", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>MeetUps Form</h1>
      <NewMeetUpForm onAddMeetup={MeetUpHandler} />
    </section>
  );
}
export default NewMeetUpsPage;
