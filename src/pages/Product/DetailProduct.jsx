import {
    useState,
    useRef
} from 'react'
import Container from "../../components/Container"
import ImageComponent from "../../components/ImageComponent"
import HeadingComponent from '../../components/HeadingComponent'
import Icons from "../../components/Icons"
import Paragraph from '../../components/Paragraph'
import ButtonComponent from '../../components/ButtonComponent'
import CardHeaderComponent from "../../components/CardHeaderComponent"
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    User
} from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Autoplay, FreeMode, Pagination, Virtual, Navigation } from 'swiper/modules'

import { cardContainer } from '../Home/ProductContainer'

import product01 from '../../../public/product01.png'

function DetailProduct() {
    const sliderRef = useRef()
    const [slidesPerView, setSlidesPerView] = useState(1)

    return (
        <>
            <Container>
                <div className="max-w-6xl m-auto">
                    <div className="px-2 md:flex">
                        <div className="w-full">
                            <ImageComponent
                                src={product01}
                                alt="product-1"
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full md:my-auto">
                            <HeadingComponent
                                content="Samsung"
                                className="text-xl font-bold md:text-3xl"
                            />

                            <div className="flex items-center justify-between gap-2">
                                <div className="flex gap-3 items-center">
                                    <HeadingComponent
                                        content="$14,000"
                                        className="text-xl text-rosedark font-bold md:text-4xl"
                                    />
                                </div>
                                <div className="flex items-center md:text-xl">
                                    <Icons name="star" />
                                    <Icons name="star" />
                                    <Icons name="star" />
                                    <Icons name="star" />
                                    <Icons name="star" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <div className="flex flex-col gap-2 md:flex-row">
                                    <ButtonComponent
                                            size="sm"
                                            radius="full"
                                            content="Order"
                                            color="danger"
                                            className="w-full font-bold"
                                        />
                                        <ButtonComponent
                                            size="sm"
                                            radius="full"
                                            content="Add to cart"
                                            className="w-full font-bold bg-slate text-zinc"
                                        />
                                </div>

                                <div className="mt-2">
                                    <div className="flex gap-4">
                                        <div className="md:text-lg">
                                            <Paragraph
                                                content="Brand Name"
                                                className="font-bold mb-2"
                                            />
                                            <Paragraph
                                                content="Model Number"
                                                className="font-bold mb-2"
                                            />
                                            <Paragraph
                                                content="Release Date"
                                                className="font-bold mb-2"
                                            />
                                            <Paragraph
                                                content="Color"
                                                className="font-bold mb-2"
                                            />
                                        </div>
                                        <div>
                                            <Paragraph
                                                className="mb-2"
                                                content="Samsung"
                                            />
                                            <Paragraph
                                                className="mb-2"
                                                content="2001"
                                            />
                                            <Paragraph
                                                className="mb-2"
                                                content="22-03-2020"
                                            />
                                            <Paragraph
                                                className="mb-2"
                                                content="black"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <CardHeaderComponent
                        sliderRef={sliderRef}
                        setSlidesPerView={setSlidesPerView}
                        content="Products related to this item"
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

                <div className='max-w-4xl mx-auto my-3'>
                    <Card>
                        <CardHeader>
                            <User
                                name="shehin melto"
                                className='font-bold'
                                description={(
                                    <span>
                                        @shehinmelto
                                    </span>
                                )}
                                avatarProps={{
                                    src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                                }}
                            />
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, eligendi reprehenderit labore ea eos, mollitia accusamus deserunt quod sapiente facilis, molestiae ab officia voluptatem doloremque nisi inventore ipsam iure nostrum.
                        </CardBody>
                        <CardFooter>
                            <div className="flex items-center md:text-xl">
                                <Icons name="star" />
                                <Icons name="star" />
                                <Icons name="star" />
                                <Icons name="star" />
                                <Icons name="star" />
                            </div>
                        </CardFooter>
                        <CardHeader>
                            <User
                                name="shehin melto"
                                className='font-bold'
                                description={(
                                    <span>
                                        @shehinmelto
                                    </span>
                                )}
                                avatarProps={{
                                    src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                                }}
                            />
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, eligendi reprehenderit labore ea eos, mollitia accusamus deserunt quod sapiente facilis, molestiae ab officia voluptatem doloremque nisi inventore ipsam iure nostrum.
                        </CardBody>
                        <CardFooter>
                            <div className="flex items-center md:text-xl">
                                <Icons name="star" />
                                <Icons name="star" />
                                <Icons name="star" />
                                <Icons name="star" />
                                <Icons name="star" />
                            </div>
                        </CardFooter>
                        <CardHeader>
                            <User
                                name="shehin melto"
                                className='font-bold'
                                description={(
                                    <span>
                                        @shehinmelto
                                    </span>
                                )}
                                avatarProps={{
                                    src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                                }}
                            />
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, eligendi reprehenderit labore ea eos, mollitia accusamus deserunt quod sapiente facilis, molestiae ab officia voluptatem doloremque nisi inventore ipsam iure nostrum.
                        </CardBody>
                        <CardFooter>
                            <div className="flex items-center md:text-xl">
                                <Icons name="star" />
                                <Icons name="star" />
                                <Icons name="star" />
                                <Icons name="star" />
                                <Icons name="star" />
                            </div>
                        </CardFooter>
                        <div>
                            <ButtonComponent
                                content="Add Your Review"
                                radius="none"
                                className="bg-rosedark text-zinc w-full font-bold"
                            />
                        </div>
                    </Card>
                </div>
            </Container>
        </>
    )
}

export default DetailProduct