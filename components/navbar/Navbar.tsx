import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";


const navItem = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },

]

export const Navbar = () => {
    console.log('Navar creado');
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={'/'} className="flex items-center">
                <HomeIcon className="m-2"/>
                <span>Home</span>
            </Link>
            
            <div className="flex flex-1"></div>

            {
                navItem.map( navItem => (
                    <ActiveLink key={navItem.path} {...navItem} />
                    // <Link key={navItem.path} className="mr-2" href={navItem.path}>{navItem.text}</Link>
                ))
            }
            {/* <Link className="mr-2" href="/about">About</Link>
            <Link className="mr-2" href="/contact">Contact</Link>
            <Link className="mr-2" href="/pricing">Pricing</Link> */}

        </nav>
    )
}
