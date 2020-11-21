import React from 'react'

import { AppContextProvider, useAppContext } from '../context/Context'

import '../styles/globals.css'
import styles from '../styles/Home.module.css'

import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../theme'
import TopBar from '../components/TopBar'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoTitle: {
    flexGrow: 1,
  },
}))

function MyApp({ Component, pageProps }) {

  const classes = useStyles()

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <div className={styles.container}>

          <TopBar />

          <Component {...pageProps} />

          <footer className={styles.footer}>
            Powered by &nbsp;<b>Som Energia Renovathon Team 💚</b>
          </footer>
        </div>
      </AppContextProvider>
    </ThemeProvider>
  </>
}

export default MyApp
