import Image from 'next/image'
import threeLineIcon from '../icons/threeLineMenu.svg'
import leftArrow from '../icons/leftArrow.svg'
import { useState, useEffect, JSX } from "react";
import { lato } from "../fonts/index"
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ imgRef }: { imgRef: React.RefObject<HTMLElement | null> }): JSX.Element {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrolled(!entry.isIntersecting);
            },
            { threshold: 0 }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    });

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

                            <nav className={`flex flex-col gap-4 ${lato.className}`}>
                                <a href="#inicio">Ínicio</a>
                                <a href="#cerimonia">Cerimônia</a>
                                <a href="#festa">Festa</a>
                                <a href="#">Lista de Presentes</a>
                                <a href="#confirme-presenca">Confirme sua Presença!</a>
                            </nav>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </header >

            <motion.header
                variants={
                    {
                        hidden: { y: 0 },
                        visible: { y: 0, opacity: 1 },
                    }
                }
                animate={scrolled ? "visible" : "hidden"}
                transition={{ duration: .3, ease: "easeOut" }}
                className={
                    `hidden pt-4 text-lg justify-center sm:flex sm:gap-x-8 flex-wrap mb-5 text-white ${lato.className} 
                ${scrolled ? `bg-white bg-opacity-90 shadow-lg fixed w-full p-4 z-10` : ''}`}

            >
                <div className={`flex gap-x-8 flex-wrap justify-center sm:gap-y-1 z-1
                    ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                    <a href="#inicio">Ínicio</a>
                    <a href="#cerimonia">Cerimônia</a>
                    <a href="#festa">Festa</a>
                    <a href="#">Lista de Presentes</a>
                    <a href="#confirme-presenca">Confirme sua Presença!</a>
                </div>
            </motion.header >


        </>


    )
}