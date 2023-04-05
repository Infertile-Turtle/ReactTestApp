// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img
//           src={logo}
//           className='App-logo'
//           alt='logo'
//         />
//         <h1>Hello from V2</h1>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [generatedLink, setGeneratedLink] = useState(null);

  async function generateLink() {
    try {
      const response = await fetch(
        'https://8ich8omu47.execute-api.us-east-1.amazonaws.com/dev/test'
      );
      const data = await response.json();
      console.log(data);
      setGeneratedLink(data);
    } catch (err) {
      console.log(err);
      setGeneratedLink('Error retrieving data.');
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <h1>Hello from V4</h1>
        <button onClick={generateLink}>Generate Link</button>
        {generatedLink && <p>Generated Link: {generatedLink}</p>}
      </header>
    </div>
  );
}

export default App;
