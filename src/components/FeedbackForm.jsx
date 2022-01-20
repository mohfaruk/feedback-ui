import Card from "../shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "../shared/Button";
import { useState } from "react";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState(""); //text state for onchange
  const [rating, setRating] = useState(10); //rating that will be passed to RatingSelect component
  const [btnDisable, setBtnDisable] = useState(true); //disables button if there is not enough characters
  const [message, setMessage] = useState(""); //message if user begins typing

  const handleChange = evt => {
    if (text !== "" && text.length <= 10) {
      setMessage("Must be at least 10 characters"); //if character is under 10 displays this message
      setBtnDisable(true); //button remains disabled
    } else {
      setMessage(null); //message dissapears
      setBtnDisable(false); //button is no longer disabled
    }
    setText(evt.target.value); //text state is changed whenever user types
  };

  const handleSubmit = evt => {
    evt.preventDefault(); //prevents refresh whenever there is a submit
    if (text.length > 10) {
      //if text is over 10 char
      const newFeedback = { text, rating }; //new variable created containing text & rating states
      handleAdd(newFeedback); //executes function that was passed in with newFeedback as argument
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={rating => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Provide feedback..."
            onChange={handleChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisable}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
