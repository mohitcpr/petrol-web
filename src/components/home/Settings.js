import React, { useEffect } from "react";
import {
  providers,
  firebaseAppAuth,
  withFirebaseAuth
} from "../../utils/login";
import { useHistory } from "react-router-dom";

console.log("providers", providers);

function Login(props) {
  const history = useHistory();
  const { user, signOut, signInWithGoogle } = props;
  function logout() {
    sessionStorage.clear();
    signOut();
    history.push("/login");
  }
  return (
    <div className="App">
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
