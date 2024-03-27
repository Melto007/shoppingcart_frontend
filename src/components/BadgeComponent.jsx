import {
    Badge
} from '@nextui-org/react'

function BadgeComponent(props) {
    const { children, color } = props
    return (
        <>
            <Badge content="5" color={color} className="p-[0.5em] text-[0.8rem] cursor-pointer" {...props}>
                {children}
            </Badge>
        </>
    )
}

export default BadgeComponent