import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CaseEntryForm from "./CaseEntryForm";
import AllCases from "./pages/AllCases"; // Make sure the path is correct

function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Bhanu Homeopathy App</h1>

        {/* Navigation Menu */}
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-600 hover:underline">Add Case</Link>
          <Link to="/all-cases" className="text-blue-600 hover:underline">View All Cases</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<CaseEntryForm />} />
          <Route path="/all-cases" element={<AllCases />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
