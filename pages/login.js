import { useState, useEffect } from 'react'

import { useAppContext } from '../context/Context'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

export default function Login() {

  const router = useRouter()

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()

  const { variableState, setVariableState } = useAppContext()

  useEffect(() => {
    console.log(variableState)
  }, [variableState])

  const handleSubmit = (event) => {
    event.stopPropagation()
    setError(false)
    if(username === 'demo' && password === 'demo') {
      setVariableState({...variableState, user: { username, password }})
      router.push('/')
    } else {
      setError(true)
    }
  }

  return (
    <div>
      <Head>
        <title>Login | Cajón kWh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Paper className={styles.paper} elevation={0}>
          <h1 className={styles.pageTitle}>
            Iniciar sessión
          </h1>

          <p>
            Usuario: demo | Password: demo
          </p>

          <form className={styles.form}>
            <TextField
              required
              fullWidth
              autoFocus
              id="email"
              label="Usuario"
              name="email"
              variant="outlined"
              margin="normal"
              autoComplete="email"
              onChange={ (event) => setUsername(event.target.value) }
              value={username}
              error={error}
              helperText={error && 'Usuario o password incorrectos'}
            />

            <TextField
              required
              fullWidth
              id="password"
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              margin="normal"
              error={error}
              onChange={ (event) => setPassword(event.target.value) }
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <div className={styles.submitContainer}>
              <Button
                type="button"
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                color="primary"
                disableElevation
                className={styles.submit}
              >
                Entrar
              </Button>
            </div>

            <Grid container>
              <Grid item xs={12} sm={6}>
                <Link href="#" variant="body2">He olvidado la password</Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link href="/register"><a>No tengo cuenta</a></Link>
              </Grid>
            </Grid>
            <Box mt={2}>
            </Box>
          </form>

        </Paper>

      </main>
    </div>
  )
}
