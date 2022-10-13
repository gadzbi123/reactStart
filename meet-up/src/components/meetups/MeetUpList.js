import classes from "./MeetupList.module.css";
import MeetUpItem from "./MeetUpItem";
function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup, idx) => (
        <MeetUpItem
          key={idx}
          id={idx}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetUpList;
