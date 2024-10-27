import React, { useState } from "react";

const AddTopic = ({ setTopics }) => {
  const [topic, setTopic] = useState('');
  console.log(topic);
  const handleSubmit = () => {
    setTopics((prev) => {
      console.log(prev);
      return [...prev , topic]; // prev mein nya topic bhi add kr do
  });
  };
  return (
    <div>
      <h3>Add Topic</h3>
      <input
        placeholder="Add a topic"
        value={topic}
        type="search"
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Topic</button>
    </div>
  );
};

export default AddTopic;
