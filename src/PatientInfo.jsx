import React from 'react';

const PatientInfo = ({ data = {}, onChange }) => {

  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>👤 Patient Information</h2>

      <label>Patient Name / పేరు:</label>
      <input
        type="text"
        name="name"
        value={data.name || ''}
        onChange={handleInputChange}
        placeholder="Enter patient name"
      />

      <label>Age / వయస్సు:</label>
      <input
        type="number"
        name="age"
        value={data.age || ''}
        onChange={handleInputChange}
        placeholder="Enter age"
      />

      <label>Gender / లింగం:</label>
      <select name="gender" value={data.gender || ''} onChange={handleInputChange}>
        <option value="">Select gender</option>
        <option value="Male">Male / పురుషుడు</option>
        <option value="Female">Female / స్త్రీ</option>
        <option value="Other">Other / ఇతరులు</option>
      </select>

      <label>Phone Number / ఫోన్ నెంబర్:</label>
      <input
        type="tel"
        name="phone"
        value={data.phone || ''}
        onChange={handleInputChange}
        placeholder="Enter phone number"
      />

      <label>Address / చిరునామా:</label>
      <textarea
        name="address"
        value={data.address || ''}
        onChange={handleInputChange}
        placeholder="Enter address"
      />

      <label>Date / తేదీ:</label>
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
