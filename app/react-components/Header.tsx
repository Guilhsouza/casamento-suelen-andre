import Image from 'next/image'
import threeLineIcon from '../icons/threeLineMenu.svg'
import leftArrow from '../icons/leftArrow.svg'
import { useState } from "react";
import { lato } from "../fonts/index"
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>

            <header className="flex sm:hidden">
                <button onClick={() => setOpen(true)} className='ml-4 mt-4 bg-amber-200 p-2 rounded-lg fixed z-2'>
                    <Image
                        src={threeLineIcon}
                        height={24}
                        width={24}
                        alt='threeLineIcon'
                    />
                </button>

                <AnimatePresence>
                    {open && (
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className={`fixed top-0 left-0 w-64 h-full bg-amber-50 shadow-lg p-6 z-3`}>
                            <button onClick={() => setOpen(false)} className="w-full flex justify-end">
                                <Image
                                    src={leftArrow}
                                    alt='arrow'
                                    height={20}
                                    width={20}
                                />
                            </button>

                            <nav className="flex flex-col gap-4">
                                <a href="#inicio">Ínicio</a>
                                <a href="#cerimonia">Cerimônia</a>
                                <a href="#">Recepção</a>
                                <a href="#">Lista de Presentes</a>
                                <a href="#">Confirme sua Presença!</a>
                            </nav>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </header >

            <header className={`hidden pt-4 text-lg justify-center mx-12 sm:flex sm:gap-x-8 flex-wrap mb-5 text-white ${lato.className}`}>
                <div className="flex gap-x-8 flex-wrap justify-center sm:gap-y-1 z-1">
                    <a href="#inicio">Ínicio</a>
                    <a href="#cerimonia">Cerimônia</a>
                    <a href="#">Recepção</a>
                    <a href="#">Lista de Presentes</a>
                    <a href="#">Confirme sua Presença!</a>
                </div>
            </header>
        </>


    )
}