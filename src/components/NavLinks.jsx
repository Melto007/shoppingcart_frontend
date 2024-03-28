import {
    NavLink,
    useLocation
} from 'react-router-dom'
import {
    NavbarItem
} from '@nextui-org/react'
import {
    motion
} from 'framer-motion'

function NavLinks() {

    const location = useLocation()
    const pathname = location.pathname

    const links = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        }
    ]
    return (
        <>
            {links.map((item, idx) => (
                <NavbarItem className='flex gap-6' key={idx}>
                    <NavLink
                        to={item.path}
                        className={`${pathname === item.path ? "font-bold text-rosedark" : "font-bold"}`}
                    >
                        <div
                            className='relative py-2'
                        >
                            {pathname === item.path && (
                                <motion.div
                                    layoutId='active-pill'
                                    style={{
                                        borderRadius: 9999,
                                    }}
                                    className='bg-rosedark w-full h-1 rounded-xl bottom-0 absolute'
                                />
                            )}
                            <span>{item.name}</span>
                        </div>
                    </NavLink>
                </NavbarItem>
            ))}
        </>
    )
}

export default NavLinks