import img from '../assets/image-product-1-thumbnail.jpg'
import trash from '../assets/icon-delete.svg'
import { useContext } from 'react';
import { QuantityContext } from '../providers/quantity';

interface ContextInterface {
    quantity: number;
    setQuantity(num: any): void;
}

export const CartProduct = () => {
    let { quantity, setQuantity } = useContext<ContextInterface>(QuantityContext)
    const price = 125

    return (
        <div className='flex flex-col items-center gap-4'>
            <div className="flex items-center justify-between gap-4">
                <img src={img} alt="Product" width={50} className="rounded-lg" />
                <div className='flex flex-col'>
                    <span>Fall Limited Edition Sneakers</span>
                    <span>${price} x {quantity} <span className='font-bold'>${price * quantity}.00</span> </span>
                </div>
                <img src={trash} 
                onClick={() => {
                    setQuantity(0)
                }}
                alt="Trash icon" 
                className='cursor-pointer' />

            </div>
            <button className='rounded-md bg-orange-400 h-12 w-full text-white font-bold text-sm hover:opacity-80 transition-opacity'>Checkout</button>
        </div>

    )
}