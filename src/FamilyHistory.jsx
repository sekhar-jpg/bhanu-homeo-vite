import React from 'react';

const FamilyHistory = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>👪 కుటుంబ చరిత్ర (Family History)</h2>

      <label>కుటుంబ వ్యాధులు / Family Illnesses:</label>
      <textarea
        name="familyIllnesses"
        value={data.familyIllnesses || ''}
        onChange={handleInputChange}
        placeholder="కుటుంబ వ్యాధుల వివరాలు"
      />
    </div>
  );
};

export default FamilyHistory;
