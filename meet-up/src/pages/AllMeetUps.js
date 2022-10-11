import MeetUpList from "../components/meetups/MeetUpList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetUpsPage(props) {
  // await fetch(
  //   "https://react-start-app-3ce36-default-rtdb.firebaseio.com/meetups.json"
  // );
  const getLocal = () => {
    const data = localStorage.getItem("meetups");
    JSON.parse(data).then((data) => {
      console.log(data);
    });
  };
  return (
    <section>
      <MeetUpList meetups={DUMMY_DATA} />
    </section>
  );
}
export default AllMeetUpsPage;
