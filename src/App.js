// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [linkId, setLinkId] = useState('');

//   // function to get linkId from the URL
//   function getLinkIdFromUrl() {
//     const url = window.location.href;
//     const linkId = url.substring(url.lastIndexOf('/') + 1);
//     setLinkId(linkId);
//   }

//   // function to call the API and update click count
//   async function handleClick() {
//     // Call getLinkIdFromUrl to set linkId state
//     getLinkIdFromUrl();

//     const url = `https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/fetchdata`;
//     const data = { linkID: linkId };
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });
//     const result = await response.json();
//     console.log('result', result);
//     console.log('response', response);
//     console.log('data', data);

//     const clickUrl = `https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/updateclickcount`;
//     await fetch(clickUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });
//   }

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img
//           src={logo}
//           className='App-logo'
//           alt='logo'
//         />
//         <h1>Hello from V2</h1>
//         <button onClick={handleClick}>Generate Link</button>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [linkId, setLinkId] = useState('');
  const [result, setResult] = useState(null);

  // function to get linkId from the URL
  function getLinkIdFromUrl() {
    const url = window.location.href;
    const linkId = url.substring(url.lastIndexOf('/') + 1);
    setLinkId(linkId);
  }

  useEffect(() => {
    getLinkIdFromUrl();
  }, []);

  // function to call the API and update click count
  async function handleClick() {
    const url = `https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/fetchdata`;
    const data = { linkID: linkId };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log('result', result);
    console.log('response', response);
    console.log('data', data);

    const clickUrl = `https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/updateclickcount`;
    await fetch(clickUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setResult(result);
    } else {
      setResult('Error, item does not exist');
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
        {result !== null ? <h1>{result}</h1> : <h1>Hello from V2</h1>}
        <button onClick={handleClick}>Generate Link</button>
      </header>
    </div>
  );
}

export default App;
