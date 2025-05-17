import React, { useState } from 'react';
import PatientInfo from './PatientInfo';
import ChiefComplaints from './ChiefComplaints';
import PastHistory from './PastHistory';
import FamilyHistory from './FamilyHistory';
import PersonalHistory from './PersonalHistory';
import MentalGenerals from './MentalGenerals';
import MiasmaticDiagnosis from './MiasmaticDiagnosis';
import ClinicalDiagnosis from './ClinicalDiagnosis';
import DoctorObservations from './DoctorObservations';
import FaceImageUpload from './FaceImageUpload';
import PrescriptionDetails from './PrescriptionDetails';

const CaseEntryForm = () => {
  const [formData, setFormData] = useState({
    patientInfo: {},
    chiefComplaints: {},
    pastHistory: {},
    familyHistory: {},
    personalHistory: {},
    mentalGenerals: {},
    miasmaticDiagnosis: {},
    clinicalDiagnosis: {},
    doctorObservations: {},
    faceImage: null,
    prescriptionDetails: {}
  });

  const updateSection = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleImageChange = (imageFile) => {
    setFormData(prev => ({
      ...prev,
      faceImage: imageFile
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      if (formData.faceImage) {
        formDataToSend.append('faceImage', formData.faceImage);
      }

      for (const section in formData) {
        if (section !== 'faceImage') {
          formDataToSend.append(section, JSON.stringify(formData[section]));
        }
      }

      const response = await fetch('/submit-case', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        alert('Case submitted successfully!');
        // Optional: Reset form here if needed
        // setFormData({...}); // reset to initial state
      } else {
        alert('Submission failed: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      alert('Error submitting case: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 900, margin: 'auto', padding: 20 }}>
      <PatientInfo data={formData.patientInfo} onChange={data => updateSection('patientInfo', data)} />
      <ChiefComplaints data={formData.chiefComplaints} onChange={data => updateSection('chiefComplaints', data)} />
      <PastHistory data={formData.pastHistory} onChange={data => updateSection('pastHistory', data)} />
      <FamilyHistory data={formData.familyHistory} onChange={data => updateSection('familyHistory', data)} />
      <PersonalHistory data={formData.personalHistory} onChange={data => updateSection('personalHistory', data)} />
      <MentalGenerals data={formData.mentalGenerals} onChange={data => updateSection('mentalGenerals', data)} />
      <MiasmaticDiagnosis data={formData.miasmaticDiagnosis} onChange={data => updateSection('miasmaticDiagnosis', data)} />
      <ClinicalDiagnosis data={formData.clinicalDiagnosis} onChange={data => updateSection('clinicalDiagnosis', data)} />
      <DoctorObservations data={formData.doctorObservations} onChange={data => updateSection('doctorObservations', data)} />
      <FaceImageUpload onImageChange={handleImageChange} />
      <PrescriptionDetails data={formData.prescriptionDetails} onChange={data => updateSection('prescriptionDetails', data)} />

      <button type="submit" style={{ marginTop: 20, padding: '12px 24px', fontSize: '16px' }}>
        Submit Case
      </button>
    </form>
  );
};

export default CaseEntryForm;
