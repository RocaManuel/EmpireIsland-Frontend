// - Basic -
import React from 'react'
// - Material UI -
import { Avatar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    avatar: {
        background: '#FFFFFF',
        color: '#05386B',
        width: '4em',
        height: '4em',
        fontSize: '2em',
        fontWeight: 100,
    },
    grid: {
        padding: '2em'
    }
})

export default function PortableProfile(props: any) {
    const classes = useStyle()
    return (
        <React.Fragment>
            <Grid className={classes.grid} container direction='column' justify='center' alignContent='center'>
                <Grid item xs>
                    <Avatar className={classes.avatar}> {props.username.charAt(0)} </Avatar>
                    <Typography variant={'h5'} > {props.username} </Typography>
                    <Typography variant={'h6'} > {props.minecraftUsername} </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}