import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./routes/HomePage";
import Layout from "./containers/Layout";
import {PageNotFound, WIPPage} from "./routes/empty-pages"

const App = () => {

    const allRoutes = [
        {path: "", element: <HomePage/>, onNavBar: true, navName: "Home"},
        {path: "projects", element: <WIPPage/>, onNavBar: true, navName: "My Projects"},
        {path: "about", element: <WIPPage/>, onNavBar: true, navName: "About Me"},
        {path: "*", element: <PageNotFound/>, onNavBar: false},
    ]

    const getRoutes = () => {
        return allRoutes.map(r =>
            <Route key={r.path} path={`/${r.path}`} element={r.element}/>
        )
    }

    const getNavBarRoutes = () => {
        return allRoutes
            .filter(r => r.onNavBar && r.navName)
            .map(r => {
                return {path: r.path, name: r.navName}
            });
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout navRoutes={getNavBarRoutes()}/>}>
                        <Route index element={<HomePage/>}/>
                        {getRoutes()}
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
