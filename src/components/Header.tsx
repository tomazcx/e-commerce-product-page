import logo from '../assets/logo.svg'
import cart from '../assets/icon-cart.svg'
import list from '../assets/icon-menu.svg'
import profilePicture from '../assets/image-avatar.png'
import { useState } from 'react'
import { Cart } from './Cart'
import classNames from 'classnames'
import { Sidebar } from './Sidebar'


interface HeaderInterface {
    modal: boolean;
    menu: boolean;
    menuFun(value: boolean): void;
}

export const Header = (props: HeaderInterface) => {

    const [cartComponent, setCart] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    const handleSidebar = () => {
        setSidebar(true)
        props.menuFun(true)
    }

    return (

        <>
            {sidebar ? <Sidebar menuFun={props.menuFun} closeFun={setSidebar} /> : <></>}
            <header className={classNames("py-6 border-b w-full", {
                'opacity-10': props.modal || props.menu,
            })}>

                <div className='flex items-center justify-between w-10/12 mx-auto'>
                    <div className='flex items-center gap-4 md:gap-12'>
                        <img src={list} alt="Menu icon" onClick={() => handleSidebar()} className='block md:hidden cursor-pointer' />
                        <img src={logo} alt="Logo" className='cursor-pointer' />
                        <nav className="hidden md:flex items-center gap-6 text-gray-500 text-sm">
                            <span className='cursor-pointer hover:text-gray-300 transition-colors'>Collections</span>
                            <span className='cursor-pointer hover:text-gray-300 transition-colors'>Men</span>
                            <span className='cursor-pointer hover:text-gray-300 transition-colors'>Women</span>
                            <span className='cursor-pointer hover:text-gray-300 transition-colors'>About</span>
                            <span className='cursor-pointer hover:text-gray-300 transition-colors'>Contact</span>
                        </nav>
                    </div>

                    <div className='flex items-center gap-8'>
                        <img src={cart} alt="Cart icon" className='cursor-pointer' onClick={() => setCart(prevState => !prevState)} />
                        <img src={profilePicture} width={50} alt="Profile icon" className='hidden md:block hover:border-2 border-orange-400 rounded-full cursor-pointer ' />
                        <img src={profilePicture} width={20} alt="Profile icon" className='block md:hidden hover:border-2 border-orange-400 rounded-full cursor-pointer ' />
                    </div>
                </div>

                {cartComponent ? <Cart product={props.product} productFun={props.productFun} /> : <></>}

            </header>
        </>

    )
}