import Image, { StaticImageData } from "next/image"
import { rubik } from "../fonts"

export default function CardPresentes({ img, name, value }: { img: string | StaticImageData, name: string, value: string }) {

    return (
        <>
            <div className="flex flex-col p-2 text-center max-w-3xs lg:max-w-2xs border border-amber-200 bg-amber-100 rounded-xl">
                <div className="">
                    <Image
                        src={img}
                        alt={name}
                        className="rounded-md object-cover border border-amber200"

                    />
                </div>
                <div className={`${rubik.className} mt-1 mb-2`}>
                    <h4 className={'text-gray-700 text-sm'}>{name}</h4>
                    <p>R$ {value}</p>
                    <button className="text-sm py-1 px-4 mt-3 rounded-md border text-grey-700 border-gray-500 transition"
                        style={{ backgroundColor: "#E9C46A" }}>
                        🎁Presentear
                    </button>
                </div>
            </div>
        </>
    )
}