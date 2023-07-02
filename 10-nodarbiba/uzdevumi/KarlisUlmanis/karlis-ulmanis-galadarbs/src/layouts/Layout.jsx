import { Outlet } from "react-router"
import Header from "../comp/Header"
import Footer from "../comp/Footer"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout