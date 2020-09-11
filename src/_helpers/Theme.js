import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { STYLES } from './constants';

const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
    palette: {
        primary: {
            main: STYLES.COLORS.ravnBlack
        },
        secondary: {
            main: STYLES.COLORS.textLight
        },
        error: {
            main: STYLES.COLORS.textEmphasis
        }
    },
    overrides: {
        MuiListItemText: {
            primary: {
                fontSize: STYLES.FONT_SIZE.header,
                color: STYLES.COLORS.textDark
            },
            secondary: {
                fontSize: STYLES.FONT_SIZE.p,
                color: STYLES.COLORS.textLight
            },
            root: {
                marginRight: 16
            },
            multiline: {
                marginTop: 0,
                marginBottom: 0
            }
        },
        MuiListItem: {
            gutters: {
                padding: 16
            },
        },
        MuiToolbar: {
            regular: {
                minHeight: defaultTheme.mixins.toolbar.minHeight + 'px !important',
                height: defaultTheme.mixins.toolbar.minHeight,
            }
        }
    },
    custom: {
        header: {
            fontSize: STYLES.FONT_SIZE.header,
            fontWeight: '500',
            letterSpacing: '0.0125em',
        },
        paragraph: {
            fontSize: STYLES.FONT_SIZE.p,
            fontWeight: 'normal',
            letterSpacing: '0.0125em',
        },
        appBar: {
            zIndex: defaultTheme.zIndex.drawer + 1,
            height: defaultTheme.mixins.toolbar.minHeight
        },
        centeredCell: {
            display: 'flex',
            padding: 16,
            alignItems: 'center',
            justifyContent: 'center'
        },
        headerCell: {
            display: 'flex',
            padding: '32px 16px 8px 16px',
            alignItems: 'center',
        },
        dataCell: {
            display: 'flex',
            padding: 16,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        circularProgress: {
            marginRight: 8
        },
    }
});

//use this for custom breakpoints styles(not allowed in theme)
export const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none !important',
        },
    },
    drawerPaper: {
        width: STYLES.DRAWER_WIDTH.md,
        top: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.down('md')]: {
            width: STYLES.DRAWER_WIDTH.md,
        }
    },
    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        padding: STYLES.CONTENT_PADDING_HORIZONTAL.md,
        paddingTop: theme.spacing(3),
        marginLeft: STYLES.DRAWER_WIDTH.md,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            padding: STYLES.CONTENT_PADDING_HORIZONTAL.xs,
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