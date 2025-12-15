"use client";

import 'dotenv/config'
import { useState } from "react";
import { imperialScript } from "../fonts/index";

export default function Form() {
    const [followers, setFollowers] = useState(0);
    const [followersNames, setFollowersNames] = useState<string[]>([]);

    const handleFollowersChange = (value: number) => {
        setFollowers(value);
        setFollowersNames(Array.from({ length: value }, () => ""));
    };

    const handleFollowerNameChange = (index: number, name: string) => {
        const updated = [...followersNames];
        updated[index] = name;
        setFollowersNames(updated);
    };

    return (
        <div className='bg-amber-50'>
            <h3
                className={`text-4xl lg:text-5xl mb-6 text-center text-gray-900 ${imperialScript.className}`}
            >
                Confirme Sua Presença!
            </h3>

            <form
                className="mb-10 mx-6 flex-col flex gap-4"
                action="https://api.staticforms.dev/submit"
                method="POST"
            >

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" className="border block" required />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" className="border block" required />
                </div>

                <div>
                    <label htmlFor="numero_de_telefone">Número de telefone</label>
                    <input type="number" id="numero_de_telefone" name="numero_de_telefone" className="border block" required />
                </div>

                <div>
                    <label htmlFor="quantidade_acompanhantes">Quantidade de acompanhantes</label>
                    <select
                        name="quantidade_acompanhantes"
                        id="quantidade_acompanhantes"
                        className="border block"
                        value={followers}
                        onChange={(e) => handleFollowersChange(Number(e.target.value))}
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                {followers > 0 && (
                    <div className="flex flex-col gap-2 mt-2">
                        <h4 className="font-semibold">Nome dos acompanhantes:</h4>
                        {followersNames.map((_, i) => (
                            <div key={i}>
                                <label>Nome do acompanhante {i + 1}</label>
                                <input
                                    type="text"
                                    className="border block"
                                    value={followersNames[i]}
                                    required
                                    onChange={(e) =>
                                        handleFollowerNameChange(i, e.target.value)
                                    }
                                />
                            </div>
                        ))}
                    </div>
                )}

                <button
                    type="submit"
                    className="px-6 py-2 bg-amber-300 rounded-lg mt-4 "
                >
                    <input type="hidden" name='apiKey' value={process.env.NEXT_PUBLIC_STATICFORM_API_KEY} />
                    <input type="hidden" name='redirectTo' value={'https://localhost:3000/thanks'} />
                    Enviar
                </button>
            </form >
        </div>
    );
}
