import React from 'react';

const PatientInfo = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ marginBottom: 20, padding: 16, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Patient Information</h2>

      <label>Patient Name:</label>
      <input
        type="text"
        name="name"
        value={data.name || ''}
        onChange={handleInputChange}
        placeholder="Enter patient name"
      />

      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={data.age || ''}
        onChange={handleInputChange}
        placeholder="Enter age"
      />

      <label>Gender:</label>
      <select name="gender" value={data.gender || ''} onChange={handleInputChange}>
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label>Phone Number:</label>
      <input
        type="tel"
        name="phone"
        value={data.phone || ''}
        onChange={handleInputChange}
        placeholder="Enter phone number"
      />

      <label>Address:</label>
      <textarea
        name="address"
        value={data.address || ''}
        onChange={handleInputChange}
        placeholder="Enter address"
      />

      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={data.date || ''}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PatientInfo;
