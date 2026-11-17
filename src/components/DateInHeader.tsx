'use client'
const DateInHeader = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <p className="text-sm text-[#1D271F] ">{date}</p>
    );
};

export default DateInHeader;