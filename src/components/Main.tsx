import productImage from '../assets/image-product-1.jpg'
import productImage2 from '../assets/image-product-2.jpg'
import productImage3 from '../assets/image-product-3.jpg'
import productImage4 from '../assets/image-product-4.jpg'
import cart from '../assets/icon-cart.svg'
import minus from '../assets/icon-minus.svg'
import plus from '../assets/icon-plus.svg'
import imageThumbnail from '../assets/image-product-1-thumbnail.jpg'
import imageThumbnail2 from '../assets/image-product-2-thumbnail.jpg'
import imageThumbnail3 from '../assets/image-product-3-thumbnail.jpg'
import imageThumbnail4 from '../assets/image-product-4-thumbnail.jpg'
import { useState } from 'react'
import { ModalProduct } from './ModalProduct'
import classNames from 'classnames'
import next from '../assets/icon-next.svg'
import previous from '../assets/icon-previous.svg'

interface MainInterface {
    modal: boolean;
    menu: boolean;
    modalFun(value: boolean): void;
    imageFun(value: number): void;
    productFun(value: any): void;
}

export const Main = (props: MainInterface) => {
    const [quantity, setQuantity] = useState(0)
    const [modal, setModal] = useState(false)

    const [imageDisplay, setImage] = useState(productImage)
    const [imageNum, setNum] = useState(0)

    const handleDisplayImage = (num: number) => {
        switch (num) {
            case 0:
                setImage(productImage)
                break;
            case 1:
                setImage(productImage2)
                break;
            case 2:
                setImage(productImage3)
                break;
            case 3:
                setImage(productImage4)
                break;
        }
    }

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevState => prevState -= 1)
        }
    }

    return (
        <main className={classNames("flex flex-col md:grid md:grid-cols-2 md:gap-16 w-full max-w-[800px] mb-24", {
            'opacity-10': props.modal || props.menu,
        })}>

            <div className="flex flex-col items-center justify-between gap-6 w-full">
                <img src={imageDisplay} alt="Product image" width={350} className="w-full md:rounded-xl" />
                <div className='hidden md:grid grid-cols-4 gap-6'>
                    <img src={imageThumbnail}
                        onClick={() => {
                            props.imageFun(0)
                            props.modalFun(true)

                        }}
                        onMouseEnter={() => {
                            handleDisplayImage(0)
                        }}
                        alt="Image thumbnail" className='cursor-pointer rounded-lg hover:opacity-70 transition-opacity' />
                    <img src={imageThumbnail2}
                        onClick={() => {
                            props.imageFun(1)
                            props.modalFun(true)

                        }}
                        onMouseEnter={() => {
                            handleDisplayImage(1)
                        }}
                        alt="Image thumbnail"
                        className='cursor-pointer rounded-lg hover:opacity-70 transition-opacity' />

                    <img src={imageThumbnail3}
                        onClick={() => {
                            props.imageFun(2)
                            props.modalFun(true)
                        }}
                        onMouseEnter={() => {
                            handleDisplayImage(2)
                        }}
                        alt="Image thumbnail"
                        className='cursor-pointer rounded-lg hover:opacity-70 transition-opacity' />

                    <img src={imageThumbnail4}
                        onClick={() => {
                            props.imageFun(3)
                            props.modalFun(true)
                        }}
                        onMouseEnter={() => {
                            handleDisplayImage(3)
                        }}
                        alt="Image thumbnail"
                        className='cursor-pointer rounded-lg hover:opacity-70 transition-opacity' />

                </div>
            </div>
            <div className='flex md:hidden items-center justify-between  z-10'>
                <div className='hover:bg-gray-200 transition-colors h-[40px] w-[40px] rounded-full cursor-pointer bg-white shadow-2xl flex justify-center items-center relative left-4 bottom-60'>
                    <img src={previous} width={10} alt="Previous icon"
                        onClick={() => {
                            let num = imageNum
                            if (num !== 0) {
                                num--
                            } else {
                                num = 3
                            }
                            setNum(num)
                            handleDisplayImage(num)
                        }}
                    />
                </div>

                <div className='hover:bg-gray-200 transition-colors h-[40px] w-[40px] rounded-full cursor-pointer bg-white shadow-2xl flex justify-center items-center relative right-4 bottom-60'>
                    <img
                        onClick={() => {
                            let num = imageNum
                            if (num !== 3) {
                                num++
                            } else {
                                num = 0
                            }
                            setNum(num)
                            handleDisplayImage(num)
                        }}
                        src={next} width={10} alt="Next icon"
                    />
                </div>
            </div>
            <div className='flex flex-col justify-center items-start px-6 md:px-0'>
                <span className='uppercase text-orange-400 text-xs tracking-widest font-bold mb-2.5'>SNEAKER COMPANY</span>
                <strong className='text-4xl mb-6 md:mb-12'>Fall Limited Edition Sneakers</strong>

                <p className='text-gray-500 text-sm mb-8'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className='flex justify-between items-center md:flex-col md:items-start w-full mb-4 md:mb-8'>
                    <div className='flex items-center gap-4'>
                        <span className='font-bold text-3xl'>$125.00</span>
                        <span className='px-2 py-0.5 text-orange-400 bg-orange-100 font-bold text-sm'>50%</span>
                    </div>
                    <span className='text-gray-300 line-through font-bold text-sm'>$250.00</span>
                </div>

                <div className='flex flex-col md:flex-row gap-4 items-center md:gap-2.5 w-full'>
                    <div className='flex flex-2 box-border w-full md:w-5/12 items-center justify-between px-3 h-12 md:h-full bg-gray-50 rounded-md'>
                        <div className='h-full flex items-center justify-center cursor-pointer' onClick={() => decreaseQuantity()} >
                            <img src={minus} alt="Minus icon" className='cursor-pointer' />
                        </div>

                        <span className='font-bold'>{quantity}</span>

                        <div className='h-full flex items-center justify-center cursor-pointer' onClick={() => setQuantity(prevState => prevState += 1)}>
                            <img src={plus} alt="Plus icon" className='cursor-pointer' />
                        </div>

                    </div>
                    <button
                        onClick={() => props.productFun((prevState: number) => prevState + quantity)}
                        className='rounded-md w-full md:w-7/12 box-border font-bold text-sm gap-2 bg-orange-400 text-white flex items-center justify-center px-8 py-4 hover:opacity-80 hover:drop-shadow-lg transition-all'
                    >
                        <img src={cart} alt="cart icon" width={20} className='filter-cart' />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </main>
    )
}

