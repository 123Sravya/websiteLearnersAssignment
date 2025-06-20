import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; 

function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/auth/signup', { username, password });
      onSignup(res.data.id);
    } catch (err) {
      setMessage('Signup failed: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="p-4 border rounded w-72">
      <h2 className="text-xl mb-2">Signup</h2>
      <input
        className="w-full p-2 mb-2 border"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full p-2 mb-2 border"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2" onClick={handleSignup}>
        Signup
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}

export default Signup;
