'use client'
import Footer from '@/components/Footer'
import { Tag } from '@/components/NoteTag'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { GrSort } from "react-icons/gr";
import Modal from '@/components/Modal';
import ReactDOM from 'react-dom';
import tw from 'tailwind-styled-components'

const AiModalLayout = tw.div`
    w-full h-full flex flex-col justify-center items-center
`

export function NoteAiModal() {
    return (
        <>
        </>
    )
}

export function NoteObject({ }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [ModalRoot, setModalRoot] = useState<any>(null)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setModalRoot(document.querySelector('#modal-root'))
    }, [])

    return (
        <>
            <div className='flex group space-y-2 flex-col w-full aspect-[1/1.2] rounded-md'>
                <div className='duration-400 group-hover:shadow-lg  w-full aspect-video bg-slate-200 rounded-xl shadow' />
                <div className='flex-1 space-y-2'>
                    <p className='text-lg font-semibold'>
                        AI-Memo
                    </p>
                    <p className='text-md truncate-2-lines'>
                        ai 메모에 대한 테스트 내용으로, 몇칸까지 추가할지 아직 결정 하지 못했다는 사실을 밝힙니다.
                    </p>
                </div>
                <button onClick={openModal} className='bg-base rounded-md text-white w-full py-1'>
                    Ask AI
                </button>
                <p className='h-8 text-sm text-slate-500'>
                    5 days ago
                </p>
            </div>
            {isModalOpen && ModalRoot && ReactDOM.createPortal(
                <Modal onClose={closeModal} isOpen={isModalOpen} size={"w-[calc(80%)] aspect-[4/5] md:aspect-[4/3] max-w-[700px]"}>
                    <AiModalLayout>
                        <NoteAiModal />
                    </AiModalLayout>
                </Modal>, ModalRoot)}
        </>
    )
}

export default function page() {

    return (
        <>
            <div className='px-4 py-4 space-y-6 w-full flex flex-col lg:px-[10%] lg:p-[16px]'>
                <div className='w-full flex justify-between'>
                    <p className='text-2xl lg:text-3xl font-semibold'>Notes</p>
                    <div className='flex space-x-4'>
                        <button className='px-3 py-1.5 rounded-md text-sm border'><GrSort /></button>
                        <button className='px-3 py-1.5 rounded-md text-sm border'><IoFilterSharp /></button>
                        <button className='flex items-center bg-base text-white px-3 py-1.5 rounded-md text-sm border'><FaPlus />Create</button>
                    </div>
                </div>
                {/* 검색 영역 */}
                <div className='hidden bg-blue-50 h-12 rounded-xl'>

                </div>
                <div className='relative h-12 flex justify-center items-center'>
                    <input placeholder='Search Notes' className='rounded-lg px-4 w-full h-full bg-slate-200 focus:outline-none focus:ring-0 focus:border-transparent ' />
                    <button className='absolute text-sm rounded-lg px-2 py-1.5 bottom-[50%] translate-y-[50%] right-2.5 bg-base text-white '>search</button>
                </div>
                {/* 필터 영역 */}
                <div className='w-full h-10 flex space-x-2 overflow-x-auto'>
                    <Tag tagValue={"test"} />
                    <Tag tagValue={"test"} />
                    <Tag tagValue={"test"} />
                    <Tag tagValue={"test"} />
                    <Tag tagValue={"test"} />
                    <Tag tagValue={"test"} />
                    <Tag tagValue={"test"} />
                </div>
                {/* 메모 영역 */}
                <div className='flex-1 w-full grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 '>
                    <NoteObject />
                </div>
            </div>
            <Footer />

        </>
    )
}
