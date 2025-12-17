"use client";

import 'dotenv/config'
import { useState } from "react";
import { imperialScript, lato, rubik } from "../fonts/index";

export default function Form() {
    const [followers, setFollowers] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
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

    const message = `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}

        Quantidade de acompanhantes: ${followers}

        Acompanhantes:
             ${followersNames
            .filter(Boolean)
            .map((f, i) => `${i + 1}. ${f}`)
            .join("\n")}
            `;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,15}$/;
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

    const cleaned = phone.replace(/\D/g, "");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        const isEmailValid = emailRegex.test(email);
        const isPhoneValid = phoneRegex.test(cleaned);
        const isNameValid = nameRegex.test(name);
        const isFollowersNamesValid = followersNames.every(n => nameRegex.test(n));

        if (!isEmailValid) {
            e.preventDefault();
            alert('Por favor, insira um email válido.');
            return;
        }
        if (!isPhoneValid) {
            e.preventDefault();
            alert('Por favor, insira um número de telefone válido com 10 ou 11 dígitos.');
            return;
        }
        if (!isNameValid) {
            e.preventDefault();
            alert('Por favor, insira um nome válido (apenas letras e espaços).');
            return;
        }

        if (isFollowersNamesValid === false) {
            e.preventDefault();
            alert('Por favor, insira nomes válidos para os acompanhantes (apenas letras e espaços).');
            return;
        }
    }

    return (
        <div className='bg-amber-50 flex flex-col items-center mx-6'>
            <h3
                className={`text-4xl lg:text-5xl mb-6 text-center text-gray-900 ${imperialScript.className}`}
            >
                Confirme Sua Presença!
            </h3>

            <form
                className={`mb-10 mx-6 flex-col justify-center flex gap-6 bg-rose-50 max-w-2xl w-full p-5 rounded-2xl border border-amber-200 ${rubik.className}`}
                style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                action="https://api.staticforms.dev/submit"
                onSubmit={handleSubmit}
                method="POST"
            >

                <div className='w-full max-w-2xl flex flex-col items-start'>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" className="px-2 py-1 border border-gray-700 rounded-sm block w-full" required
                        placeholder='Insira seu nome'
                        onChange={e => { setName(e.target.value) }} />
                </div>

                <div className='w-full max-w-2xl flex flex-col items-start'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" className="px-2 py-1 border border-gray-700 rounded-sm block w-full" required
                        placeholder='exemplo@exemplo.com'
                        onChange={e => { setEmail(e.target.value) }} />
                </div>

                <div className='w-full max-w-2xl flex flex-col items-start'>
                    <label htmlFor="numero_de_telefone">Número de telefone</label>
                    <input type="text" id="numero_de_telefone" className="px-2 py-1 border border-gray-700 rounded-sm block w-full" required
                        placeholder='(12) 99999-9999'
                        onChange={e => { setPhone(e.target.value) }} />
                </div>

                <div className='flex gap-4'>
                    <label htmlFor="quantidade_acompanhantes">Quantidade de acompanhantes</label>
                    <select
                        id="quantidade_acompanhantes"
                        className="border border-gray-700 block rounded-md"
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
                            <div key={i} className='mb-2'>
                                <label>Nome do acompanhante {i + 1}</label>
                                <input
                                    type="text"
                                    className="px-2 py-1 border rounded-sm block w-full"
                                    value={followersNames[i]}
                                    required
                                    placeholder='Nome do acompanhante'
                                    onChange={(e) =>
                                        handleFollowerNameChange(i, e.target.value)
                                    }
                                />
                            </div>
                        ))}
                    </div>
                )}

                <input type="hidden" name='apiKey' value={process.env.NEXT_PUBLIC_STATICFORM_API_KEY} />
                <textarea name="Mensagem" hidden readOnly value={message} />
                <input type="hidden" name='redirectTo' value={'https://casamento-suelen-andre.vercel.app/thanks'} />

                <button
                    type="submit"
                    className="px-6 py-2 max-w-2xl bg-amber-300 shadow-md rounded-lg mt-4 text-md sm:text-lg hover:bg-amber-500 hover:shadow-lg hover:text-rose-50 transition"
                >
                    Confirmar Presença!
                </button>

            </form >
        </div >
    );
}
