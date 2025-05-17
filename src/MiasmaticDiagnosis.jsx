import React from 'react';

const MiasmaticDiagnosis = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>🌿 ఉక్కు నిర్ధారణ (Miasmatic Diagnosis)</h2>

      <label>మియాస్మ్ (Miasm):</label>
      <select name="miasm" value={data.miasm || ''} onChange={handleInputChange}>
        <option value="">ఎంచుకోండి</option>
        <option value="Psora">ప్సోరా</option>
        <option value="Sycosis">సైకోసిస్</option>
        <option value="Syphilis">సిఫిలిస్</option>
        <option value="Tubercular">ట్యూబర్క్యులిన్</option>
        <option value="Mixed">మిశ్రమం</option>
      </select>

      <label>లక్షణాలు / Symptoms:</label>
      <textarea
        name="symptoms"
        value={data.symptoms || ''}
        onChange={handleInputChange}
        placeholder="మియాస్మిక్ లక్షణాలు"
      />
    </div>
  );
};

export default MiasmaticDiagnosis;
