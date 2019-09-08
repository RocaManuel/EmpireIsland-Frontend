// - Basic -
import React from 'react'
// - Redux -
import { connect } from 'react-redux'
// - Container -
import HomeComponent from '../../Container/Home'
import NavBar from '../../Container/Navbar'

function Home(){
    return (
        <React.Fragment>
            <HomeComponent />
        </React.Fragment>
    )
}

export default connect(
    null,
    null
)(Home)