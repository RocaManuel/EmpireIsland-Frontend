import React from 'react'
import PropTypes from 'prop-types';
// - Material UI -
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root: {
        width: '5em',
        height: '5em',
        background: 'black'
    }
})


function SquareButton(props: any){
    const classes = useStyle()
    const { root  } = classes
    const { child, className } = props
    return(
        <Box className={className ? className : root }>
            {child}
        </Box>
    )
}

SquareButton.propTypes = {
    background: PropTypes.oneOf(['vanilla', 'skyblock', 'missions', 'mods', 'discord', 'forum', 'rules']),
    className: PropTypes.string
}

export default SquareButton
