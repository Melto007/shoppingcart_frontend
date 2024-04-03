import { useState, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Autoplay, FreeMode, Pagination, Virtual, Navigation } from 'swiper/modules'

import {
    Card,
    CardHeader,
    CardFooter,
    CardBody
} from '@nextui-org/react'
import ImageComponent from '../../components/ImageComponent'

import HeadingComponent from '../../components/HeadingComponent'
import Icons from '../../components/Icons'
import ButtonComponent from '../../components/ButtonComponent'

import { cardContainer } from './ProductContainer'
import CardHeaderComponent from '../../components/CardHeaderComponent'
import {
    useNavigate
} from 'react-router-dom'

function Newproducts() {
    const sliderRef = useRef()
    const navigate = useNavigate()

    const [slidesPerView, setSlidesPerView] = useState(1)

    function onHandleShop(element) {
        navigate(`${element}`)
    }

    return (
        <>
            <CardHeaderComponent
                sliderRef={sliderRef}
                setSlidesPerView={setSlidesPerView}
                content="NEW PRODUCTS"
            />

            <div className='px-2 max-w-7xl mx-auto'>
                <Swiper
                    ref={sliderRef}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, FreeMode, Virtual, Navigation, Pagination]}
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    virtual
                    className='flex flex-row p-0 gap-2'
                >
                    {cardContainer.map((item, idx) => (
                        <SwiperSlide key={idx} className="!mx-3">
                            <Card shadow="md" isPressable className='mb-4 w-full'>
                                <CardHeader>
                                    <ImageComponent
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </CardHeader>
                                <CardBody className='text-center p-0'>
                                    <HeadingComponent
                                        content={item.name}
                                        className="xxs:text-md md:text-lg font-bold"
                                    />
                                </CardBody>
                                <CardFooter className='flex flex-col'>
                                    <div className='flex justify-between items-center gap-2 mb-4 md:gap-4 lg:gap-8'>
                                        <span className='text-[0.8rem] text-rosedark font-bold xxs:text-md md:text-lg'>{item.price}</span>
                                        <span className='flex text-[0.8rem] xxs:text-md md:text-lg'>
                                            <Icons name="star" />
                                            <Icons name="star" />
                                            <Icons name="star" />
                                            <Icons name="star" />
                                            <Icons name="star" />
                                        </span>
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <ButtonComponent
                                            content="Shop now"
                                            size="sm"
                                            color="danger"
                                            className="text-[0.7rem] bg-slate rounded-none font-bold"
                                            onClick={() => onHandleShop(item.name)}
                                        />
                                        <ButtonComponent
                                            content="Add cart"
                                            size="sm"
                                            variant="bordered"
                                            color="danger"
                                            className="text-[0.7rem] rounded-none font-bold"
                                        />
                                    </div>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Newproducts