import { useAppContext } from '../context/Context'

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  const { variableState, setVariableState } = useAppContext()

  return (
    <div>
      <Head>
        <title>Cajón kWh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <a href="#">📦</a>
          <h1 className={styles.title}>
            <a href="#">⚡️ Cajón kWh ⚡️</a>
          </h1>
        </div>

        <p className={styles.description}>
          Las personas como generadoras de buena energía positiva
        </p>

        <div className={styles.grid}>

          <Link href={ variableState?.user ? "/interactions" : "/login"}>
            <a className={styles.card}>
              <h3>Añadir interacción &rarr;</h3>
              <p>Cuidados, saberes, experiencias</p>
            </a>
          </Link>

          <Link href={ variableState?.user ? "/interactions" : "/login"}>
            <a className={styles.card}>
              <h3>Explorar interacciones &rarr;</h3>
              <p>Ver las interacciones próximas a mi</p>
            </a>
          </Link>

          <Link href={ variableState?.user ? "/interactions" : "/login"}>
            <a className={styles.card}>
              <h3>Aportar excedentes KWh &rarr;</h3>
              <p>Aportar mis excedentes de energía</p>
            </a>
          </Link>

          <a href="#" className={styles.card}>
            <h3>Comunidades &rarr;</h3>
            <p>
              Explorar comunidades
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
