import close from '../assets/icon-close.svg'

interface SidebarInterface{
    closeFun (value: boolean):void;
    menuFun (value: boolean): void;
}

export const Sidebar = (props : SidebarInterface) =>{

    const handleSidebar =() =>{
        props.closeFun(false)
        props.menuFun(false)
    }
    return(
        <div className="flex flex-col gap-8 animate-show-sidebar bg-white w-8/12 pl-8 pt-8 absolute z-[20] shadow-xl left-0 h-screen">
            <img src={close} width={20} alt="Icon close" onClick={() => handleSidebar()} />
            <nav className="flex flex-col gap-4">
                <span className="font-bold">Collections</span>
                <span className="font-bold">Men</span>
                <span className="font-bold">Women</span>
                <span className="font-bold">About</span>
                <span className="font-bold">Contact</span>
            </nav>

        </div>
    )
}