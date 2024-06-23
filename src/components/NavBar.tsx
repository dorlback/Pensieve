'use client'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { FaRegLightbulb } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import Link from 'next/link';
import OffCanvas from './OffCanvas';
import ReactDOM from 'react-dom';
import { useSession } from 'next-auth/react';
import { User } from '@/types/User';

const NavBarLayout = tw.div`
    fixed flex bg-white w-full items-center justify-center lg:justify-between px-4 lg:px-[40px] h-12 lg:h-16 border-b z-20
`

const NavBarBackground = tw.div`
    h-12 lg:h-16
`

const NavBarTitle = tw.p`
    text-xl font-bold
`

const NavBarMenuLayout = tw.div`
    flex space-x-8
`

const NavBarSearchInput = tw.input`
    hidden lg:block bg-slate-100 px-4 py-1.5 rounded-lg max-w-40
`

const NavBarButtonLayout = tw.div`
    hidden lg:flex space-x-4
`

const NavBarMenuButton = tw.button`
    flex justify-center items-center w-10 aspect-square bg-slate-100 rounded-lg text-xl
`

const NavBarUserLayout = tw.div`
    hidden lg:block
`

const NavBarUser = tw.div`
    w-10 aspect-square rounded-full bg-base overflow-hidden
`

export default function NavBar() {
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
    const [offCanvasRoot, setOffCanvasRoot] = useState<any>(null)
    const { data: session } = useSession();

    const user = new User(session?.user?.name, session?.user?.email, session?.user?.image);

    useEffect(() => {
        setOffCanvasRoot(document.querySelector('#offcanvas-root'))
    }, [])

    const openOffCanvas = () => {
        setIsOffCanvasOpen(true);
    };

    const closeOffCanvas = () => {
        setIsOffCanvasOpen(false);
    };

    return (
        <>
            {isOffCanvasOpen && offCanvasRoot && ReactDOM.createPortal(
                <OffCanvas onClose={closeOffCanvas} isOpen={isOffCanvasOpen} >
                    <div className="w-full h-full flex flex-col py-20 justify-start items-center space-y-6">
                        테스트
                    </div>
                </OffCanvas>, offCanvasRoot)}
            <NavBarLayout>
                <Link href={"/"}>
                    <NavBarTitle>Pensieve</NavBarTitle>
                </Link>
                <NavBarMenuLayout>
                    <NavBarSearchInput type='text' placeholder='Search' />
                    <NavBarButtonLayout>
                        <NavBarMenuButton ><FaRegLightbulb /></NavBarMenuButton>
                        <NavBarMenuButton ><IoSettingsSharp /></NavBarMenuButton>
                    </NavBarButtonLayout>
                    <NavBarUserLayout>
                        <NavBarUser onClick={openOffCanvas}>
                            <img src={user.image}></img>
                        </NavBarUser>
                    </NavBarUserLayout>
                </NavBarMenuLayout>
            </NavBarLayout>
            <NavBarBackground />
        </>
    )
}
