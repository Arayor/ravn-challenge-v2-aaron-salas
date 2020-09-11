import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from '../_helpers/Theme';

function Header(props) {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <AppBar position="absolute" style={theme.custom.appBar}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='start'
                    onClick={props.drawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography style={theme.custom.header} noWrap>
                    Ravn Star Wars Registry
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;