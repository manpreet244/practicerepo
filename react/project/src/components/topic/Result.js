import React, { useState } from "react";

const Result = ({ topics , setTopics }) => {
  const [value, setValue] = useState(null);
  const [editedTopic, setEditedTopic] = useState("");
  const handleDelete = (index) => {
    setTopics((prevTopics) => prevTopics.filter((_, i) => i !== index));
  };
  const handleEditChange = (e) => {
    setEditedTopic(e.target.value); // Update the edited topic text
  };
  function handleUpdate(index) {
    setTopics((prevTopics) => 
      prevTopics.map((topic, i) => (i === index ? editedTopic : topic))
    ); // us index pe jaake value ko updated value (i.e. editedTopic ) update kar do

    setEditedTopic(""); // Clear the input field after updating
    setValue(null); // Close the edit view after updating
  }
  return (
    <>
      <div>
        {topics?.map((record, index) => {
          return (
            <li key={index}>
              {" "}
              {record} |
              <span
                onClick={() => {
                  handleDelete(index);
                }}
                style={{ cursor: "pointer" }} >
                Delete
              </span>{" "}
              |
              <span
                onClick={(prev) => {
                  setValue(index);
                }}
                style={{ cursor: "pointer" }} >
                Edit
              </span>
              {index === value && (
                <div>
                  <input
                    type="search"
                    value={editedTopic}
                    onChange={handleEditChange}
                    name="topic"
                    placeholder="Edit Topic"
                  />
                  <button onClick={()=>handleUpdate(index)}>Submit Edit</button>
                </div>
              )}
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Result;
