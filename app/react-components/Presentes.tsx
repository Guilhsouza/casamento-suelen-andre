import { imperialScript } from "../fonts";
import CardPresentes from "./CardPresentes";
import church from "../images/santa-teresinha.jpg"

export default function Presentes() {
    return (
        <div className="flex flex-col items-center">
            < h3 className={`text-4xl lg:text-5xl mb-6 text-center text-gray-900 ${imperialScript.className}`
            }>Lista de Presentes</h3>

            <div className="grid grid-cols-2 gap-2 lg:gap-5 sm:grid-cols-3 mx-6">
                <CardPresentes
                    img={church}
                    name="presente"
                    value="300,00"
                />
                <CardPresentes
                    img={church}
                    name="presente"
                    value="300,00"
                />
                <CardPresentes
                    img={church}
                    name="presente"
                    value="300,00"
                />
                <CardPresentes
                    img={church}
                    name="presente"
                    value="300,00"
                />
            </div>
        </div>
    )
}