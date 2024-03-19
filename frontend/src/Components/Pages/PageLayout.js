import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"

function PageLayout () {
    return(
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default PageLayout