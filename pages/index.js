import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import imgQrcode from '../public/qrcode.png'

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <Image
          className={styles.img}
          src={imgQrcode}
          alt="imagem de um qrcode"
        />
        <h2>Access error, you are in the Back-End of the project!</h2>

        <p>
          Page error, to access MenuOnline scan the Qrcode above or access the
          link below
        </p>

        <div className={styles.attribution}>
          <span className={styles.att}>Project here:</span>{' '}
          <a
            href="http://191.101.234.188/login"
            target="_blank"
            rel="noreferrer"
          >
            MenuOnline teste 1
          </a>
          .
        </div>
      </div>
    </div>
  )
}
