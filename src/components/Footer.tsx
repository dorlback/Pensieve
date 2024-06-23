import React from 'react'
import tw from 'tailwind-styled-components'

const FooterLayout = tw.div`
    hidden lg:flex flex-col w-full px-[20px] py-6  space-y-6 border-t
`

const FooterNav = tw.div`
    flex w-full
`

const FooterSiteDescription = tw.div`
    w-full flex justify-center text-slate-400
`

const FooterLink = tw.a`
    flex-1 flex justify-center text-slate-400
`

const MobileFooterBackGround = tw.div`
    h-14 lg:hidden
`

export default function Footer() {
    return (
        <>
            <FooterLayout>
                <FooterNav>
                    <FooterLink >Home</FooterLink>
                    <FooterLink >Usage</FooterLink>
                    <FooterLink >Docs</FooterLink>
                    <FooterLink >Blog</FooterLink>
                    <FooterLink >Contect</FooterLink>
                </FooterNav>
                <FooterSiteDescription >AskMemo 2024</FooterSiteDescription>
            </FooterLayout>
        </>
    )
}
