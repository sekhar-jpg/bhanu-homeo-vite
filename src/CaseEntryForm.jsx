import React, { useState, useRef } from 'react';

const CaseEntryForm = () => {
const \[formData, setFormData] = useState({
// 1. Basic Patient Info
name: '',
age: '',
gender: '',
maritalStatus: '',
occupation: '',
address: '',
phoneWhatsApp: '',
dateOfVisit: '',

```
// 2. Chief Complaints (array of complaints)
complaints: [
  { complaint: '', duration: '', description: '' },
],

// 3. History of Present Illness
historyPresentIllness: '',

// 4. Past History
childhoodDiseases: '',
surgeriesInjuries: '',
majorIllnesses: '',

// 5. Family History
familyHistory: '',

// 6. Personal History
appetite: '',
cravingsAversions: '',
thirst: '',
bowelMovement: '',
urine: '',
sleep: '',
dreams: '',
sweat: '',
thermalNature: '',
habits: '',
menstrualHistory: '',

// 7. Mental Symptoms
mentalSymptoms: '',

// 8. General Remarks
generalRemarks: '',

// 9. Observations by Doctor
doctorObservations: '',

// Prescription (array of meds)
prescriptions: [
  { date: '', remedyName: '', potency: '', dose: '', instructions: '' },
],

// Face Image (file)
faceImage: null,
faceImagePreview: null,
```

});

// Handle changes for simple text inputs
const handleChange = (e) => {
const { name, value } = e.target;
setFormData(prev => ({
...prev,
\[name]: value,
}));
};

// Handle array field changes for complaints
const handleComplaintChange = (index, e) => {
const { name, value } = e.target;
const newComplaints = \[...formData.complaints];
newComplaints\[index]\[name] = value;
setFormData(prev => ({
...prev,
complaints: newComplaints,
}));
};

// Add new complaint row
const addComplaint = () => {
setFormData(prev => ({
...prev,
complaints: \[...prev.complaints, { complaint: '', duration: '', description: '' }],
}));
};

// Remove complaint row
const removeComplaint = (index) => {
const newComplaints = formData.complaints.filter((\_, i) => i !== index);
setFormData(prev => ({
...prev,
complaints: newComplaints,
}));
};

// Handle array field changes for prescriptions
const handlePrescriptionChange = (index, e) => {
const { name, value } = e.target;
const newPrescriptions = \[...formData.prescriptions];
newPrescriptions\[index]\[name] = value;
setFormData(prev => ({
...prev,
prescriptions: newPrescriptions,
}));
};

// Add new prescription row
const addPrescription = () => {
setFormData(prev => ({
...prev,
prescriptions: \[...prev.prescriptions, { date: '', remedyName: '', potency: '', dose: '', instructions: '' }],
}));
};

// Remove prescription row
const removePrescription = (index) => {
const newPrescriptions = formData.prescriptions.filter((\_, i) => i !== index);
setFormData(prev => ({
...prev,
prescriptions: newPrescriptions,
}));
};

 <h2>Face Image Upload</h2>
<input type="file" accept="image/*" onChange={handleImageChange} />
{formData.faceImagePreview && (
  <div style={{ marginTop: 10 }}>
    <img
      src={formData.faceImagePreview}
      alt="Face Preview"
      style={{ width: 200, height: 'auto', borderRadius: 8, border: '1px solid #ccc' }}
    />
    <br />
    <button
      type="button"
      onClick={() => setFormData(prev => ({
        ...prev,
        faceImage: null,
        faceImagePreview: null,
      }))}
      style={{ marginTop: 5 }}
    >
      Remove Image
    </button>
  </div>
)}

// Handle form submission (example - you can adapt it)
const handleSubmit = (e) => {
e.preventDefault();
// For demo, just log the data
console.log('Form Data:', formData);

```
// You can build FormData here and send it to backend
// const data = new FormData();
// data.append('faceImage', formData.faceImage);
// ... append other fields similarly

alert('Form submitted! Check console for data.');
```

};

return (
\<form onSubmit={handleSubmit} style={{ maxWidth: 900, margin: 'auto' }}> <h2>1. Basic Patient Information</h2> <label>
Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /> </label> <br />

```
  <label>
    Age:
    <input type="number" name="age" value={formData.age} onChange={handleChange} required min="0" />
  </label>

  <label style={{ marginLeft: 20 }}>
    Gender:
    <select name="gender" value={formData.gender} onChange={handleChange} required>
      <option value="">Select</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </label>
  <br />

  <label>
    Marital Status:
    <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} />
  </label>
  <br />

  <label>
    Occupation:
    <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
  </label>
  <br />

  <label>
    Address:
    <textarea name="address" value={formData.address} onChange={handleChange} rows={2} />
  </label>
  <br />

  <label>
    Phone / WhatsApp:
    <input type="tel" name="phoneWhatsApp" value={formData.phoneWhatsApp} onChange={handleChange} />
  </label>
  <br />

  <label>
    Date of Visit:
    <input type="date" name="dateOfVisit" value={formData.dateOfVisit} onChange={handleChange} />
  </label>

  <hr />

  <h2>2. Chief Complaints (Problem + Duration + Details)</h2>
  {formData.complaints.map((item, index) => (
    <div key={index} style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10 }}>
      <label>
        Complaint:
        <input
          type="text"
          name="complaint"
          value={item.complaint}
          onChange={(e) => handleComplaintChange(index, e)}
          placeholder="e.g. Headache"
          required
        />
      </label>
      <br />
      <label>
        Duration:
        <input
          type="text"
          name="duration"
          value={item.duration}
          onChange={(e) => handleComplaintChange(index, e)}
          placeholder="e.g. 3 years"
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={item.description}
          onChange={(e) => handleComplaintChange(index, e)}
          placeholder="e.g. Right side, daily morning, < noise, > sleep"
          rows={2}
          required
        />
      </label>
      <br />
      {formData.complaints.length > 1 && (
        <button type="button" onClick={() => removeComplaint(index)} style={{ color: 'red' }}>
          Remove Complaint
        </button>
      )}
    </div>
  ))}
  <button type="button" onClick={addComplaint}>
    + Add Complaint
  </button>

  <hr />

  <h2>3. History of Present Illness</h2>
  <textarea
    name="historyPresentIllness"
    value={formData.historyPresentIllness}
    onChange={handleChange}
    rows={4}
    placeholder="Detailed development of complaints"
  />

  <hr />

  <h2>4. Past History</h2>
  <label>
    Childhood diseases:
    <textarea
      name="childhoodDiseases"
      value={formData.childhoodDiseases}
      onChange={handleChange}
      rows={2}
    />
  </label>
  <br />
  <label>
    Surgeries / Injuries:
    <textarea
      name="surgeriesInjuries"
      value={formData.surgeriesInjuries}
      onChange={handleChange}
      rows={2}
    />
  </label>
  <br />
  <label>
    Major illnesses:
    <textarea
      name="majorIllnesses"
      value={formData.majorIllnesses}
      onChange={handleChange}
      rows={2}
    />
  </label>

  <hr />

  <h2>5. Family History</h2>
  <textarea
    name="familyHistory"
    value={formData.familyHistory}
    onChange={handleChange}
    rows={3}
    placeholder="Any history of: Diabetes / Hypertension / Cancer / Skin Disease / etc."
  />

  <hr />

  <h2>6. Personal History</h2>
  <label>
    Appetite:
    <input type="text" name="appetite" value={formData.appetite} onChange={handleChange} />
  </label>
  <br />
  <label>
    Cravings / Aversions:
    <input
      type="text"
      name="cravingsAversions"
      value={formData.cravingsAversions}
      onChange={handleChange}
    />
  </label>
  <br />
  <label>
    Thirst:
    <input type="text" name="thirst" value={formData.thirst} onChange={handleChange} />
  </label>
  <br />
  <label>
    Bowel Movement:
    <input type="text" name="bowelMovement" value={formData.bowelMovement} onChange={handleChange} />
  </label>
  <br />
  <label>
    Urine:
    <input type="text" name="urine" value={formData.urine} onChange={handleChange} />
  </label>
  <br />
  <label>
    Sleep:
    <input type="text" name="sleep" value={formData.sleep} onChange={handleChange} />
  </label>
  <br />
  <label>
    Dreams:
    <input type="text" name="dreams" value={formData.dreams} onChange={handleChange} />
  </label>
  <br />
  <label>
    Sweat:
    <input type="text" name="sweat" value={formData.sweat} onChange={handleChange} />
  </label>
  <br />
  <label>
    Thermal Nature (Hot/Cold):
    <input type="text" name="thermalNature" value={formData.thermalNature} onChange={handleChange} />
  </label>
  <br />
  <label>
    Habits (Tea, Coffee, Smoking, Alcohol, etc.):
    <input type="text" name="habits" value={formData.habits} onChange={handleChange} />
  </label>
  <br />
  <label>
    Menstrual History (if applicable):
    <input type="text" name="menstrualHistory" value={formData.menstrualHistory} onChange={handleChange} />
  </label>

  <hr />

  <h2>7. Mental Symptoms</h2>
  <textarea
    name="mentalSymptoms"
    value={formData.mentalSymptoms}
    onChange={handleChange}
    rows={4}
    placeholder="E.g., Fear, Anxiety, Sadness, Anger, Jealousy, Lack of Confidence, etc."
  />

  <hr />

  <h2>8. General Remarks</h2>
  <textarea
    name="generalRemarks"
    value={formData.generalRemarks}
    onChange={handleChange}
    rows={3}
    placeholder="Energy level, daily routine, stress, etc."
  />

  <hr />

  <h2>9. Observations by Doctor</h2>
  <textarea
    name="doctorObservations"
    value={formData.doctorObservations}
    onChange={handleChange}
    rows={3}
    placeholder="E.g., Face color, expressions, posture, behavior in clinic, etc."
  />

  <hr />

  <h2>Prescription (Easy Format)</h2>
  {formData.prescriptions.map((presc, index) => (
    <div key={index} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={presc.date}
          onChange={(e) => handlePrescriptionChange(index, e)}
        />
      </label>
      <br />
      <label>
        Remedy Name:
        <input
          type="text"
          name="remedyName"
          value={presc.remedyName}
          onChange={(e) => handlePrescriptionChange(index, e)}
        />
      </label>
      <br />
      <label>
        Potency:
        <input
          type="text"
          name="potency"
          value={presc.potency}
          onChange={(e) => handlePrescriptionChange(index, e)}
        />
      </label>
      <br />
      <label>
        Dose:
        <input
          type="text"
          name="dose"
          value={presc.dose}
          onChange={(e) => handlePrescriptionChange(index, e)}
        />
      </label>
      <br />
      <label>
        Instructions:
        <textarea
          name="instructions"
          value={presc.instructions}
          onChange={(e) => handlePrescriptionChange(index, e)}
          rows={2}
        />
      </label>
      <br />
      {formData.prescriptions.length > 1 && (
        <button
          type="button"
          onClick={() => removePrescription(index)}
          style={{ color: 'red' }}
        >
          Remove Prescription
        </button>
      )}
    </div>
  ))}
  <button type="button" onClick={addPrescription}>
    + Add Prescription
  </button>

  <hr />

  <h2>Face Image Upload</h2>
  <input type="file" accept="image/*" onChange={handleImageChange} />
  {formData.faceImagePreview && (
    <div style={{ marginTop: 10 }}>
      <img
        src={formData.faceImagePreview}
        alt="Face Preview"
        style={{ maxWidth: '200px', borderRadius: '8px' }}
      />
    </div>
  )}

  <hr />
  <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
    Submit Case
  </button>
</form>
```

);
};

const handleSubmit = async (e) => {
e.preventDefault();

// Create FormData and append all your form fields
const formData = new FormData();
formData.append("name", name);
formData.append("age", age);
// append other fields similarly
formData.append("faceImage", faceImageFile);

try {
const response = await fetch("[https://bhanu-homeo-vite-backend.onrender.com/submit-case](https://bhanu-homeo-vite-backend.onrender.com/submit-case)", {
method: "POST",
body: formData,
});

```
if (!response.ok) {
  throw new Error("Failed to submit");
}

const result = await response.json();
alert("Case submitted successfully!");

// Reset form if needed
setName("");
setAge("");
// reset other fields...
setFaceImageFile(null);
// reset file input value — see next step
```

} catch (error) {
alert("Error submitting case");
console.error(error);
}
};

export default CaseEntryForm;         help cheyu ekkada change cheyu
