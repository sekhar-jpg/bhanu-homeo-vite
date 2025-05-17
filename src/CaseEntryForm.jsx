import React, { useState } from 'react';

const CaseEntryForm = () => {
  const [formData, setFormData] = useState({
    // Basic Patient Info
    name: '',
    age: '',
    gender: '',
    maritalStatus: '',
    occupation: '',
    address: '',
    phoneWhatsApp: '',
    dateOfVisit: '',

    // Chief Complaints (array)
    complaints: [{ complaint: '', duration: '', description: '' }],

    // Other fields...
    historyPresentIllness: '',
    childhoodDiseases: '',
    surgeriesInjuries: '',
    majorIllnesses: '',
    familyHistory: '',
    appetite: '',
    cravingsAversions: '',
    thirst: '',
    bowelMovement: '',
    urine: '',
    sleep: '',
    dreams: '',
    sweat: '',
    thermalNature: '',
    habits: '',
    menstrualHistory: '',
    mentalSymptoms: '',
    generalRemarks: '',
    doctorObservations: '',

    // Prescriptions array
    prescriptions: [{ date: '', remedyName: '', potency: '', dose: '', instructions: '' }],

    // Face image file and preview URL
    faceImage: null,
    faceImagePreview: null,
  });

  // Basic input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Complaint handlers
  const handleComplaintChange = (index, e) => {
    const { name, value } = e.target;
    const newComplaints = [...formData.complaints];
    newComplaints[index][name] = value;
    setFormData((prev) => ({ ...prev, complaints: newComplaints }));
  };
  const addComplaint = () => {
    setFormData((prev) => ({
      ...prev,
      complaints: [...prev.complaints, { complaint: '', duration: '', description: '' }],
    }));
  };
  const removeComplaint = (index) => {
    const newComplaints = formData.complaints.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, complaints: newComplaints }));
  };

  // Prescription handlers
  const handlePrescriptionChange = (index, e) => {
    const { name, value } = e.target;
    const newPrescriptions = [...formData.prescriptions];
    newPrescriptions[index][name] = value;
    setFormData((prev) => ({ ...prev, prescriptions: newPrescriptions }));
  };
  const addPrescription = () => {
    setFormData((prev) => ({
      ...prev,
      prescriptions: [...prev.prescriptions, { date: '', remedyName: '', potency: '', dose: '', instructions: '' }],
    }));
  };
  const removePrescription = (index) => {
    const newPrescriptions = formData.prescriptions.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, prescriptions: newPrescriptions }));
  };

  // Handle image file input change for face image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        faceImage: file,
        faceImagePreview: URL.createObjectURL(file),
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // For demo, just log formData
    console.log('Form Data:', formData);

    // Example of preparing FormData if sending to backend
    /*
    const data = new FormData();
    data.append('faceImage', formData.faceImage);
    data.append('name', formData.name);
    // Append other fields similarly or stringify nested arrays/objects
    */

    alert('Form submitted! Check console.');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 900, margin: 'auto' }}>
      <h2>1. Basic Patient Information</h2>
      <label>
        Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />

      {/* Other fields like Age, Gender etc... */}

      {/* Chief Complaints */}
      <h2>2. Chief Complaints (Problem + Duration + Details)</h2>
      {formData.complaints.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10 }}>
          <label>
            Complaint:
            <input
              type="text"
              name="complaint"
              value={item.complaint}
              onChange={(e) => handleComplaintChange(index, e)}
              required
            />
          </label>
          {/* Duration, Description fields, Remove button */}
          {/* ... */}
          {formData.complaints.length > 1 && (
            <button type="button" onClick={() => removeComplaint(index)} style={{ color: 'red' }}>
              Remove Complaint
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addComplaint}>
        + Add Complaint
      </button>

      {/* Prescription section similarly */}

      {/* Face Image Upload */}
      <h2>Face Image Upload</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {formData.faceImagePreview && (
        <div style={{ marginTop: 10 }}>
          <img
            src={formData.faceImagePreview}
            alt="Face Preview"
            style={{ width: 200, height: 'auto', borderRadius: 8, border: '1px solid #ccc' }}
          />
          <br />
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                faceImage: null,
                faceImagePreview: null,
              }))
            }
            style={{ marginTop: 5 }}
          >
            Remove Image
          </button>
        </div>
      )}

      <hr />
      <button type="submit">Submit Case</button>
    </form>
  );
};

export default CaseEntryForm;
