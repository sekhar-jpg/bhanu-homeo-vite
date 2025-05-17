import React from 'react';

const PastHistory = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>📜 గత చరిత్ర (Past History)</h2>

      <label>గత వ్యాధులు / Past Illnesses:</label>
      <textarea
        name="pastIllnesses"
        value={data.pastIllnesses || ''}
        onChange={handleInputChange}
        placeholder="గత వ్యాధుల వివరాలు"
      />

      <label>ఆపరేషన్లు / Surgeries:</label>
      <textarea
        name="surgeries"
        value={data.surgeries || ''}
        onChange={handleInputChange}
        placeholder="ఆపరేషన్ల వివరాలు"
      />
    </div>
  );
};

export default PastHistory;
