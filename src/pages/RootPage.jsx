import { Outlet } from "react-router-dom"
import MenuBar from "./Home/MenuBar"
import Footerpage from "./Home/Footerpage"

function RootPage() {
    return (
        <>
            <MenuBar />
            <Outlet />
            <Footerpage />
        </>
    )
}
export default RootPage