import React from 'react';

const DoctorObservations = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Doctor's Observations / డాక్టర్ పరిశీలనలు</h3>
      <textarea
        name="observations"
        value={data.observations || ''}
        onChange={handleInputChange}
        rows={5}
        style={{ width: '100%', padding: 10 }}
        placeholder="Enter doctor's observations here"
      />
    </div>
  );
};

export default DoctorObservations;
