// - Baisc -
import React from 'react'
// - Material UI -
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navBar: {
      background: '#05386B'
    }
  }),
);

function NavBar(props: any) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

function shouldRenderNav(path: any){
  switch(path){
    case '/':
      return false
    case '/register':
      return false
    default:
      return true
  }
}

export default function RenderNavBar(props: any) {
  const shouldRender = shouldRenderNav('/mocked')
  return (
    <React.Fragment>
      { shouldRender ? <NavBar /> : undefined }
    </React.Fragment>
  )
}