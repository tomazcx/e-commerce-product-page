import productImage from '../assets/image-product-1.jpg'
import productImage2 from '../assets/image-product-2.jpg'
import productImage3 from '../assets/image-product-3.jpg'
import productImage4 from '../assets/image-product-4.jpg'
import imageThumbnail from '../assets/image-product-1-thumbnail.jpg'
import imageThumbnail2 from '../assets/image-product-2-thumbnail.jpg'
import imageThumbnail3 from '../assets/image-product-3-thumbnail.jpg'
import imageThumbnail4 from '../assets/image-product-4-thumbnail.jpg'
import close from '../assets/icon-close.svg'
import next from '../assets/icon-next.svg'
import previous from '../assets/icon-previous.svg'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

interface ModalInterface {
    closeFun(value: boolean): void;
    img: number;
}

export const ModalProduct = (props: ModalInterface) => {

    const [imageDisplay, setImage] = useState("")
    const [imageNum, setNum] = useState(props.img)

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

    useEffect(() => {
        handleDisplayImage(props.img)
    }, [])

    return (
        <div className='flex flex-col items-center absolute z-30 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img src={close} alt="Close icon" onClick={() => props.closeFun(false)} className='relative left-1/2 cursor-pointer' />
            <div className='flex items-center'>
                <div
                    onClick={() => {
                        let num = imageNum;
                        if (imageNum != 0) {
                            num--;
                        } else {
                            num = 3;
                        }

                        setNum(num)
                        handleDisplayImage(num)

                    }}
                    className='hover:bg-gray-200 transition-colors h-12 w-12 rounded-full cursor-pointer bg-white shadow-2xl flex justify-center items-center relative right-48 top-56'>
                    <img src={previous} alt="Previous icon" />
                </div>

                <div
                    onClick={() => {
                        let num = imageNum;
                        if (imageNum != 3) {
                            num++;
                        } else {
                            num = 0;
                        }

                        setNum(num)
                        handleDisplayImage(num)

                    }}
                    className='hover:bg-gray-200 transition-colors h-12 w-12 rounded-full cursor-pointer bg-white shadow-2xl flex justify-center items-center relative left-48 top-56'>
                    <img src={next} alt="Next icon" />
                </div>
            </div>


            <img src={imageDisplay} alt="Image modal" width={400} className=' mb-8 rounded-lg ' />
            <div className='grid grid-cols-4 gap-8'>
                <div className={classNames('rounded-xl', {
                    'border-2 border-orange-400': imageNum === 0
                })}>
                    <img src={imageThumbnail} alt="Image thumbnail"
                        onClick={() => {
                            setNum(0)
                            handleDisplayImage(0)
                        }}
                        width={100} className={classNames('rounded-lg hover:opacity-40 cursor-pointer transition-opacity', {
                            'opacity-40': imageNum === 0
                        })}
                    />
                </div>


                <div className={classNames('rounded-xl', {
                    'border-2 border-orange-400': imageNum === 1
                })}>
                    <img src={imageThumbnail2} alt="Image thumbnail"
                        onClick={() => {
                            setNum(1)
                            handleDisplayImage(1)
                        }}
                        width={100} className={classNames('rounded-lg hover:opacity-40 cursor-pointer transition-opacity', {
                            'opacity-40': imageNum === 1
                        })}
                    />
                </div>

                <div className={classNames('rounded-xl', {
                    'border-2 border-orange-400': imageNum === 2
                })}>
                    <img src={imageThumbnail3} alt="Image thumbnail"
                        onClick={() => {
                            setNum(2)
                            handleDisplayImage(2)
                        }}
                        width={100} className={classNames('rounded-lg hover:opacity-40 cursor-pointer transition-opacity', {
                            'opacity-40': imageNum === 2
                        })}
                    />
                </div>

                <div className={classNames('rounded-xl', {
                    'border-2 border-orange-400': imageNum === 3
                })}>
                    <img src={imageThumbnail4} alt="Image thumbnail"
                        onClick={() => {
                            setNum(3)
                            handleDisplayImage(3)
                        }}
                        width={100} className={classNames('rounded-lg hover:opacity-40 cursor-pointer transition-opacity', {
                            'opacity-40': imageNum === 3
                        })}
                    />
                </div>
            </div>
        </div>
    )
}