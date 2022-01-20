import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, remove }) {
  //If there is no feedback then produce below message
  if (!feedback || feedback.length === 0) {
    return <p>No fedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map(item => (
        <FeedbackItem key={item.id} item={item} remove={remove} />
      ))}
    </div>
  );
}

export default FeedbackList;
