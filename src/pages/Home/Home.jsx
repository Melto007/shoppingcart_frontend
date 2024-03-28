import {
    useState,
    useEffect
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
    Tabs,
    Tab
} from '@nextui-org/react'
import Container from "../../components/Container"
import { NavLink } from 'react-router-dom'
import Icons from '../../components/Icons'
import ImageComponent from '../../components/ImageComponent'
import logo from '../../../public/logo.png'
import AvatarComponent from '../../components/AvatarComponent'
import ButtonComponent from '../../components/ButtonComponent'

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
      ];

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
                        <NavbarItem>
                            <NavLink to='/'>
                                <AvatarComponent
                                    className="w-8 h-8 md:w-10 md:h-10"
                                />
                            </NavLink>
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarMenu className='z-1'>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <NavLink
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                                >
                                {item}
                                </NavLink>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </Navbar>

                <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="full" className='hidden h-10 sm:flex'>
                    <NavbarContent className='hidden sm:flex' justify='start'>
                        <Tabs variant="underlined" aria-label="Tabs variants">
                            <Tab key="photos" title="Photos" />
                            <Tab key="music" title="Music"/>
                            <Tab key="videos" title="Videos"/>
                        </Tabs>
                    </NavbarContent>
                </Navbar>
            </Container>
        </>
    )
}

export default Home