'use client';
const DateInHero = () => {

    const date = new Date().toLocaleDateString('bn-BD', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <h3 className="inline-block bg-emerald-100/80 text-emerald-700 text-xs font-semibold px-3.5 py-1.5 md:mb-4 rounded-full">
            {date}
        </h3>
    );
};

export default DateInHero;