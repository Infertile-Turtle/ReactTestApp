// import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import GenerateLink from './GenerateLink';

// function App() {
//   const [linkId, setLinkId] = useState('');
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(false);
//   const [showGenerateLink, setShowGenerateLink] = useState(false);

//   // function to get linkId from the URL
//   function getLinkIdFromUrl() {
//     const url = window.location.href;
//     const linkId = url.substring(url.lastIndexOf('/') + 1);
//     setLinkId(linkId);
//   }

//   useEffect(() => {
//     getLinkIdFromUrl();
//   }, []);

//   // function to call the API and update click count
//   async function handleClick() {
//     if (linkId === '') {
//       return;
//     }

//     const url = `https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/fetchdata`;
//     const data = { linkID: linkId };
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       setError(true);
//       setResult(null);
//       return;
//     }

//     const responseData = await response.json();
//     if (responseData.errorType) {
//       console.log('API Error:', responseData.errorMessage);
//       setError(true);
//       setResult(null);
//       return;
//     }

//     setResult(responseData);

//     const clickUrl = `https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/updateclickcount`;
//     await fetch(clickUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });
//   }

//   useEffect(() => {
//     console.log('result updated:', result);
//   }, [result]);

//   useEffect(() => {
//     handleClick();
//   }, [linkId]);

//   function generateLink() {
//     setShowGenerateLink(true);
//   }

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img
//           src={logo}
//           className='App-logo'
//           alt='logo'
//         />
//         {showGenerateLink ? (
//           <GenerateLink />
//         ) : result !== null ? (
//           <h1>{result}</h1>
//         ) : (
//           <h1>
//             {error
//               ? `Error, no item with that link ID ${linkId}`
//               : 'Hello from V2'}
//           </h1>
//         )}
//         <button onClick={handleClick}>Show Map Data</button>
//         <button onClick={generateLink}>Generate New Link</button>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateLink from './GenerateLink';

function App() {
  const [linkId, setLinkId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [showGenerateLink, setShowGenerateLink] = useState(false);

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
    const url =
      'https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/fetchdata';
    const data = { linkID: linkId };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setError(true);
      setResult(null);
      return;
    }

    const responseData = await response.json();
    if (responseData.errorType) {
      console.log('API Error:', responseData.errorMessage);
      setError(true);
      setResult(null);
      return;
    }

    setResult(responseData);

    const clickUrl = `https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/updateclickcount`;
    await fetch(clickUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  useEffect(() => {
    handleClick();
  }, [linkId]);

  function generateLink() {
    setShowGenerateLink(true);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        {showGenerateLink ? (
          <GenerateLink />
        ) : result !== null ? (
          <h1>{result}</h1>
        ) : (
          <div className='link-buttons'>
            <button onClick={handleClick}>Show Map Data</button>
            <button onClick={generateLink}>Generate New Link</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
