// - Basic -
import React from 'react'
// - Redux -
import { connect } from 'react-redux'
// - Containers -
import LogIn from '../../Container/Login'

function handler(){
    return (
        <React.Fragment>
            <LogIn />
        </React.Fragment>
    )
}

export default connect(
    null,
    null
)(handler)