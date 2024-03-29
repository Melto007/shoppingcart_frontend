import { useState, useEffect, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination, Virtual, Navigation } from 'swiper/modules'

function Topproducts() {
    const sliderRef = useRef()
    const [slidesPerView, setSlidesPerView] = useState(2)

    const updateSlidesPerView = () => {
        if (window.innerWidth >= 620) {
            setSlidesPerView(3)
        }

        if(window.innerWidth <= 400) {
            setSlidesPerView(2)
        }

        if (window.innerWidth >= 820) {
            setSlidesPerView(4)
        }

        if (window.innerWidth >= 1000) {
            setSlidesPerView(5)
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
            <div>
                <Swiper
                    ref={sliderRef}
                    modules={[FreeMode, Virtual, Navigation, Pagination]}
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    virtual
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
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