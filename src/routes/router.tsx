import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/Login"
import SignUpPage from "../pages/register"
import Home from "../pages/Home"





const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<SignUpPage />}/>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes