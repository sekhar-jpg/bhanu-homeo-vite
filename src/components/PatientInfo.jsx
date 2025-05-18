import React from "react";

const PatientInfo = ({ patientData, setPatientData }) => {
  const handleChange = (e) => {
    setPatientData({
      ...patientData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="patient-info">
      <h2>Patient Details</h2>
      <input type="text" name="name" placeholder="Name" value={patientData.name} onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" value={patientData.age} onChange={handleChange} />
      <input type="text" name="gender" placeholder="Gender" value={patientData.gender} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone Number" value={patientData.phone} onChange={handleChange} />
      <textarea name="address" placeholder="Address" value={patientData.address} onChange={handleChange}></textarea>
    </div>
  );
};

export default PatientInfo;
