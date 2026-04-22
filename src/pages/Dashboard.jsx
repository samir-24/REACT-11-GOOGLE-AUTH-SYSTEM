import { auth } from "../firebase";
import { signOut, updateProfile } from "firebase/auth";
import { useState } from "react";

function Dashboard() {
  const [name, setName] = useState("");

  const logout = async () => {
    await signOut(auth);
  };

 return (
  <div className="container">
    <div className="card">
      <h2>Dashboard</h2>

      <p><strong>Email:</strong> {auth.currentUser?.email}</p>

      <input
        className="input"
        value={name}
        placeholder="Enter Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <button className="button" onClick={logout}>
        Logout
      </button>
    </div>
  </div>
);
}

export default Dashboard; 