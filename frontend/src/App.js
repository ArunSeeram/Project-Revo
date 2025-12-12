import { useEffect, useState } from "react";
import { getNames, submitName } from "./api";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  
  useEffect(() => {
    fetch("https://project-revo.onrender.com");
;
  }, []);

  const fetchNames = async () => {
    const data = await getNames();
    if (data.success) setNames(data.names);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name cannot be empty");
      setSuccess("");
      return;
    }

    const result = await submitName(name);

    if (!result.success) {
      setError(result.message);
      setSuccess("");
      return;
    }

    
    setName("");
    setError("");
    setSuccess("Name added successfully!");
    fetchNames();

    // set timer to clear success message
    setTimeout(() => setSuccess(""), 3000);
  };

  return (

      

    <div className="container">
      <h1>Hello Names</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

     
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <h3>Submitted Names:</h3>
      <ul>
        {names.map((n, idx) => (
          <li key={idx}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
