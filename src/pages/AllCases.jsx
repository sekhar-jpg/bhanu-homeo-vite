import React, { useEffect, useState } from "react";
import axios from "axios";

const AllCases = () => {
  const [cases, setCases] = useState([]);
  const [followUps, setFollowUps] = useState({});
  const [loading, setLoading] = useState(true);

  const API_URL = "https://bhanu-homeo-vite-backend.onrender.com";

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const res = await axios.get(`${API_URL}/all-cases`);
      setCases(res.data);
    } catch (err) {
      console.error("Error fetching cases:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchFollowUps = async (caseId) => {
    try {
      const res = await axios.get(`${API_URL}/get-followups/${caseId}`);
      setFollowUps((prev) => ({
        ...prev,
        [caseId]: res.data,
      }));
    } catch (err) {
      console.error("Error fetching follow-ups:", err);
    }
  };

  if (loading) return <p className="p-4">Loading cases...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Cases</h2>
      {cases.length === 0 ? (
        <p>No cases found.</p>
      ) : (
        cases.map((c) => (
          <div
            key={c._id}
            className="border rounded-lg p-4 mb-4 shadow-md bg-white"
          >
            <p><strong>Name:</strong> {c.name}</p>
            <p><strong>Age:</strong> {c.age}</p>
            <p><strong>Gender:</strong> {c.gender}</p>
            <p><strong>Phone:</strong> {c.phone}</p>
            <p><strong>Complaints:</strong> {c.complaints?.join(", ")}</p>

            <button
              onClick={() => fetchFollowUps(c._id)}
              className="mt-2 bg-blue-600 text-white px-4 py-1 rounded"
            >
              View Follow-ups
            </button>

            {followUps[c._id] && (
              <div className="mt-3 bg-gray-100 p-3 rounded">
                <p className="font-semibold mb-2">Follow-ups:</p>
                {followUps[c._id].length === 0 ? (
                  <p>No follow-ups yet.</p>
                ) : (
                  <ul className="list-disc pl-4">
                    {followUps[c._id].map((f) => (
                      <li key={f._id}>
                        <strong>Date:</strong>{" "}
                        {new Date(f.createdAt).toLocaleDateString()} |{" "}
                        <strong>Notes:</strong> {f.notes}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AllCases;
