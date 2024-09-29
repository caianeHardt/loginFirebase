import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.js";
import Register from "./pages/register/register.js";
import Home from './pages/home/home.js'
import User from './pages/user/user.js'
import Initial from './pages/initial/initial.js'


const Rota = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<User />} />
            <Route path="/initial" element={<Initial />}/>
        </Routes>
        </BrowserRouter>
    );
};

export default Rota;