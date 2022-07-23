import { useState } from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { ModalProduct } from "./components/ModalProduct"
import { QuantityContextProvider } from "./providers/quantity"

export const App = () => {
  const [modal, setModal] = useState(false)
  const [menu, setMenu] = useState(false)
  const [imageModalDisplay, setImage] = useState(0)
  const [productCar, setProduct] = useState(0)

  return (
    <>

      <div className="flex flex-col md:gap-12 items-center">
        {modal ? <ModalProduct closeFun={setModal} img={imageModalDisplay} /> : <></>}
        <QuantityContextProvider>
          <Header modal={modal} menu={menu} menuFun={setMenu} product={productCar} productFun={setProduct} />
          <Main modalFun={setModal} menu={menu} modal={modal} imageFun={setImage} />
        </QuantityContextProvider>

      </div>
    </>

  )
}