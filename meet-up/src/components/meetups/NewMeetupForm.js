import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import React from "react";
function NewMeetUpForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();
  const submitHandler = function (e) {
    e.preventDefault();
    const inputTitle = titleInputRef.current.value;
    const inputImage = imageInputRef.current.value;
    const inputAddress = addressInputRef.current.value;
    const inputDesc = descInputRef.current.value;
    const meetUpData = {
      title: inputTitle,
      image: inputImage,
      address: inputAddress,
      description: inputDesc,
    };
    props.onAddMeetup(meetUpData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">MeetUp image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">description</label>
          <textarea rows={5} required id="description" ref={descInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetUpForm;
