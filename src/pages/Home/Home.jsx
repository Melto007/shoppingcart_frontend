import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Badge
} from '@nextui-org/react'
import Container from "../../components/Container"
import { NavLink } from 'react-router-dom'
import { topNav } from './navlinksArray'
import Icons from '../../components/Icons'
import BadgeComponent from '../../components/BadgeComponent'
import Heading from '../../components/Heading'

function Home() {
    return (
        <>
            <Container>
                <Navbar maxWidth="full" className="h-[3em]">
                    <NavbarContent justify="start">
                        <NavbarBrand>
                            <Heading
                                content="shopping cart"
                                className="font-bold text-[1.2rem]"
                            />
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent justify="start" className="hidden">
                        <NavbarItem className="w-full">
                            <input type="text" className="w-full" />
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarContent justify="end">
                        {topNav.map((item, idx) => (
                            <NavbarItem key={idx}>
                                <BadgeComponent
                                    color={item.color}
                                >
                                    <NavLink to={item.path}>
                                        <Icons name={item.name} />
                                    </NavLink>
                                </BadgeComponent>
                            </NavbarItem>
                        ))}
                    </NavbarContent>
                </Navbar>
            </Container>
        </>
    )
}

export default Home