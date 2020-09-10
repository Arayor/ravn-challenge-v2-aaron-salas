import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const COLORS = {
    ravnBlack: '#121212',
    textDark: '#333333',
    textLight: '#828282',
    textEmphasis: '#EC5757'
}


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
    }
});

export default function Theming(props) {
    return (
        <MuiThemeProvider theme={theme}>
            {props.children}
        </MuiThemeProvider>
    );
}