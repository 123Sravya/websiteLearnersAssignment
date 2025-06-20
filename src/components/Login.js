import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', { username, password });
      onLogin(res.data.userId);
    } catch (err) {
      setMessage('Login failed: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="p-4 border rounded w-72">
      <h2 className="text-xl mb-2">Login</h2>
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
      <button className="bg-blue-600 text-white px-4 py-2" onClick={handleLogin}>
        Login
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}

export default Login;
