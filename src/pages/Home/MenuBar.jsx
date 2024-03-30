import {
    useState,
} from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Badge,
    Input,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react'
import Container from "../../components/Container"
import { NavLink, useLocation } from 'react-router-dom'
import Icons from '../../components/Icons'
import ImageComponent from '../../components/ImageComponent'
import logo from '../../../public/logo.png'
import AvatarComponent from '../../components/AvatarComponent'
import ButtonComponent from '../../components/ButtonComponent'
import NavLinks from '../../components/NavLinks'

import Discount from './Discount'

import { links } from '../../utils/links'
import Header from './Header'
import Topproducts from './Topproducts'

function MenuBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const location = useLocation()
    const pathname = location.pathname

    return (
        <>
            <Container>
                <Navbar onMenuOpenChange={setIsMenuOpen}  isBordered maxWidth="full" className="bg-zinc text-slate">
                    <NavbarContent>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden"
                        />
                        <NavbarBrand>
                            <ImageComponent
                                name="shopping-logo"
                                src={logo}
                                className="w-[4.5em] md:w-[5em]"
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
                                content="search"
                                size="md"
                                radius="none"
                                className="font-bold bg-rosedark text-slate"
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
                        <NavbarItem className='relative'>
                            <AvatarComponent
                                as="button"
                                className="transition-transform"
                            />
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarMenu className='z-10 bg-zinc'>
                        {links.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <NavLink
                                    className={`${pathname === item.path ? "w-full text-rosedark" : "w-full"}`}
                                    to={item.path}
                                    size="lg"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <span>{item.name}</span>
                                </NavLink>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </Navbar>

                <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="full" className='hidden h-10 sm:flex'>
                    <NavbarContent className='hidden sm:flex px-3' justify='start'>
                        <NavLinks />
                    </NavbarContent>
                </Navbar>
            </Container>

            <Container>
                    <Header />
                    <Topproducts />
                    <Discount />
            </Container>
        </>
    )
}

export default MenuBar