import React, { useState } from 'react';

const App = () => {
  const [paragraph, setParagraph] = useState('');
  const wordCount = paragraph.trim().split(' ').filter(Boolean).length;

  const handleInputChange = (event) => {
    setParagraph(event.target.value);
  };

  return (
    <div id="main">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea rows={5} value={paragraph} onChange={handleInputChange} placeholder="Enter your paragraph here..." />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default App;
