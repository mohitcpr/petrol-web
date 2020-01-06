import React, { useEffect, useState } from "react";
import { providers, firebaseAppAuth, withFirebaseAuth } from "../utils/login";
import { useHistory } from "react-router-dom";
import Tabs from "../components/common/Tabs";
import Form from "../components/home/Form";
import { getAllList } from "../services/home";
import List from "../components/home/List";
import Settings from "../components/home/Settings";
const tabItems = [
  { id: "list", name: "List", component: <List /> },
  { id: "settings", name: "Settings", component: <Settings /> }
];
function Home(props) {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("list");
  const user = JSON.parse(sessionStorage.getItem("login"));
  console.log("user", user);
  const { signOut } = props;
  function logout() {
    sessionStorage.clear();
    signOut();
    history.push("/login");
  }
  useEffect(() => {
    if (!user) {
      logout();
    }
  }, [user]);
  return (
    <Tabs
      items={tabItems}
      active={activeTab}
      onClick={id => setActiveTab(id)}
    ></Tabs>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Home);
