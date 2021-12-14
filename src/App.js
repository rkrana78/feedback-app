
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackForm from './components/FeedbackItem/FeedbackForm';
import FeedbackList from './components/FeedbackItem/FeedbackList';
import FeedbackStats from './components/FeedbackItem/FeedbackStats';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIcon/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {
 
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats  />
                <FeedbackList />
              </>
            }>

            </Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>


          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
