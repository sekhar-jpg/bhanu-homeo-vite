import React, { useState } from 'react';

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
    // Add your form submission logic here
  };

  return (
    <div>
      <h2>Case Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Patient Name" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <input name="gender" placeholder="Gender" onChange={handleChange} />
        <input name="contact" placeholder="Contact Number" onChange={handleChange} />
        <input name="mind" placeholder="మనోవ్యవస్థ" onChange={handleChange} />
        <input name="generals" placeholder="సాధారణ లక్షణాలు" onChange={handleChange} />
        <input name="thermal" placeholder="ఉష్ణత తత్వం" onChange={handleChange} />
        <input name="thirst" placeholder="దాహం" onChange={handleChange} />
        <input name="cravings" placeholder="ఇష్టపడే పదార్థాలు" onChange={handleChange} />
        <input name="aversions" placeholder="ద్వేషించేవి" onChange={handleChange} />
        <input name="modalities" placeholder="మోడాలిటీస్ (Better/Worse)" onChange={handleChange} />
        <input name="generalsModalities" placeholder="సాధారణ మోడాలిటీస్" onChange={handleChange} />
        <input name="pastHistory" placeholder="గత చరిత్ర" onChange={handleChange} />
        <input name="familyHistory" placeholder="కుటుంబ చరిత్ర" onChange={handleChange} />
        <input name="diagnosis" placeholder="రోగ నిర్ధారణ" onChange={handleChange} />
        <input name="remedy" placeholder="ఔషధం" onChange={handleChange} />
        <input name="followUpDate" placeholder="Follow Up Date" type="date" onChange={handleChange} />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CaseEntryForm;
