import React from 'react';

const PastHistory = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Past History</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Past Illnesses:
          <textarea
            name="pastIllnesses"
            value={data.pastIllnesses || ''}
            onChange={handleInputChange}
            placeholder="Describe previous illnesses"
            rows={3}
          />
        </label>

        <label>
          Past Surgeries:
          <textarea
            name="pastSurgeries"
            value={data.pastSurgeries || ''}
            onChange={handleInputChange}
            placeholder="List any surgeries"
            rows={2}
          />
        </label>

        <label>
          Allergies:
          <textarea
            name="allergies"
            value={data.allergies || ''}
            onChange={handleInputChange}
            placeholder="Mention any allergies"
            rows={2}
          />
        </label>

        <label>
          Hospitalizations:
          <textarea
            name="hospitalizations"
            value={data.hospitalizations || ''}
            onChange={handleInputChange}
            placeholder="Past hospital admissions"
            rows={2}
          />
        </label>
      </div>
    </div>
  );
};

export default PastHistory;
