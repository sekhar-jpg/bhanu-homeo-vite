import React from 'react';

const ChiefComplaints = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Chief Complaints</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Main Complaint:
          <input
            type="text"
            name="mainComplaint"
            value={data.mainComplaint || ''}
            onChange={handleInputChange}
            placeholder="Enter main complaint"
          />
        </label>

        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={data.duration || ''}
            onChange={handleInputChange}
            placeholder="Duration of complaint"
          />
        </label>

        <label>
          Severity:
          <input
            type="text"
            name="severity"
            value={data.severity || ''}
            onChange={handleInputChange}
            placeholder="Severity of complaint"
          />
        </label>

        <label>
          Aggravating Factors:
          <textarea
            name="aggravatingFactors"
            value={data.aggravatingFactors || ''}
            onChange={handleInputChange}
            placeholder="What makes it worse?"
            rows={3}
            style={{ resize: 'vertical' }}
          />
        </label>

        <label>
          Relieving Factors:
          <textarea
            name="relievingFactors"
            value={data.relievingFactors || ''}
            onChange={handleInputChange}
            placeholder="What makes it better?"
            rows={3}
            style={{ resize: 'vertical' }}
          />
        </label>
      </div>
    </div>
  );
};

export default ChiefComplaints;
