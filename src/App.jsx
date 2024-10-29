import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css';
import auth from './firebae';

function App() {
  const [count, setCount] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();

  const handlepriver = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result); // Debugging
        setUser(result.user);
      })
      .catch(error => {
        console.error("Error during sign-in:", error);
        setError(error.message); // Set the error message
      });
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => setCount(data))
      .catch(err => {
        console.error(err);
        setError("Failed to fetch data"); // Set an error message
      });
  }, []);

  return (
    <>
      <ul>
        <div>
          {user.displayName || "User not signed in"} {/* Display a fallback message */}
        </div>
        <div>
          {error && <span style={{ color: 'red' }}>{error}</span>} {/* Display error messages */}
        </div>
        {count?.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <ul>
        {count?.map(item => <li key={item.id}>{item.email}</li>)}
      </ul>
      <button onClick={handlepriver}>Google Sign-In</button>
    </>
  );
}

export default App;
