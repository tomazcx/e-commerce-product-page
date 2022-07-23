import {createContext, ReactNode, useState} from 'react'

interface QuantityInterface {
    quantity: number,
    setQuantity(num: number): void
}

interface QuantityContextProps{
    children: ReactNode;
}

const initialValue = {
    quantity: 0,
    setQuantity: () => { }
}


export const QuantityContext = createContext<QuantityInterface>(initialValue)

export const QuantityContextProvider = ({children}: QuantityContextProps) => {

    const [quantity, setQuantity] = useState(initialValue.quantity)

    return (
        <QuantityContext.Provider value={{quantity, setQuantity}}>
            {children}
        </QuantityContext.Provider>
    )
}

