'use client'

import Image, { StaticImageData } from "next/image"
import { rubik } from "../fonts"
import { toast } from "sonner"
import { payload } from "pix-payload"

export default function CardPresentes({ img, name, value }: { img: string | StaticImageData, name: string, value: string }) {
    return (
        <>
            <div className="flex flex-col p-2 text-center max-w-3xs md:max-w-md border border-amber-200 bg-amber-100 rounded-xl">
                <div className="flex justify-center h-[105px] md:h-[140px] lg:h-48 w-full">
                    <Image
                        src={img}
                        alt={name}

                        className="rounded-md object-cover border"

                    />
                </div>
                <div className={`${rubik.className} mt-1 mb-2`}>
                    <h4 className={'text-gray-700 text-xs mb-2 lg:text-md h-10 overflow-hidden flex justify-center items-center'}>
                        {name}</h4>
                    <p>R$ {value}</p>
                    <button className="text-sm py-1 px-4 mt-3 rounded-md border text-grey-700 bg-[#E9C46A] hover:text-white hover:bg-[#C6A75A] border-gray-500 transition"
                        onClick={() => {
                            {

                                const data = {
                                    key: "gui.edu0380@gmail.com",
                                    description: "Presente para o casamento",
                                    amount: parseFloat(value),
                                    name: "SUELEN E ANDRE",
                                    city: "TAUBATE",
                                    transactionId: `PRESENTE${Math.floor(Math.random() * 1000)}`,
                                }

                                const myPayload = payload(data)

                                toast.success('Pix copiado!', {
                                    description: (
                                        <>
                                            <p>Agora é so colar no banco :) </p>
                                            <p>Agradecemos seu presente!! 💙</p>
                                        </>
                                    ),
                                    style: { background: '#FFFBEB' },
                                    action: {
                                        label: 'Fechar',
                                        onClick: () => console.log('fechado'),

                                    }
                                })
                                navigator.clipboard.writeText(`${myPayload}`)
                            }
                        }}
                    >
                        🎁Presentear
                    </button>
                </div >
            </div >
        </>
    )
}