'use client'

import Image, { StaticImageData } from "next/image"
import { rubik } from "../fonts"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export default function CardPresentes({ img, name, value }: { img: string | StaticImageData, name: string, value: string }) {

    return (
        <>
            <div className="flex flex-col p-2 text-center max-w-3xs md:max-w-md border border-amber-200 bg-amber-100 rounded-xl">
                <div className="flex justify-center max-h-[100px] lg:max-h-[200px] w-full">
                    <Image
                        src={img}
                        alt={name}
                        className="rounded-md object-cover border"

                    />
                </div>
                <div className={`${rubik.className} mt-1 mb-2`}>
                    <h4 className={'text-gray-700 text-xs mb-2 lg:text-md h-7 overflow-hidden flex justify-center items-center'}>
                        {name}</h4>
                    <p>R$ {value}</p>
                    <button className="text-sm py-1 px-4 mt-3 rounded-md border text-grey-700 bg-[#E9C46A] hover:text-white hover:bg-[#C6A75A] border-gray-500 transition"
                        onClick={() => {
                            {
                                toast.success('Pix copiado!', {
                                    description: 'Agradecemos seu presente!! 💙',
                                    style: { background: '#FEF3C7' },
                                    action: {
                                        label: 'Fechar',
                                        onClick: () => console.log('fechado'),

                                    }
                                })
                                navigator.clipboard.writeText('casamento.suelen.andre@gmail.com')
                            }
                        }}
                    >
                        🎁Presentear
                    </button>
                </div>
            </div>
        </>
    )
}