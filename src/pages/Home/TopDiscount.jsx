import ImageComponent from "../../components/ImageComponent"

import product01 from '../../../public/product01.png'
import product02 from '../../../public/product02.png'
import HeadingComponent from "../../components/HeadingComponent"
import Paragraph from "../../components/Paragraph"
import ButtonComponent from "../../components/ButtonComponent"

function TopDiscount() {
    return (
        <>
            <div className="h-auto w-full bg-gradient-to-r from-graydark to-graylight">
                <div className="flex justify-center items-center mx-auto my-auto">
                    <div className="w-full">
                        <ImageComponent
                            src={product01}
                            alt="product-image"
                        />
                    </div>
                    <div className="w-full text-center">
                        <HeadingComponent
                            content="HOT DEAL THIS WEEK"
                            className="font-bold text-[0.6rem] xxs:text-[0.8rem] sm:text-[1rem] md:text-xl lg:text-3xl xl:text-4xl xl:mb-1"
                        />
                        <Paragraph
                            content="new collection with 50% off"
                            className="uppercase text-[0.4rem] mb-1 xxs:text-[0.5rem] sm:text-[0.8rem] md:mb-2 lg:text-lg xl:text-xl xl:mb-4"
                        />
                        <ButtonComponent
                            content="shop now"
                            size="sm"
                            className="uppercase bg-rosedark text-slate text-[0.5rem] font-bold rounded-full p-0 xxs:p-1 sm:text-[0.7rem] sm:p-4"
                        />
                    </div>
                    <div className="w-full">
                        <ImageComponent
                            src={product02}
                            alt="product-image"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopDiscount