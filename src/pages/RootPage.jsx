import { Outlet } from "react-router-dom"
import MenuBar from "./Home/MenuBar"

function RootPage() {
    return (
        <>
            <MenuBar />
            <Outlet />
        </>
    )
}
export default RootPage