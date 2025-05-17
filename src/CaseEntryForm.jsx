import React, { useState } from 'react';

const CaseEntryForm = () => {
  const [formData, setFormData] = useState({
    name: '', age: '', gender: '', maritalStatus: '', occupation: '', address: '', phoneWhatsApp: '', dateOfVisit: '',
    complaints: [{ complaint: '', duration: '', description: '' }],
    historyPresentIllness: '',
    childhoodDiseases: '', surgeriesInjuries: '', majorIllnesses: '',
    familyHistory: '',
    appetite: '', cravingsAversions: '', thirst: '', bowelMovement: '', urine: '', sleep: '', dreams: '', sweat: '', thermalNature: '', habits: '', menstrualHistory: '',
    mentalSymptoms: '', generalRemarks: '', doctorObservations: '',
    prescriptions: [{ date: '', remedyName: '', potency: '', dose: '', instructions: '' }],
    faceImage: null, faceImagePreview: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleComplaintChange = (index, e) => {
    const { name, value } = e.target;
    const newComplaints = [...formData.complaints];
    newComplaints[index][name] = value;
    setFormData(prev => ({ ...prev, complaints: newComplaints }));
  };

  const addComplaint = () => {
    setFormData(prev => ({
      ...prev,
      complaints: [...prev.complaints, { complaint: '', duration: '', description: '' }],
    }));
  };

  const removeComplaint = (index) => {
    const newComplaints = formData.complaints.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, complaints: newComplaints }));
  };

  const handlePrescriptionChange = (index, e) => {
    const { name, value } = e.target;
    const newPrescriptions = [...formData.prescriptions];
    newPrescriptions[index][name] = value;
    setFormData(prev => ({ ...prev, prescriptions: newPrescriptions }));
  };

  const addPrescription = () => {
    setFormData(prev => ({
      ...prev,
      prescriptions: [...prev.prescriptions, { date: '', remedyName: '', potency: '', dose: '', instructions: '' }],
    }));
  };

  const removePrescription = (index) => {
    const newPrescriptions = formData.prescriptions.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, prescriptions: newPrescriptions }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          faceImage: file,
          faceImagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted! Check console for data.');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 900, margin: 'auto' }}>
      <h2>1. Basic Patient Information</h2>
      <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label><br />
      <label>Age: <input type="number" name="age" value={formData.age} onChange={handleChange} required min="0" /></label>
      <label style={{ marginLeft: 20 }}>Gender:
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label><br />
      <label>Marital Status: <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} /></label><br />
      <label>Occupation: <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} /></label><br />
      <label>Address: <textarea name="address" value={formData.address} onChange={handleChange} rows={2} /></label><br />
      <label>Phone / WhatsApp: <input type="tel" name="phoneWhatsApp" value={formData.phoneWhatsApp} onChange={handleChange} /></label><br />
      <label>Date of Visit: <input type="date" name="dateOfVisit" value={formData.dateOfVisit} onChange={handleChange} /></label>
      <hr />

      <h2>2. Chief Complaints</h2>
      {formData.complaints.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10 }}>
          <label>Complaint:
            <input type="text" name="complaint" value={item.complaint} onChange={(e) => handleComplaintChange(index, e)} required />
          </label><br />
          <label>Duration:
            <input type="text" name="duration" value={item.duration} onChange={(e) => handleComplaintChange(index, e)} required />
          </label><br />
          <label>Description:
            <textarea name="description" value={item.description} onChange={(e) => handleComplaintChange(index, e)} rows={2} required />
          </label><br />
          {formData.complaints.length > 1 && <button type="button" onClick={() => removeComplaint(index)} style={{ color: 'red' }}>Remove</button>}
        </div>
      ))}
      <button type="button" onClick={addComplaint}>+ Add Complaint</button>
      <hr />

      <h2>Face Image Upload</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {formData.faceImagePreview && (
        <div style={{ marginTop: 10 }}>
          <img src={formData.faceImagePreview} alt="Face Preview" style={{ width: 200, height: 'auto', borderRadius: 8, border: '1px solid #ccc' }} /><br />
          <button type="button" onClick={() => setFormData(prev => ({ ...prev, faceImage: null, faceImagePreview: null }))} style={{ marginTop: 5 }}>Remove Image</button>
        </div>
      )}

      <hr />
      <button type="submit">Submit Case</button>
    </form>
  );
};

export default CaseEntryForm;
