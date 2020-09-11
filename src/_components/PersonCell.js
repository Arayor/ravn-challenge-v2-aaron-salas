import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

const PersonCell = (props) => {
    return (
        <div >
            <ListItem button onClick={props.onClick} >
                <ListItemText primary={props.name} secondary={props.detail} />
                <ChevronRightIcon />
            </ListItem>
            <Divider />
        </div >
    )
}

export default PersonCell