import { useState, useEffect, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination, Virtual, Navigation } from 'swiper/modules'

import {
    Card,
    CardHeader,
    CardFooter,
    CardBody
} from '@nextui-org/react'
import ImageComponent from '../../components/ImageComponent'
import product01 from '../../../public/product01.png'
import HeadingComponent from '../../components/HeadingComponent'
import Icons from '../../components/Icons'
import ButtonComponent from '../../components/ButtonComponent'

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
            <div className='px-2 mt-8 max-w-7xl mx-auto'>
                <Swiper
                    ref={sliderRef}
                    modules={[FreeMode, Virtual, Navigation, Pagination]}
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    virtual
                    className='flex flex-row p-0 gap-2'
                >
                    <SwiperSlide className=''>
                        <Card shadow="md" isPressable className='mb-4'>
                            <CardHeader>
                                <ImageComponent
                                    src={product01}
                                    alt="product-01"
                                />
                            </CardHeader>
                            <CardBody className='text-center p-0'>
                                <HeadingComponent
                                    content="Samsung 1029"
                                    className="xxs:text-lg"
                                />
                            </CardBody>
                            <CardFooter className='flex flex-col'>
                                <div className='flex justify-between items-center gap-2 mb-4'>
                                    <span className='text-[0.8rem] xxs:text-lg'>$160000</span>
                                    <span className='flex text-[0.8rem] xxs:text-lg'>
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
                                        className="text-[0.7rem] bg-slate rounded-none w-full"
                                    />
                                    <ButtonComponent
                                        content="Add cart"
                                        size="sm"
                                        variant="bordered"
                                        color="danger"
                                        className="text-[0.7rem] rounded-none w-full"
                                    />
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card shadow="md" isPressable className='mb-4'>
                            <CardHeader>
                                <ImageComponent
                                    src={product01}
                                    alt="product-01"
                                />
                            </CardHeader>
                            <CardBody className='text-center p-0'>
                                <HeadingComponent
                                    content="Samsung 1029"
                                />
                            </CardBody>
                            <CardFooter className='flex flex-col'>
                                <div className='flex justify-between items-center gap-2 mb-4'>
                                    <span className='text-[0.8rem]'>$160000</span>
                                    <span className='flex text-[0.8rem]'>
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
                                        className="text-[0.7rem] bg-slate rounded-none w-full"
                                    />
                                    <ButtonComponent
                                        content="Add cart"
                                        size="sm"
                                        variant="bordered"
                                        color="danger"
                                        className="text-[0.7rem] rounded-none w-full"
                                    />
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card shadow="md" isPressable className='mb-4'>
                            <CardHeader>
                                <ImageComponent
                                    src={product01}
                                    alt="product-01"
                                />
                            </CardHeader>
                            <CardBody className='text-center p-0'>
                                <HeadingComponent
                                    content="Samsung 1029"
                                />
                            </CardBody>
                            <CardFooter className='flex flex-col'>
                                <div className='flex justify-between items-center gap-2 mb-4'>
                                    <span className='text-[0.8rem]'>$160000</span>
                                    <span className='flex text-[0.8rem]'>
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
                                        className="text-[0.7rem] bg-slate rounded-none w-full"
                                    />
                                    <ButtonComponent
                                        content="Add cart"
                                        size="sm"
                                        variant="bordered"
                                        color="danger"
                                        className="text-[0.7rem] rounded-none w-full"
                                    />
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card shadow="md" isPressable className='mb-4'>
                            <CardHeader>
                                <ImageComponent
                                    src={product01}
                                    alt="product-01"
                                />
                            </CardHeader>
                            <CardBody className='text-center p-0'>
                                <HeadingComponent
                                    content="Samsung 1029"
                                />
                            </CardBody>
                            <CardFooter className='flex flex-col'>
                                <div className='flex justify-between items-center gap-2 mb-4'>
                                    <span className='text-[0.8rem]'>$160000</span>
                                    <span className='flex text-[0.8rem]'>
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
                                        className="text-[0.7rem] bg-slate rounded-none w-full"
                                    />
                                    <ButtonComponent
                                        content="Add cart"
                                        size="sm"
                                        variant="bordered"
                                        color="danger"
                                        className="text-[0.7rem] rounded-none w-full"
                                    />
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card shadow="md" isPressable className='mb-4'>
                            <CardHeader>
                                <ImageComponent
                                    src={product01}
                                    alt="product-01"
                                />
                            </CardHeader>
                            <CardBody className='text-center p-0'>
                                <HeadingComponent
                                    content="Samsung 1029"
                                />
                            </CardBody>
                            <CardFooter className='flex flex-col'>
                                <div className='flex justify-between items-center gap-2 mb-4'>
                                    <span className='text-[0.8rem]'>$160000</span>
                                    <span className='flex text-[0.8rem]'>
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
                                        className="text-[0.7rem] bg-slate rounded-none w-full"
                                    />
                                    <ButtonComponent
                                        content="Add cart"
                                        size="sm"
                                        variant="bordered"
                                        color="danger"
                                        className="text-[0.7rem] rounded-none w-full"
                                    />
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                    <SwiperSlide>Slide 10</SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Topproducts