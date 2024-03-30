import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Breadcrumbs,
    BreadcrumbItem
} from '@nextui-org/react'
import { discountContainer } from '../Home/ProductContainer'
import ImageComponent from '../../components/ImageComponent'
import HeadingComponent from '../../components/HeadingComponent'
import Icons from '../../components/Icons'
import ButtonComponent from '../../components/ButtonComponent'

function Smartphones() {
    return (
        <>
            <div className='px-2 max-w-7xl mx-auto mt-12 mb-5 flex justify-between items-center font-bold'>
                <Breadcrumbs>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Smartphones</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <div className='px-2 gap-7 grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-7xl mx-auto'>
                {discountContainer.map((item, idx) => (
                    <Card shadow="md" isPressable key={idx}>
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
                ))}
                <div className='mb-4'></div>
            </div>
        </>
    )
}

export default Smartphones