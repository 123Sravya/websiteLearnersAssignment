import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MedicationForm from './medicationForm';
import './Dashboard.css';

function Dashboard({ userId }) {
  const [medications, setMedications] = useState([]);

  const fetchMeds = async () => {
    const res = await axios.get(`http://localhost:4000/api/meds/${userId}`);
    setMedications(res.data);
  };

  const markAsTaken = async (id) => {
    await axios.patch(`http://localhost:4000/api/meds/taken/${id}`);
    fetchMeds();
  };

  useEffect(() => {
    fetchMeds();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <MedicationForm userId={userId} onAdded={fetchMeds} />
      <ul>
        {medications.map((med) => (
          <li key={med.id} className="border p-3 mb-2 flex justify-between">
            <div>
              <p className="font-bold">{med.name}</p>
              <p>{med.dosage} - {med.frequency}</p>
              <p className="text-sm text-gray-500">
                Taken on: {JSON.parse(med.taken_dates).join(', ') || 'Not yet'}
              </p>
            </div>
            <button
              className="bg-yellow-500 text-white px-3 py-1"
              onClick={() => markAsTaken(med.id)}
            >
              Mark Taken
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
