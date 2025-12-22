import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "../../components/ui/carousel";

import Autoplay from "embla-carousel-autoplay"
import Image, { StaticImageData } from "next/image";

export default function ImageCarousel({ image1, image2 }: { image1: string | StaticImageData, image2: string | StaticImageData }) {
    return (
        <>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),

                ]}
                className="m-6 w-full justify-center max-w-2xl lg:max-w-4xl">
                <CarouselContent>
                    <CarouselItem>
                        <div className="relative w-full h-72 md:h-96 lg:h-[450px]">
                            <Image
                                alt="Church"
                                src={image1}
                                fill
                                className="object-cover rounded-lg border border-amber-300"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="relative w-full h-72 md:h-96 lg:h-[450px]">
                            <Image
                                alt="Church"
                                src={image2}
                                fill
                                className="object-cover rounded-lg border border-amber-300"
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