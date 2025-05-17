import React from 'react';

const DoctorObservations = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
      <h2 style={{ borderBottom: '1px solid #000' }}>👨‍⚕️ వైద్య పరిశీలన (Doctor's Observations)</h2>

      <label>పేషెంట్ పరిస్థితి / Patient Condition:</label>
      <textarea
        name="patientCondition"
        value={data.patientCondition || ''}
        onChange={handleInputChange}
        placeholder="పేషెంట్ పరిస్థితి"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>అనుకోలేని పరిణామాలు / Unexpected Reactions:</label>
      <textarea
        name="unexpectedReactions"
        value={data.unexpectedReactions || ''}
        onChange={handleInputChange}
        placeholder="అనుకోలేని పరిణామాలు"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>ఇతర సూచనలు / Other Notes:</label>
      <textarea
        name="otherNotes"
        value={data.otherNotes || ''}
        onChange={handleInputChange}
        placeholder="ఇతర సూచనలు"
        style={{ width: '100%', marginBottom: '10px' }}
      />
    </div>
  );
};

export default DoctorObservations;
