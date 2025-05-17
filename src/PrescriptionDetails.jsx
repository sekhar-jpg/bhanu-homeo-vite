import React from 'react';

const PrescriptionDetails = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>💊 ఔషధం (Prescription)</h2>

      <label>ఔషధ పేరు / Medicine Name:</label>
      <input
        type="text"
        name="medicineName"
        value={data.medicineName || ''}
        onChange={handleInputChange}
        placeholder="ఔషధం పేరు"
      />

      <label>మాత్ర & పద్ధతి / Dose & Method:</label>
      <textarea
        name="doseMethod"
        value={data.doseMethod || ''}
