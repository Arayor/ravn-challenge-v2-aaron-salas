import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
const LoadingCell = () => {
    const theme = useTheme();
    return (
        <div style={theme.custom.cell}>
            <CircularProgress
                size={20}
                style={theme.custom.circularProgress}
                color="secondary"
            />
            <Typography
                style={theme.custom.header}
                color="secondary">
                Loading
            </Typography>
        </div>
    )
}

export default LoadingCell
