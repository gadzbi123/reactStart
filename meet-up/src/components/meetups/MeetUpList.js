import classes from "./MeetupList.module.css";
import MeetUpItem from "./MeetUpItem";
import React from "react";
function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      <React.StrictMode>
        {props.meetups.map((meetup) => (
          <MeetUpItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </React.StrictMode>
    </ul>
  );
}

export default MeetUpList;
