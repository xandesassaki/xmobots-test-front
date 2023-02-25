import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { SignIn } from "../pages/SignIn"

export const RoutesRender: React.FC = () => {
    return(
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}