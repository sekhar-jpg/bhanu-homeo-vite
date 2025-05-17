import React from 'react';

const DoctorObservations = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Doctor Observations</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          General Appearance:
          <input
            type="text"
            name="generalAppearance"
            value={data.generalAppearance || ''}
            onChange={handleInputChange}
            placeholder="Enter general appearance"
          />
        </label>

        <label>
          Physical Findings:
          <input
            type="text"
            name="physicalFindings"
            value={data.physicalFindings || ''}
            onChange={handleInputChange}
            placeholder="Enter physical findings"
          />
        </label>

        <label>
          Emotional State:
          <input
            type="text"
            name="emotionalState"
            value={data.emotionalState || ''}
            onChange={handleInputChange}
            placeholder="Enter emotional state"
          />
        </label>

        <label>
          Other Observations:
          <input
            type="text"
            name="otherObservations"
            value={data.otherObservations || ''}
            onChange={handleInputChange}
            placeholder="Enter other observations"
          />
        </label>
      </div>
    </div>
  );
};

export default DoctorObservations;
