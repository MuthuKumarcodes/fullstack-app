import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading Users...</h2>;

  return (
    <div className="container">
      <h1>👥 User Directory</h1>
      <div className="grid">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>{user.name}</h2>
            <p><strong>📧 Email:</strong> {user.email}</p>
            <p><strong>📞 Phone:</strong> {user.phone}</p>
            <p><strong>🏢 Company:</strong> {user.company.name}</p>
            <p><strong>🌍 Website:</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
