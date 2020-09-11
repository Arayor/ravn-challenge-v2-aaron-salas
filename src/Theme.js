import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const COLORS = {
    ravnBlack: '#121212',
    textDark: '#333333',
    textLight: '#828282',
    textEmphasis: '#EC5757'
}

const DRAWER_WIDTH = {
    sm: 240,
    md: 350
}

const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
    palette: {
        primary: {
            main: COLORS.ravnBlack
        },
        secondary: {
            main: COLORS.textLight
        },
        error: {
            main: COLORS.textEmphasis
        }
    },
    typography: {

    },
    custom: {
        header: {
            fontSize: '17pt',
            fontWeight: '500',
            lineHeight: '20pt',
            letterSpacing: '0.0125em',
        },
        paragraph: {
            fontSize: '14pt',
            fontWeight: 'normal',
            lineHeight: '17pt',
            letterSpacing: '0.0125em',
        },
        appBar: {
            zIndex: defaultTheme.zIndex.drawer + 1,
        },
        centeredCell: {
            display: "flex",
            padding: 16,
            alignItems: "center",
            justifyContent: "center"
        },
        headerCell: {
            display: "flex",
            padding: "32px 16px 8px 16px",
            alignItems: "center",
        },
        circularProgress: {
            marginRight: 8
        }
    }
});

//use this for custom breakpoints styles(not allowed in theme)
export const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: DRAWER_WIDTH.md,
        top: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.down('sm')]: {
            width: DRAWER_WIDTH.sm,
        }
    },
    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: DRAWER_WIDTH.md,
        [theme.breakpoints.down('sm')]: {
            marginLeft: DRAWER_WIDTH.sm,
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        }
    },
})
)

export default function Theming(props) {
    return (
        <MuiThemeProvider theme={theme} >
            {props.children}
        </MuiThemeProvider>
    );
}