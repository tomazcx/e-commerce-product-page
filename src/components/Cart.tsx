import { CartProduct } from "./CartProduct"


interface CartInterface{
    product: number;
    productFun (num: number): void;
}

export const Cart = (props: CartInterface) =>{
    return(
        <div className="drop-shadow-2xl absolute top-20 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-[5%]  z-30 w-11/12 max-w-[400px]  gap-4 rounded-lg flex flex-col bg-gray-50 p-6 ">
            <span className="font-bold">Cart</span>
            <hr className="w-full" />

            {props.product > 0 ? <CartProduct quantity={props.product} productFun={props.productFun} /> : <h1 className="text-center text-gray-500">Your cart is empty</h1>}
            
            
        </div>
    )
}