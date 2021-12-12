import { useState } from 'react';
import FeedbackData from './components/Data/FeedbackData';
import FeedbackList from './components/FeedbackItem/FeedbackList';
import Header from './components/Header/Header';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
}

export default App;
