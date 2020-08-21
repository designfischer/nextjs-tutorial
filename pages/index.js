import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hello motherfuckers
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
          <Link href="/posts/first-post"><a>Postzão</a></Link>
        </p>   

        <img src="/vercel.svg" alt="vercel logoo"/>     
      </main>      
    </div>
  )
}

