import React from 'react';

const FamilyHistory = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Family History</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Family Diseases:
          <input
            type="text"
            name="familyDiseases"
            value={data.familyDiseases || ''}
            onChange={handleInputChange}
            placeholder="Enter known family diseases"
          />
        </label>

        <label>
          Hereditary Conditions:
          <input
            type="text"
            name="hereditaryConditions"
            value={data.hereditaryConditions || ''}
            onChange={handleInputChange}
            placeholder="Enter hereditary conditions"
          />
        </label>

        <label>
          Mental Illness History:
          <input
            type="text"
            name="mentalIllnessHistory"
            value={data.mentalIllnessHistory || ''}
            onChange={handleInputChange}
            placeholder="Enter mental illness history"
          />
        </label>

        <label>
          Other Relevant History:
          <input
            type="text"
            name="otherHistory"
            value={data.otherHistory || ''}
            onChange={handleInputChange}
            placeholder="Enter other family history"
          />
        </label>
      </div>
    </div>
  );
};

export default FamilyHistory;
