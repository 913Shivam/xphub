import { useEffect, useState } from "react";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const updatePathname = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", updatePathname);

    return () => window.removeEventListener("popstate", updatePathname);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setPathname(path);
  };

  if (pathname === "/dashboard") {
    return <DashboardPage onNavigate={navigate} />;
  }

  return <AuthPage onNavigate={navigate} />;
};

export default App;
