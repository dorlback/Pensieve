'use client'
import React, { useRef, useEffect, useState } from 'react';
import ContentEditable from 'react-contenteditable'

function NoteWrite({ content, setContent }) {
    const noteRef = useRef(null);

    // 가능 하면, / 누르면 여러 기능 작동 하도록 구현 해도 좋을듯
    const handleChange = (target) => {
        console.log(target.value)
        setContent(target.value)
    }

    return (
        <ContentEditable
            className='focus:outline-none focus:ring-0 focus:border-transparent '
            ref={noteRef}
            contentEditable={true}
            suppressContentEditableWarning={true}
            html={content}
            onChange={({ target }) => handleChange(target)}
            placeholder='start your note'
        >
        </ContentEditable>
    );
}

export default NoteWrite;
