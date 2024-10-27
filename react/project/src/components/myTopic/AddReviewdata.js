import React, { useState } from "react";

const AddReviewData = ({ setTopics }) => {
 
  const [reviewData, setReviewData] = useState({
    title: "",
    description: "",
    typeOfThing: "",
  });

  return (
    <div>
     <h2>Submit a review</h2>
     <form> onSubmit={handleSubmit}</form>
    <div>
      {/* Title */}
    <label htmlFor="title">Title</label>
      <input
        type="text"
        value={reviewData.title}
        onChange={handleReviewChange}
        placeholder="Black Car"
      />
    </div>
    {/* Description */}
    <div>
    <label htmlFor="desc">Description</label>
      <input
        type="text"
        value={reviewData.description}
        onChange={handleReviewChange}
        placeholder="High speed"
      />
    </div>
    {/* Type of thing */}
    <div>
    <label htmlFor="typeOfThing">type of thing</label>
      <select
        name="typeOfThing"
        value={reviewData.typeOfThing}
        onChange={handleReviewChange}
        placeholder="Black Car"
      />
      <option value="">Select Type</option>
      <option value="Person">Person</option>
      <option value="Business">Business</option>
      <option value="Thing">Thing</option>
      <option value="Phone">Phone</option>
       <option value="Email">Email</option>
    </div>
    </div>
  );
};

export default AddReviewData;
