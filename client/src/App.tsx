import { useEffect } from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    const appName = import.meta.env.VITE_PROJECT_NAME || "Mon App";
    document.title = appName;
  }, []);

  return (
    <>
      <Outlet />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
