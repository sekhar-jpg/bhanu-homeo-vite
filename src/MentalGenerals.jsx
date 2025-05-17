import React from 'react';

const MentalGenerals = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Mental Generals</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Mind State:
          <input
            type="text"
            name="mindState"
            value={data.mindState || ''}
            onChange={handleInputChange}
            placeholder="Enter mind state"
          />
        </label>

        <label>
          Emotional Symptoms:
          <input
            type="text"
            name="emotionalSymptoms"
            value={data.emotionalSymptoms || ''}
            onChange={handleInputChange}
            placeholder="Enter emotional symptoms"
          />
        </label>

        <label>
          Fear / Anxiety:
          <input
            type="text"
            name="fearAnxiety"
            value={data.fearAnxiety || ''}
            onChange={handleInputChange}
            placeholder="Enter fear or anxiety details"
          />
        </label>

        <label>
          Sleep Patterns:
          <input
            type="text"
            name="sleepPatterns"
            value={data.sleepPatterns || ''}
            onChange={handleInputChange}
            placeholder="Enter sleep patterns"
          />
        </label>

        <label>
          Other Mental Symptoms:
          <input
            type="text"
            name="otherMentalSymptoms"
            value={data.otherMentalSymptoms || ''}
            onChange={handleInputChange}
            placeholder="Enter other mental symptoms"
          />
        </label>
      </div>
    </div>
  );
};

export default MentalGenerals;
