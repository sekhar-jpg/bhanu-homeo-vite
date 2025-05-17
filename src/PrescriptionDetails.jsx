import React from 'react';

const PrescriptionDetails = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Prescription Details / ఔషధ వివరాలు</h3>
      <label>Medicine Name:</label>
      <input
        type="text"
        name="medicine"
        value={data.medicine || ''}
        onChange={handleInputChange}
        placeholder="Enter medicine name"
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
      />
      <label>Potency:</label>
      <input
        type="text"
        name="potency"
        value={data.potency || ''}
        onChange={handleInputChange}
        placeholder="Enter potency (e.g., 30C)"
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
      />
      <label>Dose:</label>
      <input
        type="text"
        name="dose"
        value={data.dose || ''}
        onChange={handleInputChange}
        placeholder="Enter dose"
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
      />
      <label>Repetition:</label>
      <input
        type="text"
        name="repetition"
        value={data.repetition || ''}
        onChange={handleInputChange}
        placeholder="Enter repetition frequency"
        style={{ width: '100%', padding: 8 }}
      />
    </div>
  );
};

export default PrescriptionDetails;
