import React from "react";
import {Footer,Header,Contact,About,Home,User} from './index'
import {Outlet} from 'react-router-dom'

function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout