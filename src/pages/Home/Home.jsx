import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Badge
} from '@nextui-org/react'
import Container from "../../components/Container"
import { NavLink } from 'react-router-dom'
import Icons from '../../components/Icons'
import ImageComponent from '../../components/ImageComponent'
import logo from '../../../public/logo.png'
import AvatarComponent from '../../components/AvatarComponent'

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
                        <NavbarItem>
                            <NavLink to='/'>
                                <Icons name="search" />
                            </NavLink>
                        </NavbarItem>
                        <NavbarItem>
                            <Badge
                                content="5"
                                color="danger"
                                className="p-[0.4em] text-[0.8rem]"
                            >
                                <NavLink to='/'>
                                    <Icons name="cart" />
                                </NavLink>
                            </Badge>
                        </NavbarItem>
                        <NavbarItem>
                            <NavLink to='/'>
                                <AvatarComponent
                                    className="w-8 h-8"
                                />
                            </NavLink>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </Container>
        </>
    )
}

export default Home