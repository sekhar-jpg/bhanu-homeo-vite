// ==== Backend: routes/caseRoutes.js ====

const express = require("express");
const multer = require("multer");
const router = express.Router();
const Case = require("../models/Case");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Submit new case
router.post("/submit-case", upload.single("faceImage"), async (req, res) => {
  try {
    const caseData = JSON.parse(req.body.data);
    const faceImage = req.file ? req.file.buffer : null;

    const newCase = new Case({
      ...caseData,
      faceImage,
      followUps: [],
    });

    await newCase.save();
    res.status(200).json({ message: "Case submitted successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Case saving failed" });
  }
});

// Get all cases
router.get("/all-cases", async (req, res) => {
  try {
    const cases = await Case.find();
    res.status(200).json(cases);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cases" });
  }
});

// Add follow-up
router.post("/add-followup/:caseId", async (req, res) => {
  try {
    const { caseId } = req.params;
    const { date, notes } = req.body;

    const updatedCase = await Case.findByIdAndUpdate(
      caseId,
      { $push: { followUps: { date, notes } } },
      { new: true }
    );

    res.status(200).json(updatedCase);
  } catch (err) {
    res.status(500).json({ error: "Follow-up not saved" });
  }
});

// Get today's reminders
router.get("/reminders/today", async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const cases = await Case.find({
      followUps: {
        $elemMatch: {
          date: today,
        },
      },
    });

    const reminders = cases.map((c) => ({
      patientName: c.name,
      phone: c.phone,
    }));

    res.status(200).json(reminders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reminders" });
  }
});

module.exports = router;


// ==== Backend: models/Case.js ====

const mongoose = require("mongoose");

const followUpSchema = new mongoose.Schema({
  date: String,
  notes: String,
});

const caseSchema = new mongoose.Schema({
  name: String,
  age: String,
  gender: String,
  phone: String,
  address: String,
  complaints: [String],
  prescription: String,
  faceImage: Buffer,
  followUps: [followUpSchema],
});

module.exports = mongoose.model("Case", caseSchema);


// ==== Frontend: AllCases.jsx ====

import React, { useEffect, useState } from "react";
import axios from "axios";

const AllCases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    axios.get("https://bhanu-homeo-vite-backend.onrender.com/all-cases")
      .then((res) => setCases(res.data))
      .catch((err) => console.error("Error fetching cases", err));
  }, []);

  return (
    <div>
      <h2>All Cases</h2>
      {cases.map((c) => (
        <div key={c._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h4>{c.name} ({c.age}, {c.gender})</h4>
          <p>Phone: {c.phone}</p>
          <p>Address: {c.address}</p>
          <p>Complaints: {c.complaints.join(", ")}</p>
          <p>Prescription: {c.prescription}</p>
          <strong>Follow-ups:</strong>
          <ul>
            {c.followUps.map((f, i) => (
              <li key={i}>{f.date}: {f.notes}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllCases;


// ==== Frontend: Reminders.jsx ====

import React, { useEffect, useState } from "react";
import axios from "axios";

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    axios.get("https://bhanu-homeo-vite-backend.onrender.com/reminders/today")
      .then((res) => setReminders(res.data))
      .catch((err) => console.error("Error fetching reminders", err));
  }, []);

  return (
    <div>
      <h2>Today's Follow-Up Reminders</h2>
      {reminders.length === 0 ? (
        <p>No follow-ups today.</p>
      ) : (
        <ul>
          {reminders.map((r, i) => (
            <li key={i}>
              {r.patientName} - {r.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reminders;


// ==== Frontend: App.jsx ====

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CaseEntryForm from "./CaseEntryForm";
import AllCases from "./AllCases";
import Reminders from "./Reminders";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Bhanu Homeopathy App</h1>
        <nav>
          <Link to="/">New Case</Link> | <Link to="/all-cases">All Cases</Link> | <Link to="/reminders">Reminders</Link>
        </nav>

        <Routes>
          <Route path="/" element={<CaseEntryForm />} />
          <Route path="/all-cases" element={<AllCases />} />
          <Route path="/reminders" element={<Reminders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
