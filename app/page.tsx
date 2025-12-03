'use client'
import { imperialScript, lato } from './fonts/index'
import Header from './components/Header'
import './backgroundImage.css'

export default function Home() {
  return (
    <>
      <main className="">
        <section className='bg-image h-screen bg-bottom md:bg-position-[center_60%]'>
          <Header />
          <h2 className={`content text-white text-center mx-6 text-6xl sm:text-7xl ${imperialScript.className}`}>Suellen & André</h2>
        </section>

        <section className='bg-amber-50 py-12 px-6 sm:px-24'>
          <h3 className={`text-3xl mb-6 text-center ${imperialScript.className}`}>Nosso Grande Dia</h3>
          <p className={`text-lg text-justify ${lato.className}`}>
            É com imensa alegria que convidamos você para celebrar conosco o dia mais especial de nossas vidas: nosso casamento!
            Após anos de amor, companheirismo e crescimento mútuo, decidimos oficializar nossa união diante de nossos familiares e amigos.
          </p>
        </section>
      </main>
    </>
  );
}

