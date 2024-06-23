'use client'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import NoteTag from '@/components/NoteTag'
import NoteWrite from '@/components/NoteWrite'
import React, { useEffect, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import ReactDOM from 'react-dom';
import { FaChevronDown } from "react-icons/fa";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

const PageLayout = tw.main`
    h-full w-[100vw] flex flex-row-reverse lg:flex-row lg:py-[20px] space-y-[20px]
`

const NoteLayout = tw.div`
    relative px-4 flex-1 flex flex-col space-y-4 overflow-x-scroll
`

const NoteTitle = tw.input`  
    w-full text-lg lg:text-4xl py-2 focus:outline-none focus:ring-0 focus:border-transparent
`

const NoteDateLayout = tw.div`
`

const NoteDate = tw.p`
    text-slate-400
`

const NoteWriteLayout = tw.div`
    flex-1 overflow-y-auto border-t py-2 space-y-2
`

const NoteTagLayout = tw.div`
    py-4 flex flex-col w-full min-h-24 space-y-4 border-t
`

const NoteDateAndUsers = tw.div`
    w-full h-10 flex items-center justify-between
`

const NoteUsersLayout = tw.div`
    relative flex bg-slate-200 px-8 py-1 h-full rounded-full
`

const UserIcon = tw.div`
    abolute -ml-6 top-0 left-0 shadow border border-slate-300 h-full aspect-square rounded-full bg-blue-400
`

const NoteUserButton = tw.button`
    text-center bg-base text-white rounded-lg py-1 px-3
`

const NoteUserModalLayout = tw.div`
    w-full h-full flex flex-col justify-center items-center
`

const TagTitle = tw.p`
    text-xl
`

// NoteWrite div 가 focus 되면 place holder 내용 바꿔서 기능 띄우기.
// 작성 가능한 부분은 div 로 이루어져 있고, 자바스크립트 액션으로 값 변경 되면서 작성 되도록 변경

export default function page() {
    const [isListHidden, setIsListHidden] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userModalRoot, setUserModalRoot] = useState<any>(null)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleMobileSideBar = () => {
        setIsListHidden(!isListHidden)
    }

    useEffect(() => {
        setUserModalRoot(document.querySelector('#modal-root'))
    }, [])

    return (
        <>
            <PageLayout>
                <div className={`${isListHidden ? 'hidden ' : ''} lg:block py-4 lg:py-0 px-2 w-36 lg:w-52`}>
                    <div className='space-y-4 p-2 border w-full h-full bg-gray-200 rounded-xl'>
                        <input placeholder='Search' className='h-8 w-full rounded-full px-2 text-sm focus:outline-none focus:ring-0 focus:border-transparent' />
                        <div className='space-y-2 overflow-y-auto '>
                            <div className='bg-white rounded-lg px-2 py-2 w-full flex items-center text-sm truncate'>
                                Title testasdasdasdasdasdasdadsd
                            </div>
                            <div className='bg-white rounded-lg px-2 py-2 w-full flex items-center text-sm truncate'>
                                Title test
                            </div>
                            <div className='bg-white rounded-lg px-2 py-2 w-full flex items-center text-sm truncate'>
                                Title test
                            </div>
                            <div className='bg-white rounded-lg px-2 py-2 w-full flex items-center text-sm truncate'>
                                Title test
                            </div>
                            <div className='bg-white rounded-lg px-2 py-2 w-full flex items-center text-sm truncate'>
                                Title test
                            </div>
                            <div className='bg-white rounded-lg px-2 py-2 w-full flex items-center text-sm truncate'>
                                Title test
                            </div>

                        </div>
                    </div>
                </div>
                <NoteLayout>
                    <button className='p-2 rounded-lg bg-base absolute lg:hidden text-xl top-4 right-4 text-white' onClick={handleMobileSideBar}>
                        {isListHidden ?
                            <TbLayoutSidebarRightExpand />
                            :
                            <TbLayoutSidebarRightCollapse />
                        }
                    </button>
                    <NoteTitle placeholder='TITLE' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <NoteDateAndUsers>
                        <NoteDateLayout >
                            <NoteDate>
                                2024-06-10
                            </NoteDate>
                        </NoteDateLayout>
                        <NoteUsersLayout onClick={openModal}>
                            <div className='absolute text-slate-600 text-sm right-2.5 top-3.5 '><FaChevronDown /></div>
                            <div className='w-full h-full relative flex'>
                                <UserIcon className='z-10' />
                                <UserIcon className='z-20' />
                                <UserIcon className='z-30' />
                                <UserIcon className='z-40' />
                            </div>
                        </NoteUsersLayout>
                    </NoteDateAndUsers>
                    <NoteWriteLayout>
                        <NoteWrite
                            content={content}
                            setContent={setContent}
                        />
                    </NoteWriteLayout>
                    <NoteTagLayout>
                        <TagTitle>Tags</TagTitle>
                        <NoteTag />
                    </NoteTagLayout>
                </NoteLayout>
            </PageLayout>

            {isModalOpen && userModalRoot && ReactDOM.createPortal(
                <Modal onClose={closeModal} isOpen={isModalOpen} size={"w-[calc(80%)] aspect-[4/5] md:aspect-[4/3] max-w-[700px]"}>
                    <NoteUserModalLayout>
                        <div className='w-full h-full p-6 flex flex-col space-y-6'>

                            <p className='text-slate-600 font-semibold text-lg'>Members</p>
                            <div className='flex flex-1 overflow-y-auto flex-col space-y-4'>

                                <div className='w-full flex space-x-2'>
                                    <div className='h-8 aspect-square rounded-full bg-base'></div>
                                    <div className='flex-1'>
                                        <p>bsh7829@gmail.com</p>
                                    </div>
                                    <button className='border rounded-md px-2 py-1.5'>delete</button>
                                </div>

                                <div className='w-full flex space-x-2'>
                                    <div className='h-8 aspect-square rounded-full bg-base'></div>
                                    <div className='flex-1'>
                                        <p>bsh7829@gmail.com</p>
                                    </div>
                                    <button className='border rounded-md px-2 py-1.5'>delete</button>
                                </div>

                                <div className='w-full flex space-x-2'>
                                    <div className='h-8 aspect-square rounded-full bg-base'></div>
                                    <div className='flex-1'>
                                        <p>bsh7829@gmail.com</p>
                                    </div>
                                    <button className='border rounded-md px-2 py-1.5'>delete</button>
                                </div>

                                <div className='w-full flex space-x-2'>
                                    <div className='h-8 aspect-square rounded-full bg-base'></div>
                                    <div className='flex-1'>
                                        <p>bsh7829@gmail.com</p>
                                    </div>
                                    <button className=' border rounded-md px-2 py-1.5'>delete</button>
                                </div>

                                <div className='w-full flex space-x-2'>
                                    <div className='h-8 aspect-square rounded-full bg-base'></div>
                                    <div className='flex-1'>
                                        <p>bsh7829@gmail.com</p>
                                    </div>
                                    <button className=' border rounded-md px-2 py-1.5'>delete</button>
                                </div>

                                <div className='w-full flex space-x-2'>
                                    <div className='h-8 aspect-square rounded-full bg-base'></div>
                                    <div className='flex-1'>
                                        <p>bsh7829@gmail.com</p>
                                    </div>
                                    <button className=' border rounded-md px-2 py-1.5'>delete</button>
                                </div>

                                <div className='w-full flex space-x-2'>
                                    <div className='h-8 aspect-square rounded-full bg-base'></div>
                                    <div className='flex-1'>
                                        <p>bsh7829@gmail.com</p>
                                    </div>
                                    <button className=' border rounded-md px-2 py-1.5'>delete</button>
                                </div>

                                <div className='w-full flex space-x-2'>
                                    <div className='h-8 aspect-square rounded-full bg-base'></div>
                                    <div className='flex-1'>
                                        <p>bsh7829@gmail.com</p>
                                    </div>
                                    <button className=' border rounded-md px-2 py-1.5'>delete</button>
                                </div>

                                <div className='w-full flex space-x-2'>
                                    <div className='h-8 aspect-square rounded-full bg-base'></div>
                                    <div className='flex-1'>
                                        <p>bsh7829@gmail.com</p>
                                    </div>
                                    <button className=' border rounded-md px-2 py-1.5'>delete</button>
                                </div>

                                <div className='w-full flex space-x-2'>
                                    <div className='h-8 aspect-square rounded-full bg-base'></div>
                                    <div className='flex-1'>
                                        <p>bsh7829@gmail.com</p>
                                    </div>
                                    <button className=' border rounded-md px-2 py-1.5'>delete</button>
                                </div>

                            </div>

                            <div className='flex flex-col space-y-4'>
                                <p className='text-slate-600 font-semibold text-lg'>Invite People To This Note</p>
                                <div className='relative w-full'>
                                    <input className='w-full border text-lg px-2 py-2 rounded-md focus:outline-none focus:ring-0 ' />
                                    <button className='absolute py-1.5 px-2 text-sm rounded-md bottom-[50%] right-2.5 translate-y-[50%] bg-base text-white'>invite</button>
                                </div>
                            </div>

                        </div>
                    </NoteUserModalLayout>
                </Modal>, userModalRoot)}
        </>
    )
}