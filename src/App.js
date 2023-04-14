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

// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [generatedLink, setGeneratedLink] = useState(null);

//   async function generateLink() {
//     try {
//       const response = await fetch(
//         // 'https://8ich8omu47.execute-api.us-east-1.amazonaws.com/dev/test'
//         'https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/fetchdata'
//       );
//       const data = await response.json();
//       console.log(data);
//       setGeneratedLink(data);
//     } catch (err) {
//       console.log(err);
//       setGeneratedLink('Error retrieving data.');
//     }
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
//         <button onClick={generateLink}>Generate Link</button>
//         {generatedLink && <p>Generated Link: {generatedLink}</p>}
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [generatedLink, setGeneratedLink] = useState(null);

//   const generateLink = async () => {
//     const response = await fetch(
//       'https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/generateurl',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           Clicks: 1,
//         }),
//       }
//     );
//     const data = await response.json();
//     setGeneratedLink(data.link);
//   };

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img
//           src={logo}
//           className='App-logo'
//           alt='logo'
//         />
//         <h1>Hello from V1</h1>
//         <button onClick={generateLink}>Generate Link</button>
//         {generatedLink && <p>Generated Link: {generatedLink}</p>}
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [linkId, setLinkId] = useState('');

  // function to get linkId from the URL
  function getLinkIdFromUrl() {
    const url = window.location.href;
    const linkId = url.substring(url.lastIndexOf('/') + 1);
    setLinkId(linkId);
  }

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
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <h1>Hello from V2</h1>
        <button onClick={handleClick}>Generate Link</button>
      </header>
    </div>
  );
}

export default App;
