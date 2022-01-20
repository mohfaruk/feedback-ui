import { FaTimes } from "react-icons/fa"; //react font awesome icons
import Card from "../shared/Card";

function FeedbackItem({ item, remove }) {
  //each item displays the rating and text (review)
  //includes a button with an onClick function (removes item)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => {
          remove(item.id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
