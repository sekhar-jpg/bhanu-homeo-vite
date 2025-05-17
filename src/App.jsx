import React, { useEffect, useState } from "react";
import axios from "axios";
import CaseEntryForm from "./CaseEntryForm";

function App() {
  const [cases, setCases] = useState([]);
  const [reminders, setReminders] = useState([]);

  const fetchCases = async () => {
    const res = await axios.get("https://bhanu-homeo-vite-backend.onrender.com/all-cases");
    setCases(res.data);
  };

  const fetchReminders = async () => {
    const res = await axios.get("https://bhanu-homeo-vite-backend.onrender.com/reminders");
    setReminders(res.data);
  };

  const addFollowUp = async (caseId) => {
    const date = prompt("Enter follow-up date (YYYY-MM-DD):");
    const notes = prompt("Enter follow-up notes:");
    if (date && notes) {
      await axios.post(`https://bhanu-homeo-vite-backend.onrender.com/add-followup/${caseId}`, { date, notes });
      fetchCases();
      fetchReminders();
    }
  };

  const editFollowUp = async (caseId, followup) => {
    const date = prompt("Edit date:", followup.date);
    const notes = prompt("Edit notes:", followup.notes);
    await axios.put(`https://bhanu-homeo-vite-backend.onrender.com/edit-followup/${caseId}/${followup._id}`, { date, notes });
    fetchCases();
    fetchReminders();
  };

  const deleteFollowUp = async (caseId, followupId) => {
    if (window.confirm("Are you sure you want to delete this follow-up?")) {
      await axios.delete(`https://bhanu-homeo-vite-backend.onrender.com/delete-followup/${caseId}/${followupId}`);
      fetchCases();
      fetchReminders();
    }
  };

  useEffect(() => {
    fetchCases();
    fetchReminders();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bhanu Homeopathy</h1>

      {/* Case Entry Form */}
      <CaseEntryForm />

      {/* Reminder List */}
      <hr />
      <h2>Today's Follow-up Reminders</h2>
      {reminders.length === 0 ? (
        <p>No reminders today</p>
      ) : (
        reminders.map((c, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <p><strong>{c.patientName}</strong> - {c.phone}</p>
            <ul>
              {c.followUps
                .filter(f => f.date === new Date().toISOString().split("T")[0])
                .map(f => (
                  <li key={f._id}>{f.date}: {f.notes}</li>
                ))}
            </ul>
          </div>
        ))
      )}

      {/* All Cases List */}
      <hr />
      <h2>All Cases</h2>
      {cases.map((c, i) => (
        <div key={i} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h4>{c.patientName} ({c.age} / {c.gender})</h4>
          <p>Phone: {c.phone}</p>
          <p>Chief Complaints: {c.chiefComplaints}</p>
          <p>Prescription: {c.prescription}</p>

          <button onClick={() => addFollowUp(c._id)}>Add Follow-up</button>

          <h5>Follow-ups:</h5>
          <ul>
            {c.followUps.map((f) => (
              <li key={f._id}>
                {f.date} - {f.notes}
                <button onClick={() => editFollowUp(c._id, f)}>Edit</button>
                <button onClick={() => deleteFollowUp(c._id, f._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
