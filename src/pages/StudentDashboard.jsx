import { useState } from "react";
import API from "../api";
import "./dashboard.css";

function StudentDashboard() {
  const [content, setContent] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await API.post("/submit", {
        assignmentId: "A1",
        studentId: "S001",
        content
      });
      setResult(res.data);
    } catch (err) {
      alert("Backend not connected yet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>📘 Student Dashboard</h2>
        <p className="subtitle">
          Submit your assignment and receive evaluation feedback
        </p>

        <textarea
          placeholder="Write your assignment here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Submit Assignment"}
        </button>

        {result && (
          <div className="result">
            <h3>📊 Evaluation Result</h3>
            <p><b>Plagiarism Risk:</b> {result.plagiarism_risk}</p>
            <p><b>Score:</b> {result.score}</p>
            <p><b>Feedback:</b> {result.feedback_summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;
