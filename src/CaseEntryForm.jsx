import React, { useState } from 'react';
import PatientInfo from './PatientInfo';
import ChiefComplaints from './ChiefComplaints';
import PastHistory from './PastHistory';
import FamilyHistory from './FamilyHistory';
import PersonalHistory from './PersonalHistory';
import MentalGenerals from './MentalGenerals';
import MiasmaticDiagnosis from './MiasmaticDiagnosis';
import ClinicalDiagnosis from './ClinicalDiagnosis';
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
    prescriptionDetails: {}
  });

  const updateSection = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting full case data:', formData);
    // Your submit logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <PatientInfo data={formData.patientInfo} onChange={data => updateSection('patientInfo', data)} />
      <ChiefComplaints data={formData.chiefComplaints} onChange={data => updateSection('chiefComplaints', data)} />
      <PastHistory data={formData.pastHistory} onChange={data => updateSection('pastHistory', data)} />
      <FamilyHistory data={formData.familyHistory} onChange={data => updateSection('familyHistory', data)} />
      <PersonalHistory data={formData.personalHistory} onChange={data => updateSection('personalHistory', data)} />
      <MentalGenerals data={formData.mentalGenerals} onChange={data => updateSection('mentalGenerals', data)} />
      <MiasmaticDiagnosis data={formData.miasmaticDiagnosis} onChange={data => updateSection('miasmaticDiagnosis', data)} />
      <ClinicalDiagnosis data={formData.clinicalDiagnosis} onChange={data => updateSection('clinicalDiagnosis', data)} />
      <PrescriptionDetails data={formData.prescriptionDetails} onChange={data => updateSection('prescriptionDetails', data)} />

      <button type="submit">Submit Case</button>
    </form>
  );
};

export default CaseEntryForm;
