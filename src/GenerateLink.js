// import React, { useState } from 'react';

// function GenerateLink() {
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [showLinkOptions, setShowLinkOptions] = useState(false);

//   function handleEmailChange(event) {
//     setEmail(event.target.value);
//   }

//   function handlePhoneChange(event) {
//     setPhone(event.target.value);
//   }

//   function handleSendEmail() {
//     const link = `https://example.com/link?email=${email}&phone=${phone}`;
//     const subject = 'Check out this link';
//     const body = `I thought you might be interested in this link:\n${link}`;
//     const mailtoUrl = `mailto:?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailtoUrl;
//   }

//   function handleSendSms() {
//     const link = `https://example.com/link?email=${email}&phone=${phone}`;
//     const body = `Check out this link: ${link}`;
//     const smsUrl = `sms:${phone}?body=${encodeURIComponent(body)}`;
//     window.location.href = smsUrl;
//   }

//   function handleShowLinkOptions() {
//     setShowLinkOptions(true);
//   }

//   return (
//     <div className='GenerateLink'>
//       {showLinkOptions ? (
//         <>
//           <label htmlFor='email'>Email:</label>
//           <input
//             type='email'
//             id='email'
//             value={email}
//             onChange={handleEmailChange}
//             style={{ textAlign: 'left' }}
//           />
//           <br />
//           <label htmlFor='phone'>Phone:</label>
//           <input
//             type='tel'
//             id='phone'
//             value={phone}
//             onChange={handlePhoneChange}
//             style={{ textAlign: 'left' }}
//           />
//           <br />
//           <button onClick={handleSendEmail}>Send Email</button>
//           <button onClick={handleSendSms}>Send SMS</button>
//         </>
//       ) : (
//         <button onClick={handleShowLinkOptions}>Generate New Link</button>
//       )}
//     </div>
//   );
// }

// export default GenerateLink;
