import React from 'react';

const ChiefComplaints = ({ data = {}, onChange }) => {
  const handleInputChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>🔷 సాధారణ లక్షణాలు (Chief Complaints)</h2>

      <label>లక్షణాలు / Symptoms:</label>
      <textarea
        name="symptoms"
        value={data.symptoms || ''}
        onChange={handleInputChange}
        placeholder="లక్షణాలు వివరించండి"
      />

      <label>ఉష్ణత తత్వం (Thermal reaction):</label>
      <select name="thermal" value={data.thermal || ''} onChange={handleInputChange}>
        <option value="">ఎంచుకోండి</option>
        <option value="Warm">ఉష్ణత</option>
        <option value="Cold">చల్లగా</option>
        <option value="Normal">సాధారణం</option>
      </select>

      <label>దాహం (Thirst):</label>
      <select name="thirst" value={data.thirst || ''} onChange={handleInputChange}>
        <option value="">ఎంచుకోండి</option>
        <option value="Increased">అధిక</option>
        <option value="Decreased">తక్కువ</option>
        <option value="Normal">సాధారణం</option>
      </select>

      <label>ఇష్టపడే పదార్థాలు (Likes):</label>
      <input
        type="text"
        name="likes"
        value={data.likes || ''}
        onChange={handleInputChange}
        placeholder="ఇష్టపడే పదార్థాలు"
      />

      <label>ద్వేషించేవి (Dislikes):</label>
      <input
        type="text"
        name="dislikes"
        value={data.dislikes || ''}
        onChange={handleInputChange}
        placeholder="ద్వేషించేవి"
      />

      <label>మోడాలిటీస్ (Better/Worse):</label>
      <textarea
        name="modalities"
        value={data.modalities || ''}
        onChange={handleInputChange}
        placeholder="మోడాలిటీస్ వివరించండి"
      />
    </div>
  );
};

export default ChiefComplaints;
