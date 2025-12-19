'use client'

import 'dotenv/config'
import { imperialScript, lato, rubik } from './fonts/index'
import Header from './react-components/Header'
import { Countdown } from './react-components/Countdown'
import "./css/backgroundImage.css"
import { useRef } from 'react'
import Form from './react-components/Form'
import Cerimonia from './react-components/Cerimonia'
import Festa from './react-components/Festa'
import BreakSect from './react-components/BreakSect'
import Presentes from './react-components/Presentes'

export default function Home() {
  const imgRef = useRef(null);

  return (
    <div className='bg-amber-50'>
      <main>
        <section
          id='inicio'
          ref={imgRef}
          className='bg-image h-svh bg-bottom sm:h-screen md:bg-position-[center_60%] xl:bg-position-[center_57%]'>
          <Header imgRef={imgRef} />
          <h3 className={`content text-white text-center pt-10 mx-6 sm:hidden ${rubik.className}`}>06 | 06 | 2026</h3>
          <h2 className={`content text-white text-center mx-6 mt-2 sm:mt-0 text-6xl sm:text-7xl ${imperialScript.className}`}>Suelen & André</h2>
          <h3 className={`content text-white mx-6 hidden sm:flex justify-center ${rubik.className}`}>06 | 06 | 2026</h3>
        </section>

        <section className='bg-amber-50 py-12 px-6 sm:px-14'>
          <h3 className={`text-4xl lg:text-5xl mb-6 text-center text-gray-900 ${imperialScript.className}`}>Nosso Grande Dia</h3>
          <p className={`text-md lg:text-lg text-justify ${lato.className} text-gray-700`}>
            É com imensa alegria que convidamos você para celebrar conosco o dia mais especial de nossas vidas: nosso casamento!
            Após anos de amor, companheirismo e crescimento mútuo, decidimos oficializar nossa união diante de nossos familiares e amigos.
          </p>
        </section>

        <section className='flex flex-col items-center bg-amber-200 p-5'>
          <Countdown />
        </section>

        <BreakSect />

        <section id='cerimonia' className='bg-amber-50'>
          <Cerimonia />
        </section>

        <BreakSect />

        <section id='festa' className='bg-amber-50'>
          <Festa />
        </section>

        <BreakSect />

        <section id='presentes' className='bg-amber-50'>
          <Presentes />
        </section>

        <BreakSect />

        <section id='confirme-presenca' className='bg-amber-50'>
          <Form />
        </section>
      </main >
    </div>
  );
}

