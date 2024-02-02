import Header from "../components/header";
import {Outlet} from "react-router-dom";


const Layout = (
    props: {
        navRoutes: { path: string, name?: string }[];
    }
) => {
    return <>
        <Header navRoutes={props.navRoutes}/>
        <Outlet/>
    </>
}

export default Layout;