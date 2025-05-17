import React from 'react';

const ClinicalDiagnosis = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Clinical Diagnosis</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Primary Diagnosis:
          <input
            type="text"
            name="primaryDiagnosis"
            value={data.primaryDiagnosis || ''}
            onChange={handleInputChange}
            placeholder="Enter primary diagnosis"
          />
        </label>

        <label>
          Secondary Diagnosis:
          <input
            type="text"
            name="secondaryDiagnosis"
            value={data.secondaryDiagnosis || ''}
            onChange={handleInputChange}
            placeholder="Enter secondary diagnosis"
          />
        </label>

        <label>
          Diagnosis Notes:
          <textarea
            name="diagnosisNotes"
            value={data.diagnosisNotes || ''}
            onChange={handleInputChange}
            placeholder="Additional notes"
            rows={4}
            style={{ resize: 'vertical' }}
          />
        </label>
      </div>
    </div>
  );
};

export default ClinicalDiagnosis;
