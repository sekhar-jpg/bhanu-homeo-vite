import React, { useState } from 'react';
import axios from 'axios';

const CaseSheetForm = () => {
  const [form, setForm] = useState({
    patientInfo: {},
    chiefComplaints: {},
    pastHistory: {},
    familyHistory: {},
    personalHistory: {},
    mentalGenerals: {},
    miasmaticDiagnosis: {},
    clinicalDiagnosis: {},
    doctorObservations: {},
    prescriptionDetails: {},
  });
  const [faceImage, setFaceImage] = useState(null);

  const handleChange = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleImageChange = (e) => {
    setFaceImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('faceImage', faceImage);

    // Append all JSON sections as stringified data
    Object.keys(form).forEach((section) => {
      formData.append(section, JSON.stringify(form[section]));
    });

    try {
      const res = await axios.post('https://your-backend-url.com/submit-case', formData);
      alert(res.data.message);
    } catch (err) {
      console.error('❌ Submission Error:', err);
      alert('Failed to submit case');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Homeopathy Case Sheet</h2>

      {/* Patient Info */}
      <label>Patient Name</label>
      <input type="text" onChange={(e) => handleChange('patientInfo', 'name', e.target.value)} />

      <label>Age</label>
      <input type="text" onChange={(e) => handleChange('patientInfo', 'age', e.target.value)} />

      <label>Gender</label>
      <input type="text" onChange={(e) => handleChange('patientInfo', 'gender', e.target.value)} />

      {/* Chief Complaints */}
      <label>Chief Complaint</label>
      <input type="text" onChange={(e) => handleChange('chiefComplaints', 'complaint', e.target.value)} />

      {/* Past History */}
      <label>Past History</label>
      <input type="text" onChange={(e) => handleChange('pastHistory', 'history', e.target.value)} />

      {/* Family History */}
      <label>Family History</label>
      <input type="text" onChange={(e) => handleChange('familyHistory', 'history', e.target.value)} />

      {/* Personal History */}
      <label>Personal History</label>
      <input type="text" onChange={(e) => handleChange('personalHistory', 'details', e.target.value)} />

      {/* Mental Generals */}
      <label>Mental Symptoms</label>
      <input type="text" onChange={(e) => handleChange('mentalGenerals', 'mind', e.target.value)} />

      {/* Miasmatic Diagnosis */}
      <label>Miasm</label>
      <input type="text" onChange={(e) => handleChange('miasmaticDiagnosis', 'type', e.target.value)} />

      {/* Clinical Diagnosis */}
      <label>Clinical Diagnosis</label>
      <input type="text" onChange={(e) => handleChange('clinicalDiagnosis', 'diagnosis', e.target.value)} />

      {/* Doctor Observations */}
      <label>Observations</label>
      <input type="text" onChange={(e) => handleChange('doctorObservations', 'notes', e.target.value)} />

      {/* Prescription */}
      <label>Prescription</label>
      <input type="text" onChange={(e) => handleChange('prescriptionDetails', 'remedy', e.target.value)} />

      {/* Face Image */}
      <label>Upload Face Image</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      <button type="submit" style={{ marginTop: '20px' }}>Submit Case</button>
    </form>
  );
};

export default CaseSheetForm;
