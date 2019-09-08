// - Basic -
import React from 'react'
// - Redux -
import { connect } from 'react-redux'

function handler(){
    return (
        <React.Fragment>
            Testing
        </React.Fragment>
    )
}

export default connect(
    null,
    null
)(handler)