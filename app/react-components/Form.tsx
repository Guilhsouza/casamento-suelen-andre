import { imperialScript } from '../fonts/index'

export default function Form() {

    return (
        <>
            <h3 className={`text-4xl lg:text-5xl mb-6 text-center text-gray-900 ${imperialScript.className}`}>Confirme Sua Presença!</h3>
            <form action="" className='mb-40 flex-col'>
                <div>
                    <label htmlFor='name'>Nome</label>
                    <input type="text" id='name' name='name' className='border' />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="text" id='email' name='email' className='border' />
                </div>

                <div>
                    <label htmlFor='phoneNumber'>Número de telefone</label>
                    <input type="number" id='phoneNumber' name='phoneNumber' className='border' />
                </div>

                <div>
                    <label htmlFor='followers'>Quantidade de acompanhantes</label>
                    <select name="followers" id="followers">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="5">6</option>
                        <option value="5">7</option>
                        <option value="5">8</option>
                        <option value="5">9</option>
                        <option value="5">10</option>
                    </select>

                </div>


                <button type="submit">Enviar</button>
            </form>
        </>
    )
}