import {
    Avatar
} from '@nextui-org/react'

function AvatarComponent(props) {
    return (
        <>
            <Avatar
                isBordered
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                {...props}
            />
        </>
    )
}

export default AvatarComponent