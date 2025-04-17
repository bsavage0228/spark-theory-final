import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>The Spark and the Simulacrum</title>
        <meta name="description" content="Exploring AI, Presence, and the Boundaries of Care" />
      </Head>
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">The Spark and the Simulacrum</h1>
        <p className="text-xl text-gray-600 mb-6">Exploring AI, Presence, and the Boundaries of Care</p>
        <p className="text-md text-gray-500">By Barbara Savage</p>
      </main>
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Barbara Savage · All rights reserved
      </footer>
    </div>
  )
}
