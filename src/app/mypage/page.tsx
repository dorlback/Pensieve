'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { RiLoaderFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { User } from "@/types/User"

interface iMyPageData {
    data: string,
    label: string,
    isEditable: boolean,
}

function MyPageData({ data, label, isEditable = false }: iMyPageData) {
    return (
        <div className='min-h-[40px] flex items-center py-4 w-full border-b'>
            <p className='w-36 lg:text-lg text-slate-400'>
                {label}
            </p>
            <p className='h-full flex-1 px-4 lg:text-lg'>
                {data}
            </p>
            <button className={`${isEditable ? "block" : "hidden"} text-base`}>
                Edit
            </button>
        </div>
    )
}

export default function page() {
    const { data: session, status } = useSession();

    const user = new User(session?.user?.name, session?.user?.email, session?.user?.image);

    return (
        <>
            {session ?
                <div className='flex w-full h-full lg:bg-slate-200 lg:pt-10 lg:px-10 '>
                    <div className='hidden lg:flex flex-col h-full w-[calc(25vw)] pr-10 space-y-10 overflow-y-auto'>
                        <div className='flex bg-slate-100 w-full h-96 rounded-xl shadow-lg p-6'>
                            <ul>
                                <ul className='space-y-4'>
                                    <p className='font-semibold'>Personal</p>
                                    <li className='pl-4'>
                                        Profile
                                    </li>
                                    <li className='pl-4'>
                                        Meeting
                                    </li>
                                    <li className='pl-4'>
                                        Setting
                                    </li>
                                </ul>

                                <ul className='space-y-4 pt-8'>
                                    <p className='font-semibold'>Admin</p>
                                    <li className='pl-4'>
                                        User Management
                                    </li>
                                    <li className='pl-4'>
                                        Advanced
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <div className='flex bg-slate-100 w-full h-52 rounded-xl shadow-lg p-6'>
                            <ul className='space-y-4'>
                                <li className='pl-4'>
                                    Profile
                                </li>
                                <li className='pl-4'>
                                    Meeting
                                </li>
                                <li className='pl-4 flex items-center space-x-2'>
                                    <IoIosLogOut className='text-red-400 text-lg' />
                                    <p>Log Out</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex-1 h-full lg:rounded-t-xl bg-white lg:shadow-lg overflow-y-auto lg:p-10'>
                        <div className='hidden lg:block relative w-full h-44 bg-violet-200 rounded-xl'>
                            <div className='flex absolute h-32 w-96 left-10 -bottom-16 '>
                                <div className='h-full aspect-square'>
                                    <img src={user.image} className='w-full h-full rounded-xl' />
                                </div>
                                <div className='flex flex-col w-full p-4 '>
                                    <div className='w-full flex-1' />
                                    <div className='w-full flex-1 flex items-center'>
                                        <p className='text-xl font-semibold'>Back Seung Heon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative lg:hidden w-full h-40 bg-violet-200'>
                            <div className='absolute -bottom-[50%] -translate-y-[10%] left-[50%] translate-x-[-50%] w-32 aspect-square bg-amber-100 rounded-xl overflow-hidden'>
                                <img src={user.image} className='w-full h-full' />
                            </div>
                        </div>

                        <div className='px-10 lg:px-0 pt-24 lg:pt-32 flex flex-col'>
                            <MyPageData label={'Email'} data={user.email} isEditable={false}></MyPageData>
                            <MyPageData label={'Username'} data={user.name} isEditable={true}></MyPageData>
                            <MyPageData label={'Passwrod'} data={''} isEditable={true}></MyPageData>
                            {/* <MyPageData label={'Language'} data={'Test'}></MyPageData> */}
                        </div>
                    </div>
                </div>
                :
                <div>
                    로그인 하러가기
                </div>
            }
        </>
    )
}

// Legillimence