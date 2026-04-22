import { useState } from "react";
import { auth } from "../firebase";
import { 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Success");

      // clear fields
      setEmail("");
      setPassword("");

      navigate("/dashboard");

    } catch (err) {
      alert(err.message);
    }
  };

  const resetPassword = async () => {
    if (!email) {
      alert("Enter email first");
      return;
    }
    await sendPasswordResetEmail(auth, email);
    alert("Reset email sent");
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    navigate("/dashboard");
  };

  return (
  <div className="container">
    <div className="card">
      <h2>Login</h2>

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

      <button className="button" onClick={handleLogin}>Login</button>

      <button className="button google-btn" onClick={googleLogin}>
        Login with Google
      </button>

      <button className="link" onClick={resetPassword}>
        Forgot Password?
      </button>

      <p>
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  </div>
);
}

export default Login;