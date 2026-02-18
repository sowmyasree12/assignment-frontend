import { useState } from "react";
import API from "../api";

function StudentDashboard() {
  const [content, setContent] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await API.post(
        "/submit",
        {
          assignmentId: "A1",
          studentId: "S001",
          content: content
        },
        {
          timeout: 60000 // IMPORTANT for Render free tier cold start
        }
      );

      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Backend not connected yet (this is OK)");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Student Dashboard</h2>

      <textarea
        rows="6"
        cols="50"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Feedback</h3>
          <p>Plagiarism Risk: {result.plagiarism_risk}</p>
          <p>Score: {result.score}</p>
          <p>{result.feedback_summary}</p>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
