import {
    Button
} from '@nextui-org/react'

function ButtonComponent(props) {
    const { content, radius, size } = props
    return (
        <>
            <Button {...props} radius={radius} size={size}>
                {content}
            </Button>
        </>
    )
}

export default ButtonComponent