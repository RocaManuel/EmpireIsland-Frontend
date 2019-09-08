// - Basic -
import React from 'react'
// - Material UI -
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
// - Components -
import Module from '../Components/Module'
import PortableProfile from '../Components/Portable_Profile/index';
import Servers from './Servers';
import News from './News';
import SquareButtons from './SquareButtons';

const useStyle = makeStyles({
    root: {
        marginTop: '10vh'
    }
})

const servers = [{ server: 'vanilla', id: '1' }, { server: 'mods', id: '2' }, { server: 'skyblock', id: '3' }, { server: 'missions', id: '4' }]
const news = [{ id: 1, title: 'This is a long test text', picture: 'sarasa', date: 'sarasa' }, { id: 2, title: 'This is a long test text', picture: 'sarasa', date: 'sarasa' }]
const buttons = [{ id: 1, name: 'discord', redirect: '' }, { id: 2, name: 'forum', redirect: '' }, { id: 3, name: 'rules', redirect: '' }, { id: 4, name: 'discord', redirect: '' }]

export default function Home(props: any) {
    const classes = useStyle()
    return (
        <React.Fragment>
            <Container className={classes.root}>
                <Grid container direction='row' spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Module >
                            <PortableProfile username={'Sandohar'} minecraftUsername={'SoFaTex'} />
                        </Module>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9} spacing={8}>
                        <Module showHeader>
                            <Servers servers={servers} />
                        </Module>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Module showHeader>
                            <News news={news} />
                        </Module>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Module showHeader>
                        </Module>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Module showHeader>
                            <SquareButtons buttons={buttons} />
                        </Module>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}