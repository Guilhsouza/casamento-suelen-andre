import Image from 'next/image';
import flower from '../images/flower.svg'

export default function BreakLine() {
    return (
        <div className="flex items-center justify-center mt-8 mb-5">
            <div className="h-px w-20 bg-amber-200 opacity-60" />
            <Image
                src={flower}
                width={20}
                height={20}
                className='mx-4 opacity-80'
                alt='svg flower'
            />
            <div className="h-px w-20 bg-amber-200 opacity-60" />
        </div>
    );
}