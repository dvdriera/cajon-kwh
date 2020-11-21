import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

export default function Register() {

  const [firstname, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()

  const handleSubmit = () => {

  }

  return (
    <div>
      <Head>
        <title>Registro | Cajón kWh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Paper className={styles.paper} elevation={0}>
          <Container>
          <h1 className={styles.pageTitle}>
            Registro de usuario
          </h1>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  label="Nombre"
                  name="name"
                  variant="outlined"
                  margin="normal"
                  onChange={ (event) => setName(event.target.value) }
                  value={username}
                  error={error}
                  helperText={error && error}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Apellidos"
                  name="name"
                  variant="outlined"
                  margin="normal"
                  onChange={ (event) => setName(event.target.value) }
                  value={username}
                  error={error}
                  helperText={error && error}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  margin="normal"
                  autoComplete="email"
                  onChange={ (event) => setUsername(event.target.value) }
                  value={username}
                  error={error}
                  helperText={error && error}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  label="Password"
                  name="password"
                  variant="outlined"
                  margin="normal"
                  onChange={ (event) => setPassword(event.target.value) }
                  value={password}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Municipio"
                  name="city"
                  variant="outlined"
                  margin="normal"
                  onChange={ (event) => setUsername(event.target.value) }
                  value={username}
                  error={error}
                  helperText={error && error}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Provincia"
                  name="state"
                  variant="outlined"
                  margin="normal"
                  onChange={ (event) => setUsername(event.target.value) }
                  value={username}
                  error={error}
                  helperText={error && error}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  label="Codigo CUPS"
                  name="state"
                  variant="outlined"
                  margin="normal"
                  onChange={ (event) => setUsername(event.target.value) }
                  value={username}
                  error={error}
                  helperText={error && error}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Acepto los terminos legales"
                  />
                  {
                    error &&
                    <FormHelperText variant="standard" error={true}>Hay algun problema!</FormHelperText>
                  }

                  <div className={styles.submitContainer}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      disableElevation
                      className={styles.submit}
                    >
                      Registrar
                    </Button>
                  </div>
              </Grid>
            </Grid>
          </form>

          </Container>
        </Paper>

      </main>
    </div>
  )
}
