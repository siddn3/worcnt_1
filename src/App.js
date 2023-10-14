import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = () => {
    // Split the text by whitespace and filter out empty strings
    const words = text.trim().split(/\s+/).filter(Boolean);
    return words.length;
  };

  return (
    <div className='container'>
      <h2>Responsive Paragraph Word Counter</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <p>Word Count: {getWordCount()}</p>
    </div>
  );
}

export default App;
