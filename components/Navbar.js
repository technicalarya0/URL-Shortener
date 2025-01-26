import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 bg-blue-700 flex justify-between px-3 items-center text-white'>
            <div className="logo font-bold text-2xl">
                <Link href='/'>URL Shortener</Link>
            </div>
            <ul className='flex justify-center gap-4 items-center'>
                <Link href='/'><li>Home</li> </Link>
                <Link href='/about'><li>About</li> </Link>
                <Link href='/shorten'><li>Shorten</li> </Link>
                <Link href='/contact'><li>Contact Us</li> </Link>
                <li className='flex gap-3'>
                    <Link href='/shorten'>
                        <button className='bg-blue-400 shadow-lg p-3 rounded-lg font-bold py-1'>Try Now</button>
                    </Link>
                    <Link href='/github'>
                        <button className='bg-blue-400 shadow-lg p-3 rounded-lg font-bold py-1'>Github</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
