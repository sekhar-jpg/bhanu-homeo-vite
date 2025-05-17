import React from 'react';

const PersonalHistory = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>🧍 వ్యక్తిగత చరిత్ర (Personal History)</h2>

      <label>ఆహారం / Diet:</label>
      <input
        type="text"
        name="diet"
        value={data.diet || ''}
        onChange={handleInputChange}
        placeholder="ఆహారం వివరాలు"
      />

      <label>పానీయాలు / Drinks:</label>
      <input
        type="text"
        name="drinks"
        value={data.drinks || ''}
        onChange={handleInputChange}
        placeholder="పానీయాలు వివరాలు"
      />

      <label>ఆచారాలు / Habits:</label>
      <textarea
        name="habits"
        value={data.habits || ''}
        onChange={handleInputChange}
        placeholder="ఆచారాలు వివరాలు"
      />
    </div>
  );
};

export default PersonalHistory;
