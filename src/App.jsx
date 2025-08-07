import { useState } from "react";
import Router from "./routes/Router";
import Navbar from "./components/Navbar";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <>
      <Router />
    </>
  );
}
