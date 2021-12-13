import { v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import FeedbackData from './components/Data/FeedbackData';
import FeedbackForm from './components/FeedbackItem/FeedbackForm';
import FeedbackList from './components/FeedbackItem/FeedbackList';
import FeedbackStats from './components/FeedbackItem/FeedbackStats';
import Header from './components/Header/Header';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);


  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  })
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FeedbackForm handleAdd = {addFeedback}/>
        <FeedbackStats  feedback={feedback}/>
        <FeedbackList feedback={feedback}
        handleDelete={deleteFeedback}
        />
      </div>
    </div>
  );
}

export default App;
