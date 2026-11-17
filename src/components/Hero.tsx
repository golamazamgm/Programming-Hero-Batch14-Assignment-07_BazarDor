
import Image from 'next/image';
import DateInHero from './DateinHero';

const Hero = () => {
    
    return (
        <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row  justify-between gap-8 bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-xs">
                <div className="max-w-xl space-y-4">
                    <DateInHero />
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        আজকের বাজারের দাম এক নজরে
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>
                    <div className="pt-2">
                        <button className="bg-[#0b8743] hover:bg-[#096e36] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors cursor-pointer">
                            সব পণ্য দেখুন
                        </button>
                    </div>
                </div>

                <div className="shrink-0">
                    <Image
                        src={'/bazar-hero.png'}
                        alt="Hero"
                        width={320}
                        height={320}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;