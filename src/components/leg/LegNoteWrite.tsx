'use client'
import React, { useRef, useEffect, useState } from 'react';

function NoteWrite({ id, onEnterPress, onBackspacePress, setFocus, content, onArrowUp, onArrowDown, onArrowLeft, onArrowRight }) {
    const noteRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState(0);

    useEffect(() => {
        if (noteRef.current && setFocus) {
            noteRef.current.focus();
        }
    }, [setFocus]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                document.execCommand('insertLineBreak');
                e.preventDefault();
            } else {
                e.preventDefault();
                const currentContent = noteRef.current.innerText;
                // noteRef.current.innerText = '';
                onEnterPress(id, currentContent);
            }
        } else if (e.key === 'Backspace') {
            if (noteRef.current.innerText === '') {
                e.preventDefault();
                onBackspacePress(id);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            onArrowUp(id);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            onArrowDown(id);
        } else if (e.key === 'ArrowLeft') {
            var selection = window.getSelection()
            if (selection.anchorOffset === 0) {
                console.log('test')
                e.preventDefault();
                onArrowLeft(id);
            }
        } else if (e.key === 'ArrowRight') {
            var selection = window.getSelection()
            if (selection.anchorOffset === noteRef.current.innerText.length) {
                e.preventDefault();
                onArrowRight(id);
            }
        }
    };

    return (
        <div
            className='focus:outline-none focus:ring-0 focus:border-transparent'
            ref={noteRef}
            contentEditable={true}
            onKeyDown={handleKeyDown}
            suppressContentEditableWarning={true}
        >
            {content}
        </div>
    );
}

export default NoteWrite;
