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
import PrescriptionDetails from './PrescriptionDetails';
import FaceImageUpload from './FaceImageUpload';

const CaseEntryForm = () => {
  const [patientInfo, setPatientInfo] = useState({});
  const [chiefComplaints, setChiefComplaints] = useState({});
  const [pastHistory, setPastHistory] = useState({});
  const [familyHistory, setFamilyHistory] = useState({});
  const [personalHistory, setPersonalHistory] = useState({});
  const [mentalGenerals, setMentalGenerals] = useState({});
  const [miasmaticDiagnosis, setMiasmaticDiagnosis] = useState({});
  const [clinicalDiagnosis, setClinicalDiagnosis] = useState({});
  const [doctorObservations, setDoctorObservations] = useState({});
  const [prescriptionDetails, setPrescriptionDetails] = useState({});
  const [faceImage, setFaceImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('patientInfo', JSON.stringify(patientInfo));
    formData.append('chiefComplaints', JSON.stringify(chiefComplaints));
    formData.append('pastHistory', JSON.stringify(pastHistory));
    formData.append('familyHistory', JSON.stringify(familyHistory));
    formData.append('personalHistory', JSON.stringify(personalHistory));
    formData.append('mentalGenerals', JSON.stringify(mentalGenerals));
    formData.append('miasmaticDiagnosis', JSON.stringify(miasmaticDiagnosis));
    formData.append('clinicalDiagnosis', JSON.stringify(clinicalDiagnosis));
    formData.append('doctorObservations', JSON.stringify(doctorObservations));
    formData.append('prescriptionDetails', JSON.stringify(prescriptionDetails));
    if (faceImage) {
      formData.append('faceImage', faceImage);
    }

    try {
      const response = await fetch('https://your-backend-url/submit-case', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert('✅ Case submitted successfully');
      } else {
        alert(`❌ Failed: ${result.message}`);
      }
    } catch (error) {
      console.error('❌ Error submitting case:', error);
      alert('❌ Error submitting case');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Homeopathy Case Sheet</h2>
      <PatientInfo onChange={setPatientInfo} />
      <ChiefComplaints onChange={setChiefComplaints} />
      <PastHistory onChange={setPastHistory} />
      <FamilyHistory onChange={setFamilyHistory} />
      <PersonalHistory onChange={setPersonalHistory} />
      <MentalGenerals onChange={setMentalGenerals} />
      <MiasmaticDiagnosis onChange={setMiasmaticDiagnosis} />
      <ClinicalDiagnosis onChange={setClinicalDiagnosis} />
      <DoctorObservations onChange={setDoctorObservations} />
      <PrescriptionDetails onChange={setPrescriptionDetails} />
      <FaceImageUpload onChange={setFaceImage} />

      <button type="submit">Submit Case</button>
    </form>
  );
};

export default CaseEntryForm;
