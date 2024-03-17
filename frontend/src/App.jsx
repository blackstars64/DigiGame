import { useState } from "react";
import terriermon from "./assets/terriermon.gif";
import SingIn from "./components/SingIn";
import SignUp from "./components/SignUp";
import "./scss/App.scss";

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

      <picture>
        <img
          className="app-terriermon"
          src={terriermon}
          alt="Terriermon qui se touche la joue"
        />
      </picture>
      {!isSignedIn && (
        <button className="btn-violet" type="button" onClick={handleSignIn}>
          Sign up
        </button>
      )}
      {isSignedIn && (
        <button className="btn-violet" type="button" onClick={handleSignIn}>
          Sign in
        </button>
      )}
    </section>
  );
}

export default App;
