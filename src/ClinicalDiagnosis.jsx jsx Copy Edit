import React from 'react';

const ClinicalDiagnosis = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>🏥 రోగ నిర్ధారణ (Clinical Diagnosis)</h2>

      <label>మూల రోగం / Primary Disease:</label>
      <input
        type="text"
        name="primaryDisease"
        value={data.primaryDisease || ''}
        onChange={handleInputChange}
        placeholder="మూల రోగం"
      />

      <label>అనుబంధ లక్షణాలు / Associated Symptoms:</label>
      <textarea
        name="associatedSymptoms"
        value={data.associatedSymptoms || ''}
        onChange={handleInputChange}
        placeholder="అనుబంధ లక్షణాలు"
      />
    </div>
  );
};

export default ClinicalDiagnosis;
