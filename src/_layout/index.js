import React from 'react';
import Drawer from "./Drawer";
import Header from "./Header";

const Layout = props => {

    return (
        <div>
            <Header />
            <Drawer >
                {props.children}
            </Drawer>
        </div>
    )
}

export default Layout 