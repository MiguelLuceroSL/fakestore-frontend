import { Link } from "react-router-dom";
import bknlogo from '../images/bknlogo.png';
import CartWidget from "./CartWidget";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar2 = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#006D77] transition sm:top-16">
            <ul className="text-center text-xl px-20">
                <Link spy={true} smooth={true} to="/productos">
                    <li className="my-4 py-4 border-b border-[#12171b] hover:border-fuchsia-600 hover:rounded">Productos</li>
                </Link>
                <Link spy={true} smooth={true} to={`/productos/women's clothing`}>
                    <li className="my-4 py-4 border-b border-[#12171b] hover:border-fuchsia-600 hover:rounded">Ropa de Mujer</li>
                </Link>
                <Link spy={true} smooth={true} to={`/productos/men's clothing`}>
                    <li className="my-4 py-4 border-b border-[#12171b] hover:border-fuchsia-600 hover:rounded">Ropa de Hombre</li>
                </Link>
                <Link spy={true} smooth={true} to="/productos/jewelery">
                    <li className="my-4 py-4 border-b border-[#12171b] hover:border-fuchsia-600 hover:rounded">Joyería</li>
                </Link>
                <Link spy={true} smooth={true} to="/productos/electronics">
                    <li className="my-4 py-4 border-b border-[#12171b] hover:border-fuchsia-600 hover:rounded">Electronica</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <>
            <nav className="border-b border-[#aaaaaa] bg-[#006D77]">
                <div className="h-10vh flex justify-between z-50 text-[#bcdffd] font-bold lg:py-5 px-4 py-4">
                    <div className="flex items-center flex-1 ">
                        <img src={bknlogo} className="h-8 md:h-12 lg:h-16 lg:ml-8" alt="" />
                    </div>
                    <div className="lg:flex  lg: flex-1 items-center justify-end font-thin hidden">
                        <div className="flex-10">
                            <ul className="flex gap-8 mr-16 text-[18px]">
                                <Link spy={true} smooth={true} to="/productos">
                                    <li className="hover:text-black transition text-xs md:text-xl border-b-2 border-[#bcdffd] hover:border-black cursor-pointer">Productos</li>
                                </Link>
                                <Link spy={true} smooth={true} to={`/productos/women's clothing`}>
                                    <li className="hover:text-black transition text-xl border-b-2 border-[#bcdffd] hover:border-black cursor-pointer w-max">Ropa de Mujer</li>
                                </Link>
                                <Link spy={true} smooth={true} to={`/productos/men's clothing`}>
                                    <li className="hover:text-black transition text-xs md:text-xl border-b-2 border-[#bcdffd] hover:border-black cursor-pointer w-max">Ropa de Hombre</li>
                                </Link>
                                <Link spy={true} smooth={true} to="/productos/jewelery">
                                    <li className="hover:text-black transition text-xs md:text-xl border-b-2 border-[#bcdffd] hover:border-black cursor-pointer">Joyería</li>
                                </Link>
                                <Link spy={true} smooth={true} to="/productos/electronics">
                                    <li className="hover:text-black transition text-xs md:text-xl border-b-2 border-[#bcdffd] hover:border-black cursor-pointer">Electronica</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <CartWidget />
                    <div>
                        {click && content}
                    </div>
                    <button className="block lg:hidden transition" onClick={handleClick}>
                        {click ? <IoClose /> : <CiMenuFries />}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar2;