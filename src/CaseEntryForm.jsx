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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting full case data:', formData);
    // Your submit logic here, e.g., send to backend for AI analysis & saving
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

      {/* Doctor Observations come BEFORE Prescription */}
      <DoctorObservations data={formData.doctorObservations} onChange={data => updateSection('doctorObservations', data)} />

      {/* Face image upload is before Prescription & AI analysis */}
      <FaceImageUpload onImageChange={handleImageChange} />

      {/* Prescription is LAST */}
      <PrescriptionDetails data={formData.prescriptionDetails} onChange={data => updateSection('prescriptionDetails', data)} />

      <button type="submit" style={{ marginTop: 20, padding: '12px 24px', fontSize: '16px' }}>
        Submit Case
      </button>
    </form>
  );
};

export default CaseEntryForm;
