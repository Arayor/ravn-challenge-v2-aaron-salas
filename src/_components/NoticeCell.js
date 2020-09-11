import React from 'react'
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
const NoticeCell = (props) => {
    const theme = useTheme();
    return (
        <div style={theme.custom.centeredCell}>
            <Typography
                style={theme.custom.header}
                color="error">
                {props.message}
            </Typography>
        </div>
    )
}

export default NoticeCell