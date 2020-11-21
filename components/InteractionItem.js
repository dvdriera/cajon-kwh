import React from 'react'

import Link from 'next/link'

import styles from '../styles/Home.module.css'

import { useAppContext } from '../context/Context'
import { makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  chipsContainer: {
    paddingTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

const InteractionItem = (props) => {

  const {
    title = 'Título interacció',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location = 'Girona',
    user = 'Usuario',
    value = '5 kWh'
  } = props

  const classes = useStyles()

  return (
    <Link href="/interaction">
      <Card elevation={0}>
        <CardContent>
          <Link href={`/interaction`}>
            <Typography gutterBottom variant="h5" component="h2">
              { title }
            </Typography>
          </Link>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
            { description }
          </Typography>
          <div className={classes.chipsContainer}>
            <Chip label={ <><svg xmlns="http://www.w3.org/2000/svg" className={styles.svg}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg> { location }</> } size="small" />
            <Chip label={ <><svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg> { user }</> } size="small" />
            <Chip color="primary" label={ <><svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg> {value} </> } size="small" />
          </div>
        </CardContent>
      </Card>
    </Link>
)
}

export default InteractionItem
