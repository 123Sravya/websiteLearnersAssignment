import React, { useState } from 'react';
import axios from 'axios';

function MedicationForm({ userId, onAdded }) {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = async () => {
    await axios.post('http://localhost:4000/api/meds', {
      user_id: userId,
      name,
      dosage,
      frequency,
    });
    onAdded(); // Refresh medication list
    setName('');
    setDosage('');
    setFrequency('');
  };

  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg mb-2">Add Medication</h3>
      <input
        className="w-full p-2 mb-2 border"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full p-2 mb-2 border"
        placeholder="Dosage"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
      />
      <input
        className="w-full p-2 mb-2 border"
        placeholder="Frequency"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      />
      <button className="bg-purple-600 text-white px-4 py-2" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default MedicationForm;
