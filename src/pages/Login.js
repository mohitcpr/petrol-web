import React, { useEffect } from "react";
import { providers, firebaseAppAuth, withFirebaseAuth } from "../utils/login";
import { useHistory } from "react-router-dom";

console.log("providers", providers);

function Login(props) {
  const history = useHistory();
  const { user, signOut, signInWithGoogle } = props;
  console.log("props", props);
  function responseGoogle(res) {
    console.log(res);
  }
  useEffect(() => {
    sessionStorage.clear();
    if (user) {
      sessionStorage.setItem("login", JSON.stringify(user));
      sessionStorage.setItem("loginType", "google");
      history.push("/home");
    }
  }, [user, history]);
  return (
    <div className="App">
      <header className="App-header">
        {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </header>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
