import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "../../components/ui/carousel";

import Autoplay from "embla-carousel-autoplay"
import churchInside from '../images/santa-teresinha-inside.jpg'
import church from '../images/santa-teresinha.jpg'
import Image from "next/image";

export default function ImageCarousel() {
    return (
        <>
            <Carousel
                plugins={[
                    Autoplay({ delay: 4200 }),
                ]}
                className="m-6 w-full justify-center max-w-2xl ">
                <CarouselContent>
                    <CarouselItem>
                        <div className="relative w-full h-72 md:h-80 lg:h-96">
                            <Image
                                alt="Church"
                                src={church}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="relative w-full h-72 md:h-80 lg:h-96">
                            <Image
                                alt="Church"
                                src={churchInside}
                                fill
                                className="object-none rounded-lg"
                            />
                        </div>
                    </CarouselItem>
                </CarouselContent >
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel >
        </>
    );
}