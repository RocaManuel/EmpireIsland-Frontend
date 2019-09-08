// - Basic -
import React from 'react'
// - Material UI - 
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core';
// - Prop Types -
import PropTypes from 'prop-types';
// - Material UI Lab -
import Box from '@material-ui/core/Box';


const useStyle = makeStyles({
    root: {
        marginLeft: '0.1em',
        padding: '1em'
    }
})

function HorizontalNew(props: any) {
    const classes = useStyle()
    return (
        <Grid container direction='row' className={classes.root} spacing={2}>
            <Grid item xs={4}>
                <Box style={{ width: '8em', height: '8em', background: 'black' }}> </Box>
            </Grid>
            <Grid item xs={8}>
                <Grid alignContent='center' className={classes.root} container direction='column' spacing={1}>
                    <Grid item xs>
                        <Typography variant={'h6'}> {props.new.title} </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant={'subtitle1'}> {props.new.date} </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

function VerticalNew(prop: any) {
    return (
        <Grid>
            <Grid>
                sarasa
            </Grid>
            <Grid>
                sarasasa
            </Grid>
            <Grid>
                sarasa
            </Grid>
        </Grid>
    )
}

function New(props: any) {
    const { orientation } = props
    function getView() {
        switch (orientation) {
            case 'horizontal':
                return <HorizontalNew {...props} />
            case 'vertical':
                return <VerticalNew {...props} />
        }
    }
    return (
        <React.Fragment>
            {getView()}
        </React.Fragment>
    )
}

New.propTypes = {
    orientation: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
    new: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        picture: PropTypes.string
    }).isRequired
}

export default New