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
                <div className="max-w-7xl m-auto">
                    <div className="px-2 md:flex">
                        <div className="w-full">
                            <ImageComponent
                                src={product01}
                                alt="product-1"
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <HeadingComponent
                                content="Samsung"
                                className="text-xl font-bold"
                            />

                            <div className="flex items-center justify-between gap-2">
                                <div className="flex gap-3 items-center">
                                    <HeadingComponent
                                        content="$14,000"
                                        className="text-xl text-rosedark font-bold"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <Icons name="star" />
                                    <Icons name="star" />
                                    <Icons name="star" />
                                    <Icons name="star" />
                                    <Icons name="star" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <ButtonComponent
                                    size="sm"
                                    radius="none"
                                    content="Order"
                                    color="danger"
                                    className="w-full font-bold"
                                />
                                <ButtonComponent
                                    size="sm"
                                    radius="none"
                                    content="Add to cart"
                                    className="w-full font-bold bg-slate text-zinc"
                                />

                                <div className="mt-2">
                                    <HeadingComponent
                                        content="Description"
                                        className="font-bold text-lg"
                                    />
                                    <Paragraph
                                        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque nisi qui? Odio, esse voluptatum. Doloribus exercitationem rem, ipsa ullam sed, atque obcaecati optio sit sequi in sunt harum? Dolores magni harum dolorem temporibus fugit placeat aut omnis quaerat iste praesentium ad recusandae aliquam cupiditate eos fugiat similique, reprehenderit quas perferendis cum, assumenda, molestias vero alias! Necessitatibus at saepe doloremque facilis, suscipit cumque sed quos earum quibusdam possimus dolores adipisci ipsam delectus qui, id quam aliquam. Distinctio nam aliquam soluta sapiente! Ex atque minima quos fugiat repellat sint eaque quidem cum non, accusamus odit sequi adipisci nihil autem veniam nostrum."
                                    />
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