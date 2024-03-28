import { Outlet } from "react-router-dom"
import Home from "./Home/Home"

function RootPage() {
    return (
        <>
            <Home />
            <Outlet />
        </>
    )
}
export default RootPage