import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header  */}
      <Header/>
      <main>
        {/* sidebar  */}
        {/* feeds  */}
        {/* widgets  */}

      </main>
    </div>
  )
}
