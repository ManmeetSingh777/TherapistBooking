import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTherapists } from '../services/api';
import './SpecializationPage.css';

const SpecializationPage = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const data = await getTherapists();
        setTherapists(data);
      } catch (error) {
        console.error('Error fetching therapists:', error);
      }
    };

    fetchTherapists();
  }, []);

  return (
    <div>
      <h2>Specializations</h2>
      <ul>
        {therapists.map((therapist) => (
          <li key={therapist._id}>
            <Link to={`therapist/${therapist._id}`}>
              <img src={therapist.photo} alt={therapist.name} />
              <h3>{therapist.name}</h3>
              <p>{therapist.specialization}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecializationPage;
