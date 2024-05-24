import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Error from "../pages/Error"; 

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/*" element={<Error />}></Route>
        </Routes>
    )
}

export default CustomRoutes