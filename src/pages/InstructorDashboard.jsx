import { useEffect, useState } from "react";
import API from "../api";

function InstructorDashboard() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    API.get("/submissions")
      .then(res => {
        setSubmissions(res.data);
      })
      .catch(err => {
        console.log("Error fetching submissions", err);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Instructor Dashboard</h2>

      {submissions.length === 0 && (
        <p>No submissions yet.</p>
      )}

      {submissions.map((s, index) => (
        <div
          key={index}
          style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}
        >
          <p><b>Student:</b> {s.studentId}</p>
          <p><b>Score:</b> {s.score}</p>
          <p><b>Plagiarism:</b> {s.plagiarismScore}</p>
          <p><b>Feedback:</b> {s.feedback}</p>
        </div>
      ))}
    </div>
  );
}

export default InstructorDashboard;
