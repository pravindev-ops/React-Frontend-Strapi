import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/health/live`)
      .then((response) => {
        setMessage(response.data.status);
      })
      .catch(() => {
        setMessage("Backend unavailable");
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>GCP MIG POC</h1>

      <p>Frontend: React running on Compute Engine MIG</p>
      <p>Backend: Strapi running on Compute Engine MIG</p>
      <p>Database: Cloud SQL PostgreSQL</p>

      <h2>Backend Status: {message}</h2>
    </div>
  );
}

export default App;