// FollowUps.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const FollowUps = () => {
  const [followUps, setFollowUps] = useState([]);

  const fetchFollowUps = async () => {
    try {
      const res = await axios.get("/api/followups/today");
      setFollowUps(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFollowUps();
  }, []);

  if (followUps.length === 0) return <p>No reminders today</p>;

  return (
    <div>
      <h2>Today's Follow-up Reminders</h2>
      {followUps.map((f) => (
        <div key={f._id}>
          <p>
            {f.patientName} - Next follow-up: {new Date(f.nextFollowUpDate).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FollowUps;
