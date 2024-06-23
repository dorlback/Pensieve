import React from 'react'
import tw from 'tailwind-styled-components'

const HeroLayout = tw.div`
    overflow-hidden w-full lg:h-[700px] lg:p-[16px]
`

const HeroImageContainer = tw.div`
    overflow-hidden relative w-ful h-full bg-slate-200 lg:rounded-xl shadow-md
`

const HeroTextLayout = tw.div`
    absolute bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] lg:translate-x-0 lg:translate-y-0 lg:bottom-12 lg:left-12 flex flex-col space-y-7
`

const HeroTextTitle = tw.p`
    text-white text-2xl lg:text-5xl font-bold
`

const HeroTextDescript = tw.p`
    text-white text-sm lg:text-lg
`

const HeroButton = tw.button`
    hidden lg:block text-white w-40 bg-base py-3 rounded-xl
`



export default function Hero() {
    return (
        <HeroLayout>
            <HeroImageContainer >
                <img className={``} src={'/office.jpg'} />
                <HeroTextLayout >
                    <HeroTextTitle >Welcome to Pensieve</HeroTextTitle>
                    <HeroTextDescript >Capture your and organize your ideas with Notes</HeroTextDescript>
                    <HeroButton >Create Note</HeroButton>
                </HeroTextLayout>
            </HeroImageContainer>
        </HeroLayout>
    )
}
