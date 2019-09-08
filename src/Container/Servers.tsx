// - Basic -
import React from 'react'
import PropTypes from 'prop-types';
// - Material UI -
import { Grid } from '@material-ui/core'
import makeStyles from '@material-ui/styles/makeStyles'
// - Components -
import SquareButton from '../Components/Square_Button'

const useStyle = makeStyles({
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

function Servers(props: any) {
    const classes = useStyle()
    const { servers } = props
    return (
        <Grid container direction='row' spacing={1} className={classes.serverLogoModule}>
            {servers.map((item: any) => {
                return (
                    <Grid className={classes.serverLogoContainer} key={item.id} item xs={6} sm={6} md={3}>
                        <SquareButton className={classes.serverLogo} background={item.server} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

Servers.propTypes = {
    servers: PropTypes.array.isRequired
}

export default Servers