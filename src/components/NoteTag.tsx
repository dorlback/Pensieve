'use client'
import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import { IoMdClose } from "react-icons/io";

const NoteTagLayout = tw.div`
    h-full flex flex-col space-y-4 
`

const NoteTagListLayout = tw.div`
    flex space-x-2 overflow-x-auto
`

const NoteTagInputLayout = tw.div`
    flex items-center space-x-2
`

const NoteTagInput = tw.input`
w-full lg:w-auto bg-slate-200 py-1 px-2 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent 
`

const NoteTagInputButton = tw.button`
    px-3 py-1 bg-base text-white rounded-lg
`

const NoteTagContainer = tw.div`
    space-x-4 border rounded-full px-4 py-1.5 flex justify-center items-center
`

const NoteTagDeleteButton = tw.button`
    font-bold text-red-400
`

export function Tag({ tagValue }) {
    return (
        <NoteTagContainer className='bg-slate-50 px-6'>
            <p className=' text-nowrap overflow-hidden text-ellipsis'>{'#'}{tagValue}</p>
        </NoteTagContainer>
    )
}

export default function NoteTag() {
    const [tag, setTag] = useState('')
    const [tags, setTags] = useState([]);

    const handleTagInputOnChange = (e) => {
        setTag(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('hi')
            e.preventDefault()
            handleInputButtonOnClick()
        }
    }

    const handleInputButtonOnClick = () => {
        if (tag !== '') {
            setTags([...tags, { value: tag }]);
            setTag('')
        } else {
            alert('Please write tag name')
        }
    }

    const handleTagDeleteButton = (index) => {
        const newInputs = tags.filter((_, i) => i !== index);
        setTags(newInputs);
    }

    return (
        <NoteTagLayout>
            <NoteTagInputLayout>
                <NoteTagInput
                    placeholder='Tag'
                    value={tag}
                    onChange={handleTagInputOnChange}
                    onKeyDown={handleKeyDown}
                />
                <NoteTagInputButton onClick={handleInputButtonOnClick}>add</NoteTagInputButton>
            </NoteTagInputLayout>
            <NoteTagListLayout>
                {tags.map((tag, index) => (
                    <NoteTagContainer>
                        <p className=' text-nowrap overflow-hidden text-ellipsis'>{'#'}{tag.value}</p>
                        <NoteTagDeleteButton onClick={() => { handleTagDeleteButton(index) }}><IoMdClose /></NoteTagDeleteButton>
                    </NoteTagContainer>
                ))}
            </NoteTagListLayout>
        </NoteTagLayout>
    )
}
