export default function Thanks() {
    console.log("Thank you for confirming your presence!");
    return (
        <main className="h-svh flex flex-col justify-center items-center bg-amber-50 px-6 text-center">
            <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">Obrigado por confirmar sua presença!</h2>
            <p className="text-lg text-gray-700 max-w-xl">
                Estamos muito felizes em saber que você estará conosco neste dia tão especial.
                Sua presença significa muito para nós e estamos ansiosos para celebrar juntos.
                Até breve!
            </p>
            <button onClick={() => { 'https://casamento-suelen-andre.vercel.app' }}>Voltar para o Site!</button>
        </main>
    );
}