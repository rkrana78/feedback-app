import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from '../Shared/Card';

const FeedbackItem = ({item, handleDelete}) => {
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an example of a feedback item')

    
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=> handleDelete(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

FeedbackItem.propsTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;