import { imperialScript, lato, rubik } from "../fonts";
import CardPresentes from "./CardPresentes";
import { cafeteira, aspirador, jogoCama, jantar } from "../images/index.js"

export default function Presentes() {
    return (
        <div className="flex flex-col items-center">
            < h3 className={`text-4xl lg:text-5xl mb-6 text-center text-gray-900 ${imperialScript.className}`
            }>Lista de Presentes</h3>

            <p className={`text-gray-600 text-center mb-6 text-xs mx-6 ${lato.className}`}>
                ❤️ Cada presente desta lista representa um pedacinho do nosso novo começo, recebido com carinho via Pix ❤️
            </p>

            <div className="grid grid-cols-2 gap-2 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 mx-6">
                <CardPresentes
                    img={aspirador}
                    name="Passagens para lua de Mel na praia🏖️"
                    value="799,00"
                />
                <CardPresentes
                    img={aspirador}
                    name="Diaria Do Hotel🏨"
                    value="230,00"
                />
                <CardPresentes
                    img={cafeteira}
                    name="Cafeteira Dolce Gusto☕"
                    value="399,00"
                />
                <CardPresentes
                    img={aspirador}
                    name="Robô Aspirador🤖"
                    value="499,00"
                />
                <CardPresentes
                    img={jogoCama}
                    name="Jogo de Cama🛏️"
                    value="99,00"
                />
                <CardPresentes
                    img={jantar}
                    name="Aparelhos de Jantar Cerâmica🍽️"
                    value="139,00"
                />

            </div>

            <p className={`mt-6 text-gray-600 text-center mb-6 text-xs mx-6 ${lato.className}`}>
                Chave Pix: casamento.suelen.andre@gmail.com</p>
        </div>
    )
}