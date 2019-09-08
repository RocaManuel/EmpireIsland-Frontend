// - Basic - 
import React from 'react'
// - Material UI -.
import { makeStyles } from '@material-ui/core/styles';
import { Box, CardActionArea, Card } from '@material-ui/core';

// - Some X -

const useStyles = makeStyles({
    card: {
        width: '100%',
        height: '100%',
        background: '#5CDB95'
    },
    box: {
        width: '100%',
        height: '5vh',
        background: '#8EE4AF',
        color: '#05386B',
        textAlign: 'center',
        fontSize: '2em'
    },
    paper: {
        background: 'rgba(0,0,0,0)'
    }
});

function Header(props: any) {
    const classes = useStyles();
    const { title } = props;
    return (
        <Box className={classes.box}>
            {title || ''.toUpperCase()}
        </Box>
    )
}

export default function Module(props: any) {
    const classes = useStyles();
    const { showHeader, children } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                {showHeader ? <Header {...props} /> : null}
                {children}
            </CardActionArea>
        </Card>
    )
}