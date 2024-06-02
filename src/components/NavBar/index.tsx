"use client";
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export function NavBar() {
    // const [isNavOpen, setIsNavOpen] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [fix, setfix] = useState(false)
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }
    const router = useRouter()
    const pathname = usePathname()



    const setFixed = () => {
        if (window.scrollY >= 400) {
            // alert('hmmm')
            setfix(true)

        } else {
            setfix(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', setFixed)
    }, [])
    return (
        <>
            <div className={`z-20 bg-black opacity-90 w-screen h-screen p-8 ${isNavOpen === true ? ' flex flex-col' : 'hidden'} lg:hidden fixed`}>
                {/* <div onClick={toggleNav} className="flex justify-end">
                    <button >
                        <AiOutlineClose className='text-white text-3xl  font-bold' />
                    </button>
                </div> */}
                <div className="flex flex-col font-medium text-[1.6rem] items-center  text-center h-full justify-center">
                    {/* <ul> */}

                    <Link onClick={() => { toggleNav() }} className={` ${pathname.includes('Menu 1') ? 'text-light border-b border-primary_2' : 'text-grey_1'}`} href="#">Menu 1</Link>

                    <Link onClick={() => { toggleNav() }} className={` ${pathname.includes('Menu 2') ? 'text-light border-b border-primary_2' : 'text-grey_1'}`} href="#">Menu 2</Link>

                    <Link onClick={() => { toggleNav() }} className={` ${pathname.includes('Menu 3') ? 'text-light border-b border-primary_2' : 'text-grey_1'}`} href="#">Menu 3</Link>

                    <Link onClick={() => { toggleNav() }} className={` ${pathname.includes('Menu 4') ? 'text-light border-b border-primary_2' : 'text-grey_1'}`} href="#">Menu 4</Link>

                    {/* </ul> */}
                </div>
            </div>

            <nav className={`flex w-full justify-between py-4 lg:px-16 px-8 font-medium ${fix ? 'bg-black fixed top 0 z-20' : 'bg-transparent absolute top-0 right-0 z-20'}  `} >
                {/* <div className="">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>

            </div> */}
                <div className='font-extrabold'>
                    L O G O
                </div>
                <div className={` font-medium text-xl  lg:hidden`} >
                    {!isNavOpen ? <HiMenuAlt3 onClick={toggleNav} className='text-darkColor dark:text-white text-4xl ' /> : <AiOutlineClose onClick={toggleNav} className='text-darkColor dark:text-white text-4xl ' />}
                </div>
                {/* <div className="block lg:hidden">

            </div> */}

                <div className="hidden lg:flex">
                    <a href="#" className={` ${pathname.includes('Menu 1') ? 'text-light border-b border-primary_2' : 'text-grey_1'} hover:text-light`}>
                        Menu 1
                    </a>
                    <span className='px-2'></span>
                    <a href="#" className={` ${pathname.includes('Menu 2') ? 'text-light border-b border-primary_2' : 'text-grey_1'}  hover:text-light`}>
                        Menu 2
                    </a>
                    <span className='px-2'></span>
                    <a href="#" className={` ${pathname.includes('Menu 3') ? 'text-light border-b border-primary_2' : 'text-grey_1'} hover:text-light`}>
                        Menu 3
                    </a>
                    <span className='px-2'></span>
                    <a href="#" className={` ${pathname.includes('Menu 4') ? 'text-light border-b border-primary_2' : 'text-grey_1'} hover:text-light `}>
                        Menu 4
                    </a>
                </div>


            </nav>

        </>

    )
}