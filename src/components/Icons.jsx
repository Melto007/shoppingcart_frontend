import { FaSearch, FaUser } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import { FaBagShopping } from "react-icons/fa6"
import { CiStar } from "react-icons/ci"

function Icons(props) {
    const { name } = props
    const icon = [
        {
            id: 1,
            name: 'search',
            icon: <FaSearch className="text-[1.2rem] cursor-pointer" />
        },
        {
            id: 2,
            name: 'cart',
            icon: <FaBagShopping className="text-[1.2rem] cursor-pointer sm:text-[1.5rem]" />
        },
        {
            id: 4,
            name: 'user',
            icon: <FaUser className="text-[1rem] cursor-pointer" />
        },
        {
            id: 5,
            name: 'cancel',
            icon: <MdCancel />
        },
        {
            id: 6,
            name: 'star',
            icon: <CiStar />
        }
    ]
    return (
        <>
            {icon.map((item, idx) => item.name === name && (
                <span key={idx}>
                    {item.icon}
                </span>
            ))}
        </>
    )
}

export default Icons