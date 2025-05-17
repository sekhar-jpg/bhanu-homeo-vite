import React from 'react';

const PrescriptionDetails = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Prescription Details</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="medicine"
          value={data.medicine || ''}
          onChange={handleInputChange}
          placeholder="Medicine Name"
        />

        <input
          type="text"
          name="dosage"
          value={data.dosage || ''}
          onChange={handleInputChange}
          placeholder="Dosage"
        />

        <input
          type="text"
          name="frequency"
          value={data.frequency || ''}
          onChange={handleInputChange}
          placeholder="Frequency"
        />

        <textarea
          name="instructions"
          value={data.instructions || ''}
          onChange={handleInputChange}
          placeholder="Additional Instructions"
          rows={4}
        />
      </div>
    </div>
  );
};

export default PrescriptionDetails;
