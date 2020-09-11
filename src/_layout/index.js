import React from 'react';
import Drawer from './Drawer';
import Header from './Header';

const Layout = props => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div>
            <Header drawerToggle={handleDrawerToggle} />
            <Drawer drawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} >
                {props.children}
            </Drawer>
        </div>
    )
}

export default Layout 