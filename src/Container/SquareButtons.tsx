// - Basic -
import React from 'react'
import PropTypes from 'prop-types';
// - Material UI -
import makeStyles from '@material-ui/styles/makeStyles';
import { Grid } from '@material-ui/core'
// - Components -
import SquareButton from '../Components/Square_Button';

const useStyles = makeStyles({
    serverLogoContainer: {
        padding: '1em'
    },
    serverLogo: {
        width: '10em',
        height: '10em',
        background: 'rgba(0,0,0,1)',
        '&:hover': {
            width: '10.5em',
            height: '10.5em',
            background: 'rgba(0,0,0,0.2)'
        }
    },
    serverLogoModule: {
        padding: '1em',
        maxWidth: '100%'
    }
})

function SquareButtons(props: any) {
    const classes = useStyles()
    const { buttons } = props
    return (
        <Grid container direction='row' spacing={1} className={classes.serverLogoModule}>
            {buttons.map((item: any) => {
                return (
                    <Grid key={item.id} item xs={6} sm={6} md={6}>
                        <SquareButton className={classes.serverLogo} background={item.name} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

SquareButtons.propTypes = {
    buttons: PropTypes.array.isRequired
}

export default SquareButtons