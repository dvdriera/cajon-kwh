import { useState, useEffect } from 'react'
import { useAppContext } from '../context/Context'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Typography from '@material-ui/core/Typography'

import styles from '../styles/Home.module.css'

import Slider from '@material-ui/core/Slider'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Checkbox from '@material-ui/core/Checkbox'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import InteractionItem from '../components/InteractionItem'

export default function Interaction(props) {

  const router = useRouter()

  const {
    title = 'Título interacció',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location = 'Girona',
    user = 'Usuario',
    value = '5 kWh'
  } = props

  const { variableState, setVariableState } = useAppContext()

  return (
    <div>
      <Head>
        <title>Detalles de la interacción | Cajón kWh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.pageTitle}>
        🤝 Detalles de la interacción
        </h1>

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <InteractionItem
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={styles.paperColumn} elevation={0}>
                <div className={styles.saldo}>Tu saldo actual: <span>365 kWh</span></div>

                <div className={styles.valor}>
                  <Typography id="continuous-slider" gutterBottom>
                    Valor de la interacción
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item>
                      4 kWh
                    </Grid>
                    <Grid item xs>
                      <Slider min={4} max={5} step={1} />
                    </Grid>
                    <Grid item>
                      5 kWh
                    </Grid>
                  </Grid>
                </div>

                <div className={styles.interactionButton}>
                  <Button variant="contained" color="primary" disableElevation fullWidth>
                    Me interesa!
                  </Button>
                </div>
                <div className={styles.interactionButton}>
                  <Button variant="outlined" color="primary" fullWidth>
                    Contactar
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23727.462823970644!2d2.8011147500458162!3d41.98025141317164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae72798c8fdab%3A0xaf3845b6a5296a6f!2sGirona!5e0!3m2!1sca!2ses!4v1605967345978!5m2!1sca!2ses" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </Grid>
          </Grid>
        </Container>

      </main>
    </div>
  )
}
