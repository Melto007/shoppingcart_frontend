import {
    Avatar
} from '@nextui-org/react'
import Icons from './Icons'

function AvatarComponent(props) {
    return (
        <>
            <Avatar
                icon={<Icons name="user" />}
                isBordered
                // src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                className="text-slate"
                {...props}
            />
        </>
    )
}

export default AvatarComponent