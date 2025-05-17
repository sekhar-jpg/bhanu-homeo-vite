import React, { useState } from 'react';

const CaseSheetForm = () => {
  const [name, setName] = useState('');
  const [complaints, setComplaints] = useState([{ complaint: '', duration: '', details: '' }]);
  const [image, setImage] = useState(null);
  const [physicalGenerals, setPhysicalGenerals] = useState('');
  const [mentalSymptoms, setMentalSymptoms] = useState('');
  const [pastHistory, setPastHistory] = useState('');
  const [familyHistory, setFamilyHistory] = useState('');
  const [labReports, setLabReports] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [prescription, setPrescription] = useState('');

  const handleComplaintChange = (index, field, value) => {
    const updated = [...complaints];
    updated[index][field] = value;
    setComplaints(updated);
  };

  const addComplaint = () => {
    setComplaints([...complaints, { complaint: '', duration: '', details: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('complaints', JSON.stringify(complaints));
    if (image) formData.append('image', image);
    formData.append('physicalGenerals', physicalGenerals);
    formData.append('mentalSymptoms', mentalSymptoms);
    formData.append('pastHistory', pastHistory);
    formData.append('familyHistory', familyHistory);
    formData.append('labReports', labReports);
    formData.append('diagnosis', diagnosis);
    formData.append('prescription', prescription);

    try {
      const res = await fetch('https://your-backend-url/submit-case', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('Case submitted successfully!');
      } else {
        alert('Submission failed!');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting case.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-3xl mx-auto space-y-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold">1. Basic Patient Information</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded" />

      <h2 className="text-xl font-bold">2. Chief Complaints</h2>
      {complaints.map((c, idx) => (
        <div key={idx} className="space-y-2 border p-2 rounded">
          <input type="text" placeholder="Complaint" value={c.complaint} onChange={(e) => handleComplaintChange(idx, 'complaint', e.target.value)} className="w-full border p-2 rounded" />
          <input type="text" placeholder="Duration" value={c.duration} onChange={(e) => handleComplaintChange(idx, 'duration', e.target.value)} className="w-full border p-2 rounded" />
          <textarea placeholder="Details" value={c.details} onChange={(e) => handleComplaintChange(idx, 'details', e.target.value)} className="w-full border p-2 rounded"></textarea>
        </div>
      ))}
      <button type="button" onClick={addComplaint} className="bg-blue-500 text-white px-3 py-1 rounded">+ Add Complaint</button>

      <h2 className="text-xl font-bold">3. Face Image Upload</h2>
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />

      <h2 className="text-xl font-bold">4. Physical Generals</h2>
      <textarea value={physicalGenerals} onChange={(e) => setPhysicalGenerals(e.target.value)} className="w-full border p-2 rounded"></textarea>

      <h2 className="text-xl font-bold">5. Mental Symptoms</h2>
      <textarea value={mentalSymptoms} onChange={(e) => setMentalSymptoms(e.target.value)} className="w-full border p-2 rounded"></textarea>

      <h2 className="text-xl font-bold">6. Past History</h2>
      <textarea value={pastHistory} onChange={(e) => setPastHistory(e.target.value)} className="w-full border p-2 rounded"></textarea>

      <h2 className="text-xl font-bold">7. Family History</h2>
      <textarea value={familyHistory} onChange={(e) => setFamilyHistory(e.target.value)} className="w-full border p-2 rounded"></textarea>

      <h2 className="text-xl font-bold">8. Lab Reports</h2>
      <textarea value={labReports} onChange={(e) => setLabReports(e.target.value)} className="w-full border p-2 rounded"></textarea>

      <h2 className="text-xl font-bold">9. Diagnosis</h2>
      <textarea value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} className="w-full border p-2 rounded"></textarea>

      <h2 className="text-xl font-bold">10. Prescription</h2>
      <textarea value={prescription} onChange={(e) => setPrescription(e.target.value)} className="w-full border p-2 rounded"></textarea>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit Case</button>
    </form>
  );
};

export default CaseSheetForm;
