import React, { useState } from 'react';
import './CaseEntryForm.css'; // CSS file for styling

const CaseEntryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    mind: '',
    generals: '',
    thermal: '',
    thirst: '',
    cravings: '',
    aversions: '',
    modalities: '',
    generalsModalities: '',
    pastHistory: '',
    familyHistory: '',
    diagnosis: '',
    remedy: '',
    followUpDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
  };

  return (
    <div className="case-form-container">
      <h2>📝 Bhanu Homeopathy Case Entry</h2>
      <form onSubmit={handleSubmit} className="case-form">
        <label>Patient Name</label>
        <input name="name" onChange={handleChange} />

        <label>Age</label>
        <input name="age" onChange={handleChange} />

        <label>Gender</label>
        <input name="gender" onChange={handleChange} />

        <label>Contact Number</label>
        <input name="contact" onChange={handleChange} />

        <label>మనోవ్యవస్థ</label>
        <textarea name="mind" onChange={handleChange} />

        <label>సాధారణ లక్షణాలు</label>
        <textarea name="generals" onChange={handleChange} />

        <label>ఉష్ణత తత్వం</label>
        <input name="thermal" onChange={handleChange} />

        <label>దాహం</label>
        <input name="thirst" onChange={handleChange} />

        <label>ఇష్టపడే పదార్థాలు</label>
        <input name="cravings" onChange={handleChange} />

        <label>ద్వేషించేవి</label>
        <input name="aversions" onChange={handleChange} />

        <label>మోడాలిటీస్ (Better/Worse)</label>
        <textarea name="modalities" onChange={handleChange} />

        <label>సాధారణ మోడాలిటీస్</label>
        <textarea name="generalsModalities" onChange={handleChange} />

        <label>గత చరిత్ర</label>
        <textarea name="pastHistory" onChange={handleChange} />

        <label>కుటుంబ చరిత్ర</label>
        <textarea name="familyHistory" onChange={handleChange} />

        <label>రోగ నిర్ధారణ</label>
        <input name="diagnosis" onChange={handleChange} />

        <label>ఔషధం</label>
        <input name="remedy" onChange={handleChange} />

        <label>Follow-Up Date (dd/mm/yyyy)</label>
        <input type="date" name="followUpDate" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CaseEntryForm;
