import React from 'react';

const MentalGenerals = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>🧠 మనోవ్యవస్థ (Mental Generals)</h2>

      <label>భావోద్వేగాలు / Emotions:</label>
      <textarea
        name="emotions"
        value={data.emotions || ''}
        onChange={handleInputChange}
        placeholder="భావోద్వేగాల వివరాలు"
      />

      <label>మతిమరుపు / Memory:</label>
      <textarea
        name="memory"
        value={data.memory || ''}
        onChange={handleInputChange}
        placeholder="మతిమరుపు వివరాలు"
      />

      <label>భయం / Fears:</label>
      <textarea
        name="fears"
        value={data.fears || ''}
        onChange={handleInputChange}
        placeholder="భయాలు వివరాలు"
      />
    </div>
  );
};

export default MentalGenerals;
