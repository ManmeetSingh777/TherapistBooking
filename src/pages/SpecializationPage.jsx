import React, { useEffect, useState } from 'react';
import { getTherapists } from '../services/api'; // Adjust the import based on your project structure
import './SpecializationPage.css';

const SpecializationPage = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    const fetchTherapists = async () => {
      const data = await getTherapists();
      console.log('Therapists:', data); // Log therapist data to verify IDs
      setTherapists(data);
    };
    fetchTherapists();
  }, []);

  return (
    <div className="specialization">
      <h1>Our Therapists</h1>
      <div className="therapists-list">
        {therapists.map((therapist) => (
          <div key={therapist._id} className="therapist-card">
            <img src={therapist.photo} alt={therapist.name} className="therapist-photo" />
            <div className="therapist-info">
              <h2>{therapist.name}</h2>
              <p>{therapist.specialization}</p>
              <p>{therapist.description}</p>
              <button onClick={() => window.location.href = `/booking/${therapist._id}`}>Schedule an Interview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializationPage;
