import React, { useState } from "react";
import PatientInfo from "./PatientInfo";
import FaceImageUpload from "./FaceImageUpload";

const CaseSheetForm = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
  });

  const [faceImage, setFaceImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(patientData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (faceImage) {
      formData.append("faceImage", faceImage);
    }

    try {
      const res = await fetch("/submit-case", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert("Case submitted successfully");
    } catch (err) {
      console.error(err);
      alert("Error submitting case");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="case-sheet-form">
      <PatientInfo patientData={patientData} setPatientData={setPatientData} />
      <FaceImageUpload setFaceImage={setFaceImage} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CaseSheetForm;
