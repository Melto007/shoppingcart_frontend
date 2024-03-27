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
import ImageComponent from '../../components/ImageComponent'
import logo from '../../../public/logo.png'

function Home() {
    return (
        <>
            <Container>
                <Navbar maxWidth="full" className="bg-zinc text-slate">
                    <NavbarContent justify="start">
                        <NavbarBrand>
                            <ImageComponent
                                name="shopping-logo"
                                src={logo}
                                className="w-[4.5em]"
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