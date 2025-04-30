import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/Login"
import SignUpPage from "../pages/register"





const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<SignUpPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes