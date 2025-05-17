import React, { useState } from "react";

const CaseSheetForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    maritalStatus: "",
    occupation: "",
    phoneNumber: "",
    address: "",
    date: "",
    complaints: [{ complaint: "", duration: "", location: "", sensation: "", modality: "", aggravation: "", amelioration: "", associated: "" }],
    pastHistory: "",
    familyHistory: "",
    personalHistory: {
      appetite: "",
      thirst: "",
      cravings: "",
      aversions: "",
      bowel: "",
      urine: "",
      sweat: "",
      sleepTime: "",
      dreams: "",
      sleepPosition: "",
      sleepQuality: "",
      thermal: ""
    },
    otherDetails: {
      skin: "",
      hair: "",
      tongue: "",
      nails: "",
      bodyType: "",
      appetiteVariability: ""
    },
    mentalGenerals: {
      fears: "",
      anger: "",
      sadness: "",
      anxiety: "",
      memory: "",
      concentration: "",
      childhoodBehavior: "",
      griefReactions: "",
      beliefSystem: "",
      emotionalSensitivity: ""
    },
    miasm: "",
    clinicalDiagnosis: "",
    prescription: [{ date: "", medicine: "", potency: "", dose: "", repetition: "" }],
    faceImage: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "faceImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "faceImage") {
        data.append("faceImage", value);
      } else {
        data.append(key, JSON.stringify(value));
      }
    });

    fetch("/submit-case", {
      method: "POST",
      body: data
    })
      .then((res) => res.json())
      .then((data) => alert("Case submitted successfully!"))
      .catch((err) => console.error("Error submitting case:", err));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <h2>👤 Patient Information</h2>
      <input name="patientName" placeholder="పేరు" onChange={handleChange} />
      <input name="age" placeholder="వయస్సు" onChange={handleChange} />
      <input name="gender" placeholder="లింగం" onChange={handleChange} />
      <input name="maritalStatus" placeholder="వివాహ స్థితి" onChange={handleChange} />
      <input name="occupation" placeholder="వృత్తి" onChange={handleChange} />
      <input name="phoneNumber" placeholder="ఫోన్ నంబర్" onChange={handleChange} />
      <input name="address" placeholder="చిరునామా" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />

      <h2>🧪 Chief Complaints</h2>
      <input name="complaints[0].complaint" placeholder="సమస్య" onChange={handleChange} />
      <input name="complaints[0].duration" placeholder="కాల వ్యవధి" onChange={handleChange} />
      <input name="complaints[0].location" placeholder="ప్రదేశం" onChange={handleChange} />
      <input name="complaints[0].sensation" placeholder="అనుభూతి" onChange={handleChange} />
      <input name="complaints[0].modality" placeholder="మోదాలిటీ" onChange={handleChange} />
      <input name="complaints[0].aggravation" placeholder="చెడే పరిస్థితులు" onChange={handleChange} />
      <input name="complaints[0].amelioration" placeholder="మెరుగయ్యే పరిస్థితులు" onChange={handleChange} />
      <input name="complaints[0].associated" placeholder="సంబంధిత లక్షణాలు" onChange={handleChange} />

      <h2>🫉 Past History</h2>
      <textarea name="pastHistory" placeholder="గత వైద్య చరిత్రి" onChange={handleChange} />

      <h2>🧬 Family History</h2>
      <textarea name="familyHistory" placeholder="కుటుంబ చరిత్రి" onChange={handleChange} />

      <h2>👤 Personal History</h2>
      <input name="appetite" placeholder="ఆకలి" onChange={handleChange} />
      <input name="thirst" placeholder="దాహం" onChange={handleChange} />
      <input name="cravings" placeholder="ఇష్టమైన పదార్థాలు" onChange={handleChange} />
      <input name="aversions" placeholder="ద్వేషించేవి" onChange={handleChange} />
