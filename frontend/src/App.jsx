import { useState } from "react";
import terriermon from "./assets/terriermon.gif";
import SingIn from "./components/SingIn";
import SignUp from "./components/SignUp";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <section className="app-start">
      <h1> DigiGame </h1>
      {!isSignedIn && <SingIn />}
      {isSignedIn && <SignUp handleSignIn={handleSignIn} />}
      <div className="app-img-btn">
        <img className="app-terriermon" src={terriermon} alt="terriermon" />
        {!isSignedIn && (
          <button className="app-btn" type="button" onClick={handleSignIn}>
            Sign up
          </button>
        )}
        {isSignedIn && (
          <button className="app-btn" type="button" onClick={handleSignIn}>
            Sign in
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
