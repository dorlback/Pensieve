'use client'
import NoteWrite from '@/components/NoteWrite'
import React, { useRef, useState } from 'react'
import tw from 'tailwind-styled-components'

const PageLayout = tw.main`
    lg:px-[10%] lg:py-[20px] space-y-[20px]
`

const NoteLayout = tw.div`
    w-full flex flex-col space-y-4
`

const NoteTitle = tw.input`  
    w-full text-4xl py-2 focus:outline-none focus:ring-0 focus:border-transparent
`

const NoteDateLayout = tw.div`
`

const NoteDate = tw.p`
    text-slate-400
`

const NoteWriteLayout = tw.div`
   h-full border-t py-2 space-y-2
`

// NoteWrite div 가 focus 되면 place holder 내용 바꿔서 기능 띄우기.
// 작성 가능한 부분은 div 로 이루어져 있고, 자바스크립트 액션으로 값 변경 되면서 작성 되도록 변경

export default function page() {
    const [notes, setNotes] = useState([{ id: 0, focus: true, content: '' }]);
    const noteCounter = useRef(1);

    const addNote = (currentId, currentContent) => {
        const newNote = { id: noteCounter.current++, focus: true, content: '' };
        const currentIndex = notes.findIndex(note => note.id === currentId);
        const updatedNotes = notes.map((note, index) => ({
            ...note,
            focus: index === currentIndex + 1
        }));
        updatedNotes[currentIndex].content = currentContent;
        updatedNotes.splice(currentIndex + 1, 0, newNote);
        setNotes(updatedNotes);
    };

    const removeNote = (noteId) => {
        const currentIndex = notes.findIndex(note => note.id === noteId);
        const newNotes = notes.filter(note => note.id !== noteId);
        if (newNotes.length > 0 && currentIndex > 1) {
            newNotes[currentIndex - 1].focus = true;
        }
        setNotes(newNotes);
    };

    const moveFocus = (currentId, direction) => {
        const currentIndex = notes.findIndex(note => note.id === currentId);
        if (direction === 'up' && currentIndex > 0) {
            const updatedNotes = notes.map((note, index) => ({
                ...note,
                focus: index === currentIndex - 1
            }));
            setNotes(updatedNotes);
        } else if (direction === 'down' && currentIndex < notes.length - 1) {
            const updatedNotes = notes.map((note, index) => ({
                ...note,
                focus: index === currentIndex + 1
            }));
            setNotes(updatedNotes);
        } else if (direction === 'left' && currentIndex > 0) {
            const updatedNotes = notes.map((note, index) => ({
                ...note,
                focus: index === currentIndex - 1
            }));
            setNotes(updatedNotes);
        } else if (direction === 'right' && currentIndex < notes.length - 1) {
            const updatedNotes = notes.map((note, index) => ({
                ...note,
                focus: index === currentIndex + 1
            }));
            setNotes(updatedNotes);
        }
    };

    return (
        <PageLayout>
            <NoteLayout>
                <NoteTitle placeholder='TITLE' value={"Title test"} />
                <NoteDateLayout >
                    <NoteDate>
                        2024-06-10
                    </NoteDate>
                </NoteDateLayout>
                <NoteWriteLayout>
                    {notes.map((note, index) => (
                        <NoteWrite
                            key={note.id}
                            id={note.id}
                            onEnterPress={addNote}
                            onBackspacePress={removeNote}
                            setFocus={note.focus}
                            content={note.content}
                            onArrowUp={() => moveFocus(note.id, 'up')}
                            onArrowDown={() => moveFocus(note.id, 'down')}
                            onArrowLeft={() => moveFocus(note.id, 'left')}
                            onArrowRight={() => moveFocus(note.id, 'right')}
                        />
                    ))}
                </NoteWriteLayout>
            </NoteLayout>
        </PageLayout>
    )
}
