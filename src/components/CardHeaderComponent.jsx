import {
    useEffect
} from 'react'

import HeadingComponent from "./HeadingComponent"
import ButtonComponent from "./ButtonComponent"
import Icons from './Icons'

function CardHeaderComponent(props) {

    const updateSlidesPerView = () => {
        if(window.innerWidth <= 340) {
            props.setSlidesPerView(1)
        }

        if(window.innerWidth >= 340 && window.innerWidth <= 500) {
            props.setSlidesPerView(2)
        }

        if (window.innerWidth >= 620) {
            props.setSlidesPerView(3)
        }

        if (window.innerWidth >= 820) {
            props.setSlidesPerView(4)
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
        if(props.sliderRef.current && props.sliderRef.current.swiper) {
            props.sliderRef.current.swiper.slidePrev()
        }
    }

    function handleNext() {
        if(props.sliderRef.current && props.sliderRef.current.swiper) {
            props.sliderRef.current.swiper.slideNext()
        }
    }

    return (
        <>
            <div className='px-4 max-w-7xl mx-auto mt-12 mb-5 flex justify-between items-center'>
                <HeadingComponent
                    content={props.content}
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
        </>
    )
}

export default CardHeaderComponent