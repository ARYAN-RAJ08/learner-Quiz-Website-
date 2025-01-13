import React, { lazy } from "react";
import Navbar from "./Component/Navbar";
import Heading from "./Component/Heading";
import MainBody from "./Component/MainBody";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClassIX from "./Component/Class9";
import ClassX from "./Component/Class10";
import ClassXI from "./Component/Class11";
import ClassXII from "./Component/Class12";
import Test from "./Component/test";
import LogIn from "./Component/Login";
import SingUp from "./Component/SingUpS";
import Contact from './Component/Contact'
import Error from './Component/Error'

export default function App() {
    const NavbarRouter = createBrowserRouter([
        {
            path: "/",
            element: <>
                <Navbar />
                <Heading />
                <MainBody />
            </>
        },
        {
            path: "/aboutus",
            element: <>
                <h1>home</h1>
            </>
        },
        {
            path: "/contactus",
            element: <>
                <Navbar />
                <Contact />
            </>
        },
        {
            path: '/login',
            element: <>
                <LogIn />
            </>
        },
        {
            path: '/signup',
            element: <>
                <SingUp />
            </>
        },

        {
            path: "/class9",
            element: <>
                <Navbar />
                <Heading />
                <ClassIX />
            </>
        },
        {
            path: "/class10",
            element: <>
                <Navbar />
                <Heading />
                <ClassX />
            </>
        },
        {
            path: "/class11",
            element: <>
                <Navbar />
                <Heading />
                <ClassXI />
            </>
        },
        {
            path: "/class12",
            element: <>
                <Navbar />
                <Heading />
                <ClassXII />
            </>
        },
        {
            path: "/test",
            element: <>
                <Test />
            </>
        },
        {
            path: "*",
            element: <>
                <Error />
            </>
        }
    ])
    return (
        <>
            <RouterProvider router={NavbarRouter} />
        </>
    )
}