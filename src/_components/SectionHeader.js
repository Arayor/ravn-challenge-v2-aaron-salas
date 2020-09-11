import React from 'react'
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
const SectionHeader = (props) => {
    const theme = useTheme();
    return (
        <div style={theme.custom.headerCell}>
            <Typography
                style={theme.custom.header}
                color="primary">
                {props.message}
            </Typography>
        </div>
    )
}

export default SectionHeader