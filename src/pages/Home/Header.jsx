
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay } from 'swiper/modules'

import HeadingComponent from '../../components/HeadingComponent'
import Paragraph from '../../components/Paragraph'
import ButtonComponent from '../../components/ButtonComponent'
import ImageComponent from '../../components/ImageComponent'

import { ProductContainer } from './ProductContainer'

function Header() {
    return (
        <div className='bg-gradient-to-r from-vilotlight to-roselight'>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className='mySwiper h-auto'
            >
                {ProductContainer.length !== 0 && ProductContainer.map((item, idx) => (
                    <SwiperSlide className='flex px-2' key={idx}>
                        <div className='max-w-4xl mx-auto my-auto flex justify-center items-center'>
                            <div className='w-full ml-2'>
                                <HeadingComponent
                                    content={item.content}
                                    className="font-bold text-xl xmd:text-3xl xmd:mb-2 md:text-4xl lg:text-5xl"
                                />
                                <div className='font-semibold text-sm xmd:text-md xmd:mb-1 md:text-lg lg:text-xl'>
                                    <Paragraph
                                        content={item.title}
                                    />
                                    <Paragraph
                                        content={item.subtitle}
                                    />
                                </div>
                                <Paragraph
                                    content="Earn upto 10% off"
                                    className="font-medium text-sm mb-2 lg:text-lg"
                                />
                                <ButtonComponent
                                    content={item.button}
                                    size="sm"
                                    className="bg-slate text-zinc font-bold rounded-full lg:p-3"
                                />
                            </div>
                            <div className='w-full'>
                                <ImageComponent
                                    src={item.image}
                                    name="laptop"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Header