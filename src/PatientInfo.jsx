import React from 'react';

const PatientInfo = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Patient Information</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={data.name || ''}
            onChange={handleInputChange}
            placeholder="Enter patient name"
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={data.age || ''}
            onChange={handleInputChange}
            placeholder="Enter age"
          />
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={data.gender || ''}
            onChange={handleInputChange}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={data.phone || ''}
            onChange={handleInputChange}
            placeholder="Enter phone number"
          />
        </label>

        <label>
          Address:
          <textarea
            name="address"
            value={data.address || ''}
            onChange={handleInputChange}
            placeholder="Enter address"
            rows={3}
            style={{ resize: 'vertical' }}
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={data.date || ''}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
};

export default PatientInfo;
