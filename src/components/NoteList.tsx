import React from 'react'
import tw from 'tailwind-styled-components'

const NoteListLayout = tw.div`
    px-4 space-y-6 lg:py-6 overflow-auto
`

const NoteObjectLayout = tw.div`
    flex w-full space-x-4 h-12 lg:h-14
`

const NoticeIconContainer = tw.div`
    h-full aspect-square bg-slate-200 rounded-lg
`

const NoteTitleLayout = tw.div`
    h-full flex-1 flex flex-col 
`

const NoticeTitle = tw.p`
    lg:text-lg font-semibold
`

const NoticeDescription = tw.p`
    text-xs lg:text-sm text-base
`


const NoticeDate = tw.div`
    text-sm lg:text-md text-base
`

function NoteObject() {
    return (
        <>
            <NoteObjectLayout>
                <NoticeIconContainer />
                <NoteTitleLayout>
                    <NoticeTitle >Product Roadmap 2023</NoticeTitle>
                    <NoticeDescription>Technology company</NoticeDescription>
                </NoteTitleLayout>
                <NoticeDate>
                    2 days ago
                </NoticeDate>
            </NoteObjectLayout>
        </>
    )
}

export default function NoteList() {
    return (
        <NoteListLayout>
            <NoteObject />
            <NoteObject />
            <NoteObject />
            <NoteObject />
            <NoteObject />
            <NoteObject />
            <NoteObject />
            <NoteObject />
        </NoteListLayout>
    )
}
