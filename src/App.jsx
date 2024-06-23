import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import User from "./components/user/User";
import Single from "./components/single/Single";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
