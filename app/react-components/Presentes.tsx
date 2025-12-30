import { imperialScript, lato, rubik } from "../fonts";
import CardPresentes from "./CardPresentes";
import {
    cafeteira, aspirador, jogoCama, jantar, julius,
    buque, geladeira, hotel, cooktop, sala, aliancas, altar, buffet,
    aposentadoria, barba, boleto, capacete, cartao, cofrinho, churrasco, cueca, doces,
    drink, miojo, jantarRomantico, panelas, lingerie, macarrao, maquiagem, massagem, montador,
    netflix, noivaAnsiosa, pijamaFem, pijamaMasc, tanque,
} from "../images/index.js"

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
                    img={aliancas}
                    name="Contribuição para as alianças💍"
                    value="299,00"
                />
                <CardPresentes
                    img={churrasco}
                    name="Churrasco a dois após lua de mel🍖"
                    value="170,00"
                />
                <CardPresentes
                    img={altar}
                    name="Uma imagem para o nosso altar🙏"
                    value="350,00"
                />
                <CardPresentes
                    img={buffet}
                    name="Prioridade na fila do buffet👀"
                    value="129,00"
                />
                <CardPresentes
                    img={maquiagem}
                    name="Contribuição na maquiagem da noiva no dia do casamento💄"
                    value="150,00"
                />
                <CardPresentes
                    img={barba}
                    name="6 meses de barba feita do noivo🪒"
                    value="159,00"
                />
                <CardPresentes
                    img={cofrinho}
                    name="Ajuda financeira para o futuro do casal⏳"
                    value="555,00"
                />
                <CardPresentes
                    img={aposentadoria}
                    name="Ajuda para a aposentadoria do casal👵👴"
                    value="1500,00"
                />
                <CardPresentes
                    img={miojo}
                    name="Primeiro jantar em casa após o casados🍽️"
                    value="150,00"
                />
                <CardPresentes
                    img={doces}
                    name="Contribuição para a mesa de doces🍰"
                    value="129,00"
                />
                <CardPresentes
                    img={lingerie}
                    name="Ajude a noiva a comprar lingeries novas👙"
                    value="69,00"
                />
                <CardPresentes
                    img={pijamaFem}
                    name="Ajude a noiva a comprar pijamas novos👕"
                    value="115,00"
                />
                <CardPresentes
                    img={cueca}
                    name="Ajude o noivo a comprar cuecas novas🐺"
                    value="69,00"
                />
                <CardPresentes
                    img={pijamaMasc}
                    name="Ajude o noivo a comprar pijamas novos👕"
                    value="115,00"
                />

                <CardPresentes
                    img={aspirador}
                    name="Calmante para a noiva ansiosa😰"
                    value="100,00"
                />
                <CardPresentes
                    img={capacete}
                    name="Capacete para o noivo se o calmante não funcionar🪖"
                    value="200,00"
                />
                <CardPresentes
                    img={netflix}
                    name="SEIS MESES de netflix🎬"
                    value="269,40"
                />

                <CardPresentes
                    img={boleto}
                    name="Contribuição para pagar a fatura da lua de mel (SOCORRO)✈️"
                    value="179,00"
                />
                <CardPresentes
                    img={cartao}
                    name="Adote um boleto misterioso dos primeiros meses casados🎟️"
                    value="710,00"
                />
                <CardPresentes
                    img={buque}
                    name="Taxa para a noiva não jogar o buquê na sua namorada💐"
                    value="129,00"
                />
                <CardPresentes
                    img={macarrao}
                    name="Curso de culinária para o noivo🍲"
                    value="319,00"
                />
                <CardPresentes
                    img={tanque}
                    name="Encher o tanque para a viagem de lua de mel🍸"
                    value="320,00"
                />
                <CardPresentes
                    img={drink}
                    name="Drinks na piscina do Hotel🍸"
                    value="159,00"
                />
                <CardPresentes
                    img={jantar}
                    name="Jantar na lua de Mel🌙"
                    value="200,00"
                />
                <CardPresentes
                    img={massagem}
                    name="Massagem relaxante para os noivos💆‍♀️"
                    value="299,00"
                />
                <CardPresentes
                    img={montador}
                    name="Montador de móveis pro noivo não quebrar nada🛠️"
                    value="250,00"
                />
                <CardPresentes
                    img={cafeteira}
                    name="Cafeteira para tomar café de capsula☕"
                    value="399,00"
                />
                <CardPresentes
                    img={geladeira}
                    name="Ajuda para comprar a geladeira que sai gelo na porta❄️"
                    value="540,00"
                />
                <CardPresentes
                    img={sala}
                    name="Ajuda para mobiliar a casa🛋️"
                    value="1259,00"
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
                    img={panelas}
                    name="Jogo de Panelas Tramontina antiaderente🍲"
                    value="350,00"
                />
                <CardPresentes
                    img={jantar}
                    name="Aparelhos de Jantar Cerâmica🍽️"
                    value="139,00"
                />
                <CardPresentes
                    img={cooktop}
                    name="Cooktop dos mais novos 👀"
                    value="459,00"
                />
                <CardPresentes
                    img={hotel}
                    name="Pra ficar mais uma diária no hotel 🏨"
                    value="199,00"
                />
                <CardPresentes
                    img={julius}
                    name="Só pra dizer que não dei nada pros noivos🍞"
                    value="50,00"
                />

            </div>

            <p className={`mt-6 text-gray-600 text-center mb-6 text-xs mx-6 ${lato.className}`}>
                Chave Pix: casamento.suelen.andre@gmail.com</p>
        </div>
    )
}