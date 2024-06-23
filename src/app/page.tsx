import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NoteList from "@/components/NoteList";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import tw from 'tailwind-styled-components'
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

const MainPageLayout = tw.main`
    overflow-auto lg:px-[10%] lg:py-[20px] space-y-[20px]
`

const MainPageTitleText = tw.p`
    px-4 font-bold text-xl lg:text-3xl
`

const MobileNoticeCreateButtonLayout = tw.div`
     px-4
`

const MobileNoticeCreateButton = tw.button`
    w-full py-3 bg-base text-white flex justify-center items-center rounded-md space-x-4
`

const Home: NextPage = () => {

    return (
        <MainPageLayout>
            <Hero />
            <MainPageTitleText>Recent Notes</MainPageTitleText>
            <NoteList />
            <MobileNoticeCreateButtonLayout>
                <MobileNoticeCreateButton>
                    <p><FaPlus /></p>
                    <p>Create Notice</p>
                </MobileNoticeCreateButton>
            </MobileNoticeCreateButtonLayout>
            <Footer />
        </MainPageLayout>
    );
};
export default Home;