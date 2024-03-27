import {
    Image
} from '@nextui-org/react'

function ImageComponent(props) {
    const { src, name } = props
    return (
        <>
            <Image
                src={src}
                alt={name}
                {...props}
            />
        </>
    )
}

export default ImageComponent