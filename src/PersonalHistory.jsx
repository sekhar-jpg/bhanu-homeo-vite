import React from 'react';

const PersonalHistory = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Personal History</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Habits:
          <input
            type="text"
            name="habits"
            value={data.habits || ''}
            onChange={handleInputChange}
            placeholder="E.g. Smoking, Alcohol, etc."
          />
        </label>

        <label>
          Occupation:
          <input
            type="text"
            name="occupation"
            value={data.occupation || ''}
            onChange={handleInputChange}
            placeholder="Patient's occupation"
          />
        </label>

        <label>
          Sleep Pattern:
          <input
            type="text"
            name="sleepPattern"
            value={data.sleepPattern || ''}
            onChange={handleInputChange}
            placeholder="E.g. Good, disturbed, etc."
          />
        </label>

        <label>
          Appetite:
          <input
            type="text"
            name="appetite"
            value={data.appetite || ''}
            onChange={handleInputChange}
            placeholder="E.g. Good, poor, etc."
          />
        </label>

        <label>
          Thirst:
          <input
            type="text"
            name="thirst"
            value={data.thirst || ''}
            onChange={handleInputChange}
            placeholder="E.g. Increased, decreased, normal"
          />
        </label>
      </div>
    </div>
  );
};

export default PersonalHistory;
