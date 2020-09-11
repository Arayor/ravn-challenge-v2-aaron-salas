import React from 'react'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
const DataCell = (props) => {
    const theme = useTheme();
    return (
        <div>
            <div style={theme.custom.dataCell}>
                <Typography
                    style={theme.custom.header}
                    color="secondary">
                    {props.title}
                </Typography>
                <Typography
                    style={theme.custom.header}
                    color="primary">
                    {props.description}
                </Typography>
            </div>
            <Divider></Divider>
        </div>
    )
}

export default DataCell