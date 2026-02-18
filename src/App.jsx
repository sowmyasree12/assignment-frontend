import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/instructor" element={<InstructorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
