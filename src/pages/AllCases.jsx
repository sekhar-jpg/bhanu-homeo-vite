import React, { useEffect, useState } from "react";
import axios from "axios";

const AllCases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const response = await axios.get(https://bhanu-homeo-vite-backend.onrender.com/all-cases"); 
      setCases(response.data);
    } catch (error) {
      console.error("Error fetching cases:", error);
    }
  };

  const handleEditFollowUp = (caseId, followupId) => {
    // Placeholder — you can open a modal to edit
    alert(`Edit Follow-up ID: ${followupId} for Case ID: ${caseId}`);
  };

  const handleDeleteFollowUp = async (caseId, followupId) => {
    try {
      await axios.delete(`https://your-backend-url/delete-followup/${caseId}/${followupId}`);
      alert("Follow-up deleted");
      fetchCases(); // Refresh data
    } catch (error) {
      console.error("Error deleting follow-up:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Cases</h2>
      {cases.length === 0 ? (
        <p>No cases found.</p>
      ) : (
        cases.map((item, index) => (
          <div key={item._id} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px", borderRadius: "10px" }}>
            <h3>{index + 1}. {item.patientName} ({item.age} yrs, {item.gender})</h3>
            <p><strong>Phone:</strong> {item.phone}</p>
            <p><strong>Address:</strong> {item.address}</p>
            <p><strong>Diagnosis:</strong> {item.diagnosis}</p>
            <p><strong>Prescription:</strong> {item.prescription}</p>

            <h4>Follow-Ups</h4>
            {item.followUps && item.followUps.length > 0 ? (
              item.followUps.map((fu) => (
                <div key={fu._id} style={{ marginLeft: "20px", marginBottom: "10px" }}>
                  <p>📅 {fu.date} - 📝 {fu.notes}</p>
                  <button onClick={() => handleEditFollowUp(item._id, fu._id)}>Edit</button>
                  <button onClick={() => handleDeleteFollowUp(item._id, fu._id)} style={{ marginLeft: "10px", color: "red" }}>Delete</button>
                </div>
              ))
            ) : (
              <p>No follow-ups yet.</p>
            )}

            <button onClick={() => alert(`Add follow-up for ${item._id}`)} style={{ marginTop: "10px" }}>
              ➕ Add Follow-Up
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AllCases;
