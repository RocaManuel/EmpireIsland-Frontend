// - Basic -
import React from 'react'
import PropTypes from 'prop-types'
// - Components -
import New from '../Components/New'
import { Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            background: 'rgba(0,0,0,0.25)'
        }
    },
    divider: {
        margin: '1em'
    }
})


function News(props: any) {
    const { news } = props
    const classes = useStyles()
    return (
        <React.Fragment>
            {news.map(function (item: any) {
                return (
                    <React.Fragment>
                        <div className={classes.root}>
                            <New orientation={'horizontal'} new={item} key={item.id} />
                        </div>
                        {news.length >= 1 && item.id < news.length ?
                            <Divider light className={classes.divider} />
                            :
                            undefined
                        }
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

News.propType = {
    news: PropTypes.array.isRequired
}

export default News