import React from 'react'

import styles from '../styles/Home.module.css'

import { useAppContext } from '../context/Context'
import {  makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: '2rem'
  },
  logoTitle: {
    flexGrow: 1,
  },
}))

const TopBar = () => {

  const classes = useStyles()
  const { variableState, setVariableState } = useAppContext()

  return (
    <AppBar position="static" color="white" elevation={0}>
    <Toolbar>
      <Link href="/">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          📦
        </IconButton>
      </Link>
      <Typography variant="h6" className={styles.logoTitle}>

      </Typography>

      {
        (!variableState?.user?.username) ?
        <Link href="/login">
          <Button color="inherit">Iniciar sessión</Button>
        </Link>
        :
        <Button color="inherit" onClick={ () => setVariableState({...variableState, user: false}) }>Cerrar sessión</Button>
      }

    </Toolbar>
  </AppBar>
)
}

export default TopBar
