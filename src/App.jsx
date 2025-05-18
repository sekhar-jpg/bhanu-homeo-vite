import React, { useState } from "react";
import CaseEntryForm from "./CaseEntryForm";
import AllCases from "./AllCases";
import EditCase from "./EditCase";
import FollowUps from "./FollowUps";

const App = () => {
  const [editingCase, setEditingCase] = useState(null);
  const [view, setView] = useState("allCases"); // allCases, addCase, followUps, editCase

  const refreshList = () => {
    setEditingCase(null);
    setView("allCases");
  };

  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <button onClick={() => setView("addCase")}>Add Case</button>
        <button onClick={() => setView("allCases")}>All Cases</button>
        <button onClick={() => setView("followUps")}>Follow-ups</button>
      </nav>

      {view === "addCase" && <CaseEntryForm onCaseSubmitted={refreshList} />}
      {view === "allCases" && <AllCases onEdit={(c) => { setEditingCase(c); setView("editCase"); }} />}
      {view === "editCase" && editingCase && (
        <EditCase existingCase={editingCase} onClose={refreshList} onUpdated={refreshList} />
      )}
      {view === "followUps" && <FollowUps />}
    </div>
  );
};

export default App;
