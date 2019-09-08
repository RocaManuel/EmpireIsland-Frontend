import React from 'react'
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux'

const isUserLoggedIn = true

function SecureRoute(props: any){
    const { component: Component, ...rest } = props
    return (
        <Route {...rest} render={(props: any) => (
            isUserLoggedIn
            ? <Component {...props} />
            : <Redirect to='/' />
        )} />
    )
}

export default connect(
    null,
    null
)(SecureRoute)