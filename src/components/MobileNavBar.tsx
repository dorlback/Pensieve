'use client'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { FaPlusSquare } from "react-icons/fa";
import ReactDOM from 'react-dom';
import MobileOffCanvas from './MobileOffCanvas';
import { FaGooglePlusG } from "react-icons/fa";
import Link from 'next/link';
import { RiKakaoTalkFill } from "react-icons/ri";
import { signIn, signOut, useSession } from "next-auth/react";
import { User } from '@/types/User';

const MobileNavBarLayout = tw.div`  
    flex lg:hidden w-full bottom-0 left-0 h-16 border-t bg-white z-40
`

const MobileNavBarBackGround = tw.div`
    block lg:hidden h-20
`

const MonileNavBarButton = tw.a`
    h-full flex-1 flex items-center justify-center text-xl
`

export default function MobileNavBar() {
    const { data: session } = useSession();
    const [isLogin, setIsLogin] = useState(true);
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
    const [isSettingOffCanvasOpen, setIsSettingOffCanvasOpen] = useState(false);
    const [offCanvasRoot, setOffCanvasRoot] = useState<any>(null)

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

    const SettingOpenOffCanvas = () => {
        setIsSettingOffCanvasOpen(true);
    };

    const SettingCloseOffCanvas = () => {
        setIsSettingOffCanvasOpen(false);
    };
    return (
        <>
            <MobileNavBarLayout>
                <MonileNavBarButton href={'/'}>
                    <IoHomeOutline />
                </MonileNavBarButton>
                <MonileNavBarButton href={'/list'}>
                    <CiBoxList />
                </MonileNavBarButton>
                <MonileNavBarButton href={'/note/1'}>
                    <FaPlusSquare />
                </MonileNavBarButton>
                <MonileNavBarButton href={'/mypage'}>
                    <IoSettingsSharp />
                </MonileNavBarButton>
                <MonileNavBarButton onClick={openOffCanvas}><FaRegUser /></MonileNavBarButton>
            </MobileNavBarLayout>

            {isOffCanvasOpen && offCanvasRoot && ReactDOM.createPortal(
                <MobileOffCanvas onClose={closeOffCanvas} isOpen={isOffCanvasOpen} >
                    {session ?
                        <>
                            <div className="w-full h-full flex p-6 justify-center">
                                <div className='h-32 aspect-square rounded-xl bg-amber-200'>
                                    <img className='h-full w-full rounded-xl' src={user.image}></img>
                                    {/* 여기 */}

                                </div>
                                <div className='h-32 flex-1 flex flex-col'>
                                    <div className='px-4 w-full flex-1 flex justify-center items-center'>
                                        <p>{user.email}</p>
                                    </div>
                                    <div className='w-full flex-1 px-4 items-center justify-center'>
                                        <div onClick={() => { signOut() }} className='bg-base rounded-lg text-white flex justify-center items-center py-1.5'>Log Out</div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            {isLogin ?
                                <div className="w-full h-full flex flex-col py-10 justify-start items-center space-y-6">
                                    <div className='w-full h-full flex'>
                                        <div className='w-full flex flex-col px-4 space-y-6'>
                                            <input placeholder='ID' className='px-2 py-2 focus:border-base border-b-2 non-border-input' />
                                            <input placeholder='Password' className='px-2 py-2 focus:border-base border-b-2 non-border-input' />
                                            <button className='rounded-lg text-white py-2 bg-base'>Sign In</button>
                                            <button className='text-base text-sm'>Sign in with</button>
                                            <div className='flex justify-center space-x-4'>
                                                <button className='text-slate-900 text-xl aspect-square p-3 rounded-lg bg-slate-100 ' onClick={() => signIn()}><FaGooglePlusG /></button>
                                                <button className='text-slate-900 text-xl aspect-square p-3 rounded-lg bg-slate-100'><RiKakaoTalkFill /></button>
                                            </div>
                                            <div className='flex justify-center space-x-2'>
                                                <span className='text-sm'>Don`t have an account?</span>
                                                <button onClick={() => (setIsLogin(false))} className='text-sm text-base'>Sign up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="w-full h-full flex flex-col py-10 justify-start items-center space-y-6">
                                    <div className='w-full h-full flex'>
                                        <div className='w-full flex flex-col px-4 space-y-6'>
                                            <input placeholder='ID' className='px-2 py-2 focus:border-base border-b-2 non-border-input' />
                                            <input placeholder='Full Name' className='px-2 py-2 focus:border-base border-b-2 non-border-input' />
                                            <input placeholder='Password' className='px-2 py-2 focus:border-base border-b-2 non-border-input' />
                                            <button className='rounded-lg text-white py-2 bg-base'>Sign Up</button>
                                            <button className='text-base text-sm'>Or Sign up with</button>
                                            <div className='flex justify-center space-x-4'>
                                                <button className='text-slate-900 text-xl aspect-square p-3 rounded-lg bg-slate-100 ' onClick={() => signIn()}><FaGooglePlusG /></button>
                                                <button className='text-slate-900 text-xl aspect-square p-3 rounded-lg bg-slate-100'><RiKakaoTalkFill /></button>
                                            </div>
                                            <div className='flex justify-center space-x-2'>
                                                <span className='text-sm'>Already have an account?</span>
                                                <button onClick={() => (setIsLogin(true))} className='text-sm text-base'>Sign In</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    }


                </MobileOffCanvas>, offCanvasRoot)}

            {isSettingOffCanvasOpen && offCanvasRoot && ReactDOM.createPortal(
                <MobileOffCanvas onClose={SettingCloseOffCanvas} isOpen={isOffCanvasOpen} >
                    <div className="w-full h-full flex flex-col py-20 justify-start items-center space-y-6">
                        setting
                    </div>
                </MobileOffCanvas>, offCanvasRoot)}
        </>
    )
}