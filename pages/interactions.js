import { useState, useEffect } from 'react'
import { useAppContext } from '../context/Context'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'


import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Checkbox from '@material-ui/core/Checkbox'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import InteractionItem from '../components/InteractionItem'

export default function Interactions() {

  const router = useRouter()

  const { variableState, setVariableState } = useAppContext()

  let items = [
    {
      title : 'Necesito el arreglo de una ventana',
      description : 'Mi ventana deja entrar aire, es de un solo vidrio y buscaba una manera de que no se escape el calor ',
      location : 'Pamplona',
      user : 'Borja',
      value : '3 - 6 kWh'
    },
    {
      title : 'Aporto arreglar el pinchazo de una rueda de bicicleta',
      description : 'Desde pequeña me gustan mucho las bicicletas. Si alguien necesita arreglar el pinchazo de una rueda, podéis contar conmigo! :D',
      location : 'Girona',
      user : 'Marta',
      value : '1 - 3 kWh'
    },
    {
      title : 'Aporto curso nudos para artesania',
      description : 'Clases prácticas para el correcto enudado de arrastre, as, corredizo, corredor, llano, pescador, emplames',
      location : 'Girona',
      user : 'Xavi',
      value : '4 - 5 kWh'
    },
    {
      title : 'Ayudo a instalar placas solares',
      description : 'Soy instaladora y puedo aportar mis servicios a quien lo necesite.',
      location : 'Sant Celoni',
      user : 'Joana',
      value : '10 - 14 kWh'
    },
    {
      title : 'Necesito ayuda para instalar optimizador de sombras',
      description : 'He instalado mis placas, pero he tenido un problema con el optimizador de sombras que he instalado, alguien me puede ayudar?',
      location : 'Girona',
      user : 'David',
      value : '6 - 10 kWh'
    }
  ]

  items = [ ...items, ...items ]

  return (
    <div>
      <Head>
        <title>Interacciones | Cajón kWh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.pageTitle}>
        🤝 Interacciones próximas a Girona
        </h1>
        <Container>
          <Grid container spacing={3}>
            {
              items && items.map( item => (
                <Grid className={styles.item} item xs={12} sm={3}>
                  <InteractionItem
                    {... item}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Container>

        <div className={styles.moreContainer}>
          <Button variant="outlined" color="primary">
            Cargar más interacciones
          </Button>
        </div>

      </main>
    </div>
  )
}
