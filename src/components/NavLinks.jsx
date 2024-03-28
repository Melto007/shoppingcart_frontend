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
import {
    links
} from '../utils/links'

function NavLinks() {

    const location = useLocation()
    const pathname = location.pathname

    return (
        <>
            {links.map((item, idx) => (
                <NavbarItem className="pr-2" key={idx}>
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
                                    transition={{ duration: 0.6, type: "spring" }}
                                />
                            )}
                            <span className='relative'>{item.name}</span>
                        </div>
                    </NavLink>
                </NavbarItem>
            ))}
        </>
    )
}

export default NavLinks