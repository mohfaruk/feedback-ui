import { v4 as uuidv4 } from "uuid"; //imports uuid library
import { useState } from "react"; //imports useState hook
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData); //sets initial value as feedback data

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4(); //generates random id
    setFeedback([newFeedback, ...feedback]); //sets feedback state to current feedback data, and adds new feedback object
  };

  const removeItem = id => {
    if (window.confirm("Are you sure you want to delete?")) {
      //user is prompted for deletion
      setFeedback(feedback.filter(item => item.id !== id)); //only keeps items that do not possess id selected
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} remove={removeItem} />
      </div>
    </>
  );
}
