// AllCases.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const AllCases = ({ onEdit }) => {
  const [cases, setCases] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCases = async () => {
    try {
      const res = await axios.get("/api/cases");
      setCases(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this case?")) return;
    try {
      await axios.delete(`/api/cases/${id}`);
      fetchCases();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  const filteredCases = cases.filter((c) =>
    c.patientInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 900, margin: "auto" }}>
      <h2>All Cases</h2>
      <input
        placeholder="Search by patient name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 10, padding: 5, width: "100%" }}
      />
      {filteredCases.length === 0 && <p>No cases found.</p>}
      {filteredCases.map((c) => (
        <div
          key={c._id}
          style={{
            border: "1px solid #ccc",
            marginBottom: 10,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <h3>{c.patientInfo.name} (Age: {c.patientInfo.age})</h3>
          <p>Chief Complaint: {c.chiefComplaints.join(", ")}</p>
          <button onClick={() => onEdit(c)}>Edit</button>
          <button onClick={() => handleDelete(c._id)} style={{ marginLeft: 10 }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllCases;
