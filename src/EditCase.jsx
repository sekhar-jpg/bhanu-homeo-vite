// EditCase.jsx
import React, { useState } from "react";
import CaseEntryForm from "./CaseEntryForm";
import axios from "axios";

const EditCase = ({ existingCase, onClose, onUpdated }) => {
  const [formData, setFormData] = useState(existingCase);

  const handleFormChange = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/cases/${existingCase._id}`, formData);
      alert("Case updated");
      if (onUpdated) onUpdated();
      if (onClose) onClose();
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  return (
    <div>
      <h2>Edit Case</h2>
      <form onSubmit={handleSubmit}>
        {/* Use all fields like CaseEntryForm, but pass existing data */}
        {/* Here you can reuse CaseEntryForm as a controlled form if modified for edit mode */}
        {/* Or implement editing logic inside this component */}
        {/* For simplicity, you can re-use CaseEntryForm by adding props support */}
        {/* Placeholder: */}
        {/* <CaseEntryForm existingData={formData} onChange={handleFormChange} /> */}
        {/* But for now keep manual input or reuse form components with value props */}
      </form>
    </div>
  );
};

export default EditCase;
