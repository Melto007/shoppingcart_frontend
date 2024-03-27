import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { CiViewList } from "react-icons/ci";

function Icons({ name }) {
    const icon = [
        {
            id: 1,
            name: 'search',
            icon: <FaSearch className="text-[1rem] cursor-pointer" />
        },
        {
            id: 2,
            name: 'cart',
            icon: <FaShoppingCart className="text-[1rem] cursor-pointer" />
        },
        {
            id: 3,
            name: 'wishlist',
            icon: <CiViewList className="text-[1rem] cursor-pointer" />
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