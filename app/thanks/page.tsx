'use client'

import { lato, rubik } from "../fonts";

export default function Thanks() {
    return (
        <main className={`h-svh flex flex-col justify-center items-center bg-purple-100 px-6 text-center`}>
            <h2 className={`text-4xl lg:text-5xl mb-8 text-gray-900 ${lato.className}}`}>Obrigado por confirmar sua presença!</h2>
            <p className={`text-lg text-gray-700 max-w-xl mb-6 ${rubik.className}`}>
                Ficamos felizes em saber que você estará conosco neste dia tão especial.
                Sua presença significa muito e estamos ansiosos para celebrar juntos. <br />
                Até breve!
            </p>
            <button
                className={`${rubik.className} text-lg bg-amber-200 shadow-lg py-2 px-4 rounded-xl border-transparent hover:bg-amber-700 hover:text-white transition`}
                onClick={() => { window.location.href = 'https://casamento-suelen-andre.vercel.app/' }
                }>
                Voltar para o Site!</button>
        </main >
    );
}