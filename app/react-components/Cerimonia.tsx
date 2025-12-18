import { imperialScript, lato } from '../fonts/index'
import ImageCarousel from '../react-components/Carousel'
import churchInside from '../images/santa-teresinha-inside.jpg'
import church from '../images/santa-teresinha.jpg'

export default function Cerimonia() {
    return (
        < div className='bg-amber-50'>
            < h3 className={`text-4xl lg:text-5xl mt-12 mb-6 text-center text-gray-900 ${imperialScript.className}`
            }>A Cerimônia</h3 >
            <p className={`text-md lg:text-lg text-justify mx-5 text-gray-700 sm:px-14 ${lato.className}`}>
                Nossa união será abençoada diante de Deus no dia <strong>06 de junho de 2026</strong>, às <strong>19:30h</strong>, na <strong>Praça Santa Teresinha</strong>,
                no centro de Taubaté (SP). <br /> Esperamos a presença de vocês para podermos compartilhar esse dia tão importante!</p>

            <div>
                <h3 className={`text-4xl lg:text-5xl mt-6 text-center text-gray-900 ${imperialScript.className}`}>Local da Cerimônia</h3>
                <div className='flex justify-center'>
                    <ImageCarousel image1={church} image2={churchInside} />
                </div>

                <div className='flex justify-center m-6'
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7805823815893!2d-45.56418122581033!3d-23.031827242349618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf91c91edf627%3A0x85a9e3e200b69b6!2sPra%C3%A7a%20Santa%20Terezinha%20-%20Centro%2C%20Taubat%C3%A9%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1765386321065!5m2!1spt-BR!2sbr"
                        loading="lazy"
                        className='w-full rounded-xl max-w-2xl lg:max-w-4xl shadow-md border h-[180px] lg:h-[300px] border-amber-200'>
                    </iframe>
                </div>
            </div>
        </div >
    )
}