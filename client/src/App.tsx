import { useEffect } from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { constants } from "../../setup/constants";

function App() {
  useEffect(() => {
    const appName = constants.APP_NAME || "Mon Projet";
    console.log("Nom du projet:", constants.APP_NAME);
    document.title = constants.APP_NAME || appName;
  }, []);

  return (
    <>
      <Outlet />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
