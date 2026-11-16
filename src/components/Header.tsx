
import Image from 'next/image';
import React from 'react';
import Catagories from './Catagories';
interface BazarDorCategory {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const Header = async () => {



    const date = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' });

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const categories: BazarDorCategory[] = await res.json()


    return (
        <div>
            <div className="max-lg:collapse bg-base-200   w-full rounded-md">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar max-w-7xl mx-auto">
                    <div className="navbar-start">
                        {/* <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label> */}

                        <div className="flex items-center gap-2">

                            <div className="bg-[#05893E] p-3 rounded-2xl  md:flex">
                                <Image src={'/logo-icon.png'} alt="Logo"
                                    width={40}
                                    height={40}
                                    className="h-5 w-5"
                                /></div>

                            <div>
                                <h1 className=" text-2xl font-bold">বাজার দর</h1>
                                <p className="text-sm text-[#1D271F] ">{date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-1">
                        <button className="btn btn-warning rounded-2xl">Sign-in</button>
                        <button className="btn btn-success rounded-2xl">Sign-up</button>
                    </div>
                </div>

                {/* <div className="collapse-content lg:hidden z-1">
                    <ul className="menu">
                        {categories.map((category) => (
                            <li key={category.id} className="shrink-0">
                                <div className="flex border-b border-gray-200 bg-[#fafafa] items-center gap-2 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-gray-200/70 transition-colors">
                                    <span className="text-lg leading-none">{category.icon}</span>
                                    <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                                        {category.nameBn}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div> */}
            </div>



            <Catagories categories={categories} />


        </div>
    );
};

export default Header;