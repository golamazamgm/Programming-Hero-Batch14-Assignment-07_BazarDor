import React from 'react';
interface BazarDorCategory {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const Catagories = ({ categories }: { categories: BazarDorCategory[] }) => {
    return (

        <ul className="flex items-center gap-6 px-6 py-3  overflow-x-auto mx-auto max-w-fit">
            {categories.map((category) => (
                <li key={category.id} className="shrink-0">
                    <div className="md:flex border-b border-gray-200 bg-[#fafafa] items-center gap-2 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-gray-200/70 transition-colors">
                        <span className="text-lg leading-none">{category.icon}</span>
                        <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                            {category.nameBn}
                        </span>
                    </div>
                </li>
            ))}
        </ul>

    );
};

export default Catagories;