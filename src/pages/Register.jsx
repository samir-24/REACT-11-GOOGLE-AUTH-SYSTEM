import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Registered Successfully");

      setEmail("");
      setPassword("");

      navigate("/dashboard");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
  <div className="container">
    <div className="card">
      <h2>Register</h2>

      <input
        className="input"
        value={email}
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        className="input"
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button className="button" onClick={handleRegister}>
        Register
      </button>

      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  </div>
);
}

export default Register;