import { useContext } from "react";
import { QuantityContext } from "../providers/quantity";
import { CartProduct } from "./CartProduct"

interface ContextInterface {
    quantity: number;
    setQuantity(num: any): void;
}

export const Cart = () => {
    let { quantity, setQuantity } = useContext<ContextInterface>(QuantityContext)
    return (
        <div className="drop-shadow-2xl absolute top-20 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-[5%]  z-30 w-11/12 max-w-[400px]  gap-4 rounded-lg flex flex-col bg-gray-50 p-6 ">
            <span className="font-bold">Cart</span>
            <hr className="w-full" />

            {quantity > 0 ? <CartProduct  /> : <h1 className="text-center text-gray-500">Your cart is empty</h1>}


        </div>
    )
}