import React from 'react';

const PrescriptionDetails = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
      <h2 style={{ borderBottom: '1px solid #000' }}>💊 ఔషధ వివరాలు (Prescription Details)</h2>

      <label>ఔషధం / Medicine Name:</label>
      <input
        type="text"
        name="medicineName"
        value={data.medicineName || ''}
        onChange={handleInputChange}
        placeholder="ఔషధం పేరు"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>మాత్ర & పద్ధతి / Dose & Method:</label>
      <textarea
        name="doseMethod"
        value={data.doseMethod || ''}
        onChange={handleInputChange}
        placeholder="మాత్ర & పద్ధతి"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>మళ్ళీ ఇవ్వాలి / Repeat:</label>
      <input
        type="text"
        name="repeat"
        value={data.repeat || ''}
        onChange={handleInputChange}
        placeholder="రిపీట్ వివరాలు"
        style={{ width: '100%', marginBottom: '10px' }}
      />
    </div>
  );
};

export default PrescriptionDetails;
