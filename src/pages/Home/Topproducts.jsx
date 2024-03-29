import { useState, useEffect, useRef } from 'react'

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

function Topproducts() {
    const sliderRef = useRef()
    const [slidesPerView, setSlidesPerView] = useState(1)

    const updateSlidesPerView = () => {
        if(window.innerWidth <= 500) {
            setSlidesPerView(2)
        }

        if (window.innerWidth >= 620) {
            setSlidesPerView(3)
        }

        if (window.innerWidth >= 820) {
            setSlidesPerView(4)
        }
    }

    useEffect(() => {
        updateSlidesPerView()
        window.addEventListener('resize', updateSlidesPerView)

        return () => {
            window.removeEventListener('resize', updateSlidesPerView)
        }
    }, [])

    function handlePrev() {
        if(sliderRef.current && sliderRef.current.swiper) {
            sliderRef.current.swiper.slidePrev()
        }
    }

    function handleNext() {
        if(sliderRef.current && sliderRef.current.swiper) {
            sliderRef.current.swiper.slideNext()
        }
    }


    return (
        <>
            <div className='px-2 max-w-7xl mx-auto mt-12 mb-5 flex justify-between items-center'>
                <HeadingComponent
                    content="TOP SELLING"
                    className="font-bold text-lg xxs:text-xl md:text-2xl"
                />
                <div className='flex gap-2'>
                    <ButtonComponent
                        size="sm"
                        isIconOnly
                        className="bg-slate text-rosedark rounded-none text-2xl"
                        startContent={<Icons name="back" />}
                        onClick={handlePrev}
                    />
                    <ButtonComponent
                        size="sm"
                        isIconOnly
                        className="bg-slate text-rosedark rounded-none text-2xl"
                        startContent={<Icons name="next" />}
                        onClick={handleNext}
                    />
                </div>
            </div>
            <div className='px-2 max-w-7xl mx-auto'>
                <Swiper
                    ref={sliderRef}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, FreeMode, Virtual, Navigation, Pagination]}
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    virtual
                    className='flex flex-row p-0 gap-2'
                >
                    {cardContainer.map((item, idx) => (
                        <SwiperSlide>
                            <Card shadow="md" isPressable className='mb-4'>
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
                                            className="text-[0.7rem] bg-slate rounded-none w-full font-bold"
                                        />
                                        <ButtonComponent
                                            content="Add cart"
                                            size="sm"
                                            variant="bordered"
                                            color="danger"
                                            className="text-[0.7rem] rounded-none w-full font-bold"
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

export default Topproducts