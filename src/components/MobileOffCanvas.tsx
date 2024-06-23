'use client'
import React from 'react'

interface iMobileOffCanvas {
    onClose: any;
    isOpen: any;
    children: any;
}

export default function MobileOffCanvas({ onClose, isOpen, children }: iMobileOffCanvas) {
    return (
        <div className='duration-300 relative flex items-center justify-end w-[calc(100vw)] h-[calc(100vh)]'>
            <div className='absolute top-0 left-0 h-full w-full bg-black opacity-40' onClick={onClose} />
            <div className={`absolute bottom-0 left-0 w-[100%] bg-white dark:bg-gray-700  rounded-t-xl z-50 transition-transform duration-500`}
                style={{ animation: 'slide-in 0.5s forwards' }}
            >
                {/* <button onClick={onClose} className='bg-base text-lime-50 dark:text-darkbase px-2 pt-0.5 pb-1 absolute right-2 top-2 md:right-4 md:top-4 text-sm rounded-xl'>close</button> */}
                {children}
            </div>
            <style>
                {`
                    @keyframes slide-in {
                        from { transform: translateY(100%); }
                        to { transform: translateY(0); }
                    }
                `}
            </style>
        </div>
    )
}