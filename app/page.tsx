'use client'
import { imperialScript, lato, rubik } from './fonts/index'
import Header from './react-components/Header'
import { Countdown } from './react-components/Countdown'
import "./css/backgroundImage.css"
import ImageCarousel from './react-components/Carousel'

export default function Home() {
  return (
    <>
      <main>
        <section id='inicio' className='bg-image h-svh bg-bottom sm:h-screen md:bg-position-[center_60%] xl:bg-position-[center_57%]'>
          <Header />
          <h3 className={`content text-white text-center pt-10 mx-6 sm:hidden ${rubik.className}`}>06 | 06 | 2026</h3>
          <h2 className={`content text-white text-center mx-6 mt-2 sm:mt-0 text-6xl sm:text-7xl ${imperialScript.className}`}>Suelen & André</h2>
          <h3 className={`content text-white mx-6 hidden sm:flex justify-center ${rubik.className}`}>06 | 06 | 2026</h3>
        </section>

        <section className='bg-amber-50 py-12 px-6 sm:px-14'>
          <h3 className={`text-4xl mb-6 text-center text-gray-900 ${imperialScript.className}`}>Nosso Grande Dia</h3>
          <p className={`text-lg text-justify ${lato.className} text-gray-700`}>
            É com imensa alegria que convidamos você para celebrar conosco o dia mais especial de nossas vidas: nosso casamento!
            Após anos de amor, companheirismo e crescimento mútuo, decidimos oficializar nossa união diante de nossos familiares e amigos.
          </p>
        </section>

        <section className='flex flex-col items-center bg-amber-200 p-5'>
          <Countdown />
        </section>

        <section id='cerimonia'>
          <h3 className={`text-4xl mt-12 mb-6 text-center text-gray-900 ${imperialScript.className}`}>A Cerimonia</h3>
          <p className={`text-lg text-justify mx-5 text-gray-700 sm:px-14 ${lato.className}`}>Será uma alegria enorme celebrar este momento tão especial ao lado de vocês.
            Nossa união será abençoada diante de Deus no dia <strong>06 de junho de 2026</strong>, às <strong>18h</strong>, na <strong>Praça Santa Teresinha</strong>,
            no centro de Taubaté (SP). <br /> Esperamos a presença de vocês para compartilharmos esse dia tão importante!</p>

          <div>
            <h3 className={`text-4xl mt-6 text-center text-gray-900 ${imperialScript.className}`}>Local da Cerimonia</h3>
            <div className='flex justify-center'>
              <ImageCarousel />
            </div>

            <div className='flex justify-center m-6'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7805823815893!2d-45.56418122581033!3d-23.031827242349618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf91c91edf627%3A0x85a9e3e200b69b6!2sPra%C3%A7a%20Santa%20Terezinha%20-%20Centro%2C%20Taubat%C3%A9%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1765386321065!5m2!1spt-BR!2sbr"
                height="200"
                loading="lazy"
                className='w-full rounded-xl max-w-2xl'>
              </iframe>
            </div>
          </div>
        </section>

        <section id='festa' className='mt-12'>
          <h3 className={`text-4xl mb-6 text-center text-gray-900 ${imperialScript.className}`}>A Festa</h3>
        </section>
      </main >
    </>
  );
}

