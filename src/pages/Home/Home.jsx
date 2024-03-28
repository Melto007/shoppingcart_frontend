import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Badge,
    Input
} from '@nextui-org/react'
import Container from "../../components/Container"
import { NavLink } from 'react-router-dom'
import Icons from '../../components/Icons'
import ImageComponent from '../../components/ImageComponent'
import logo from '../../../public/logo.png'
import AvatarComponent from '../../components/AvatarComponent'
import ButtonComponent from '../../components/ButtonComponent'

function Home() {

    function handleSearch() {
        console.log('click')
    }

    return (
        <>
            <Container>
                <Navbar isBordered maxWidth="full" className="bg-zinc text-slate">
                    <NavbarContent>
                        <NavbarBrand>
                            <ImageComponent
                                name="shopping-logo"
                                src={logo}
                                className="w-[4.5em]"
                            />
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent justify="center" className="hidden w-[50%] sm:flex">
                        <NavbarItem className="w-full flex">
                            <Input
                                isClearable
                                radius="none"
                                placeholder="Type to search..."
                                startContent={<Icons name="search" className="text-lime bg-transparent" />}
                                endContent={<Icons name="cancel" />}
                            />
                            <ButtonComponent
                                content="Search"
                                size="md"
                                radius="none"
                                className="font-bold bg-rosedark"
                                onClick={handleSearch}
                            />
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarContent justify="end">
                        <NavbarItem className="sm:hidden">
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