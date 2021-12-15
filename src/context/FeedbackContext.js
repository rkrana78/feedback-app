import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
   // const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is test 1',
            rating: 10
        },
        {
          id: 2,
          text: 'this is test 2',
          rating: 7
      },
      {
        id: 3,
        text: 'this is test 3',
        rating: 9
    },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    }) 

    // add feedback

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback])
    }
  
    //delete feedback
    const deleteFeedback = (id => {
      if (window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
      }
    })

    // Update feedback item
  const updateFeedback = async (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }
    // set item to be updated

    const editFeedback = (item) => {
      setFeedbackEdit ({
        item,
        edit: true
      })
    }

    return (
        <FeedbackContext.Provider
          value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback,
          }}
        >
          {children}
        </FeedbackContext.Provider>
      )
}


export default FeedbackContext