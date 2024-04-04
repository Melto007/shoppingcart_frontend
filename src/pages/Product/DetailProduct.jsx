import Container from "../../components/Container"
import ImageComponent from "../../components/ImageComponent"
import HeadingComponent from '../../components/HeadingComponent'
import Icons from "../../components/Icons"
import Paragraph from '../../components/Paragraph'
import ButtonComponent from '../../components/ButtonComponent'

import product01 from '../../../public/product01.png'

function DetailProduct() {
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
            </Container>
        </>
    )
}

export default DetailProduct