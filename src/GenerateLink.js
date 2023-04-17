import React, { useState } from 'react';

function GenerateLink() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSMSSubmit = async e => {
    e.preventDefault();
    const response = await fetch(
      'https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/sendurl_sms',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, phone_number: phoneNumber }),
      }
    );
    if (response.ok) {
      console.log('SMS sent successfully');
    } else {
      console.error('Error sending SMS');
    }
  };

  const handleEmailSubmit = async e => {
    e.preventDefault();
    const response = await fetch(
      'https://fg4vvveib0.execute-api.us-east-1.amazonaws.com/dev/sendurl_email',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, phone_number: phoneNumber }),
      }
    );
    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Error sending email');
    }
  };

  return (
    <div>
      <h1>Generate Link</h1>
      <form>
        <label>
          Email:
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type='text'
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleSMSSubmit}>Send SMS</button>
        <button onClick={handleEmailSubmit}>Send Email</button>
      </form>
    </div>
  );
}

export default GenerateLink;
