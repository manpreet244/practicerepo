import React ,{useState} from 'react'
import AddReviewData from './AddReviewdata';
const Topic = () => {
    const [selectedUserId, setSelectedUserId] = useState('');
    const handleChange =()=>{

    }
  return (
    <>
        <h3>Review System</h3>
        <label>Select User id:</label>
        <select value={selectedUserId} onChange={handleChange}>
        <option value="">User 1 </option>
        <option value="">User 2 </option>
             
        </select>
        {selectedUserId && <p>Selected User ID: {selectedUserId}</p>}
  <div>
    <AddReviewData/>
  </div>
    </>
  )
}

export default Topic
