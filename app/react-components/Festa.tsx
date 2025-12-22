import { imperialScript, lato } from "../fonts/index";
import party from '../images/party.jpg'
import partyInside from '../images/party-inside.jpeg'
import ImageCarousel from "./Carousel";

export default function Festa() {
    return (
        <div className='bg-amber-50'>
            <h3 className={`text-4xl lg:text-5xl mb-6 text-center text-gray-900 ${imperialScript.className}`}>A Festa</h3>
            <p className={`text-md lg:text-lg text-justify mx-5 text-gray-700 sm:px-14 ${lato.className}`}>
                Após a cerimônia, todos estão convidados a celebrar conosco na <strong>Espaço Momenti</strong>,
                localizada na Av. Engenheiro Carlos Reinaldo Mendes, 1540 - Jardim das Nações, Taubaté (SP).
            </p>
            <div>
                <h3 className={`text-4xl lg:text-5xl mt-6 text-center text-gray-900 ${imperialScript.className}`}>Local da Festa</h3>
                <div className='flex justify-center'>
                    <ImageCarousel image1={party} image2={partyInside} />
                </div>

                <div className='flex justify-center m-6'
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.4112217210086!2d-45.554988115881926!3d-23.082037692825317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccffe58dea357f%3A0xf2349b3891d6e04d!2sEspa%C3%A7o%20Momenti!5e0!3m2!1spt-BR!2sbr!4v1766058962260!5m2!1spt-BR!2sbr"
                        loading="lazy"
                        className='w-full rounded-xl max-w-2xl lg:max-w-4xl shadow-md border h-[180px] lg:h-[300px] border-amber-200'>
                    </iframe>
                </div>
            </div>
        </div>
    )
}