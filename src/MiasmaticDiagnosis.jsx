import React from 'react';

const MiasmaticDiagnosis = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Miasmatic Diagnosis</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Psora:
          <input
            type="text"
            name="psora"
            value={data.psora || ''}
            onChange={handleInputChange}
            placeholder="Enter Psora details"
          />
        </label>

        <label>
          Sycosis:
          <input
            type="text"
            name="sycosis"
            value={data.sycosis || ''}
            onChange={handleInputChange}
            placeholder="Enter Sycosis details"
          />
        </label>

        <label>
          Syphilis:
          <input
            type="text"
            name="syphilis"
            value={data.syphilis || ''}
            onChange={handleInputChange}
            placeholder="Enter Syphilis details"
          />
        </label>

        <label>
          Tubercular:
          <input
            type="text"
            name="tubercular"
            value={data.tubercular || ''}
            onChange={handleInputChange}
            placeholder="Enter Tubercular details"
          />
        </label>

        <label>
          Cancer:
          <input
            type="text"
            name="cancer"
            value={data.cancer || ''}
            onChange={handleInputChange}
            placeholder="Enter Cancer details"
          />
        </label>
      </div>
    </div>
  );
};

export default MiasmaticDiagnosis;
