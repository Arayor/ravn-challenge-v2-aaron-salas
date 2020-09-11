import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from "../Theme";
import { PersonDetail } from "../_components/PersonDetail";
import PeopleList from '../_components/PeopleList'

function ResponsiveDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();

    const [selected, setSelected] = useState({})
    const { drawerToggle } = props

    return (
        <div className={classes.root}>
            <nav className={classes.drawer} aria-label="characters">
                <Hidden smUp >
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={props.mobileOpen}
                        onClose={drawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        style={theme.custom.drawer}
                    >
                        <PeopleList setSelected={setSelected} drawerToggle={drawerToggle} />
                    </Drawer>
                </Hidden>
                <Hidden xsDown>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <PeopleList setSelected={setSelected} drawerToggle={drawerToggle} />
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <PersonDetail sel={selected} />
            </main>
        </div >
    );
}

export default ResponsiveDrawer;