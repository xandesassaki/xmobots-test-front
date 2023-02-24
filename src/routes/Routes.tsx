import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "../pages/SignIn"

export const RoutesRender: React.FC = () => {
    return(
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}