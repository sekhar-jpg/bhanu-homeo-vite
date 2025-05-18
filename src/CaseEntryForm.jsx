// CaseEntryForm.jsx
import React, { useState } from "react";
import PatientInfo from "./PatientInfo";
import ChiefComplaints from "./ChiefComplaints";
import PastHistory from "./PastHistory";
import FamilyHistory from "./FamilyHistory";
import PersonalHistory from "./PersonalHistory";
import MentalGenerals from "./MentalGenerals";
import MiasmaticDiagnosis from "./MiasmaticDiagnosis";
import ClinicalDiagnosis from "./ClinicalDiagnosis";
import DoctorObservations from "./DoctorObservations";
import PrescriptionDetails from "./PrescriptionDetails";
import FaceImageUpload from "./FaceImageUpload";
import axios from "axios";

const CaseEntryForm = ({ onCaseSubmitted }) => {
  const [formData, setFormData] = useState({
    patientInfo: {},
    chiefComplaints: [],
    pastHistory: "",
    familyHistory: "",
    personalHistory: "",
    mentalGenerals: "",
    miasmaticDiagnosis: "",
    clinicalDiagnosis: "",
    doctorObservations: "",
    prescriptionDetails: {},
    faceImage: null,
  });

  const handleFormChange = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleImageChange = (imageFile) => {
    setFormData((prev) => ({
      ...prev,
      faceImage: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submissionData = new FormData();
    for (const key in formData) {
      if (key === "faceImage" && formData[key]) {
        submissionData.append("faceImage", formData[key]);
      } else {
        submissionData.append(key, JSON.stringify(formData[key]));
      }
    }
    try {
      await axios.post("/api/cases", submissionData);
      alert("Case submitted successfully");
      if(onCaseSubmitted) onCaseSubmitted(); // to refresh list after submit
    } catch (error) {
      console.error(error);
      alert("Failed to submit case");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 700, margin: "auto" }}>
      <h2>Homeopathy Case Sheet</h2>
      <PatientInfo onChange={(data) => handleFormChange("patientInfo", data)} />
      <ChiefComplaints onChange={(data) => handleFormChange("chiefComplaints", data)} />
      <PastHistory onChange={(data) => handleFormChange("pastHistory", data)} />
      <FamilyHistory onChange={(data) => handleFormChange("familyHistory", data)} />
      <PersonalHistory onChange={(data) => handleFormChange("personalHistory", data)} />
      <MentalGenerals onChange={(data) => handleFormChange("mentalGenerals", data)} />
      <MiasmaticDiagnosis onChange={(data) => handleFormChange("miasmaticDiagnosis", data)} />
      <ClinicalDiagnosis onChange={(data) => handleFormChange("clinicalDiagnosis", data)} />
      <DoctorObservations onChange={(data) => handleFormChange("doctorObservations", data)} />
      <PrescriptionDetails onChange={(data) => handleFormChange("prescriptionDetails", data)} />
      <FaceImageUpload onChange={handleImageChange} />
      <button type="submit">Submit Case</button>
    </form>
  );
};

export default CaseEntryForm;
