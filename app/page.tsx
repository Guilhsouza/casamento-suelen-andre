'use client'
import { imperialScript, lato, rubik } from './fonts/index'
import Header from './components/Header'
import './css/santaTeresinha.css'
import './css/backgroundImage.css'
import { Countdown } from './components/Countdown'

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-image h-svh bg-bottom sm:h-screen md:bg-position-[center_60%] xl:bg-position-[center_57%]'>
          <Header />
          <h3 className={`content text-white text-center mx-6 sm:hidden ${rubik.className}`}>06 | 06 | 2026</h3>
          <h2 className={`content text-white text-center mx-6 mt-2 sm:mt-0 text-6xl sm:text-7xl ${imperialScript.className}`}>Suelen & André</h2>
          <h3 className={`content text-white mx-6 hidden sm:flex justify-center ${rubik.className}`}>06 | 06 | 2026</h3>
        </section>

        <section className='bg-amber-50 py-12 px-6 sm:px-24'>
          <h3 className={`text-3xl mb-6 text-center ${imperialScript.className}`}>Nosso Grande Dia</h3>
          <p className={`text-lg text-center ${lato.className}`}>
            É com imensa alegria que convidamos você para celebrar conosco o dia mais especial de nossas vidas: nosso casamento!
            Após anos de amor, companheirismo e crescimento mútuo, decidimos oficializar nossa união diante de nossos familiares e amigos.
          </p>
        </section>

        <section className='flex flex-col items-center bg-amber-200 p-5'>
          <h2 className={`${lato.className} my-5 text-center text-3xl`}>Contagem Regressiva</h2>
          <Countdown />
        </section>

        <section>
          <h3 className={`text-3xl my-5 text-center  ${imperialScript.className}`}>A Cerimonia</h3>

          <div className='ceremony-image h-96 m-5 rounded-2xl sm:h-[500px] md:h-[600px] lg:h-[700px] bg-center'></div>
        </section>
      </main>
    </>
  );
}

