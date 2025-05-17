import React from 'react';

const PatientInfo = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Patient Information</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          value={data.name || ''}
          onChange={handleInputChange}
          placeholder="Patient Name"
        />

        <input
          type="number"
          name="age"
          value={data.age || ''}
          onChange={handleInputChange}
          placeholder="Age"
        />

        <select
          name="gender"
          value={data.gender || ''}
          onChange={handleInputChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="tel"
          name="phone"
          value={data.phone || ''}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />

        <textarea
          name="address"
          value={data.address || ''}
          onChange={handleInputChange}
          placeholder="Address"
        />

        <input
          type="date"
          name="date"
          value={data.date || ''}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default PatientInfo;
