import React, { useState } from 'react';
import './App.css';



import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';




function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div className="p-4">
      {!userId ? (
        <div className="flex gap-4">
          <Signup onSignup={setUserId} />
          <Login onLogin={setUserId} />
        </div>
      ) : (
        <Dashboard userId={userId} />
      )}
    </div>
  );
}

export default App;
