"use client"
import React, {useEffect, useState} from "react";
import { Carousel, Progress} from 'antd';
import FadeIn from "@/components/Fade";
import "../public/background-header.png";

import Skill from "@/components/Skill";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";

export default function Home() {


    const [isFinishAnimation, setIsFinishAnimation] = useState(false);
    const [letters, setLetters] = useState(["P", "o", "r", "t", "f", "o", "l", "i", "o"]);
    const [isBlock, setIsBlock] = useState(Array(letters.length).fill(false));
    const [isClick, setIsClick] = useState(false);
    const [percent, setPercent] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setIsFinishAnimation(true)
        }, 2500)
    }, []);
    useEffect(() => {
        if (percent < 100) {
            let timer = setInterval(() => {
                if (percent == 100) {
                } else {
                    setPercent((prevPercent) => prevPercent + 10);
                }
            }, 500);
            return () => clearInterval(timer);
        }
    }, [percent]);

    console.log(percent);
    useEffect(() => {
        let timer = setInterval(() => {
            setIsBlock((prevIsBlock) => {
                const nextBlockIndex = prevIsBlock.indexOf(false);
                if (nextBlockIndex !== -1) {
                    return [...prevIsBlock.slice(0, nextBlockIndex), true, ...prevIsBlock.slice(nextBlockIndex + 1)];
                } else {
                    clearInterval(timer);
                    return prevIsBlock;
                }
            });
        }, 500);
        return () => clearInterval(timer);
    }, []);
    const handleClick = () => {
        setIsClick(true)
    }
    return (
        <main onClick={() => {
            if (percent === 100) handleClick();
        }} className={"flex flex-col h-screen w-screen relative overflow-hidden bg-main"}>
            <video autoPlay loop muted className="absolute  w-screen h-screen object-fill">
                <source src={"https://banvien.com/_next/static/media/banner-video-optimized.1d4e9280.mp4"}
                        type="video/mp4"/>
            </video>

            <div className={`${isClick ? "animate-click h-screen w-screen" : "hidden"}  flex flex-col bg-white z-10 absolute top-0 text-black`}>
                <Carousel swipeToSlide={true} draggable={true} className={"h-full w-screen text-white"}>
                    <FadeIn>
                        <AboutMe/>
                    </FadeIn>
                    <FadeIn>
                       <Project/>
                    </FadeIn>
                    <FadeIn>
                       <Skill/>
                    </FadeIn>
                </Carousel>

            </div>
            <div className={"flex flex-col  justify-end align-end items-center relative h-1/3"}>
                <text id={"text"}
                      className={"text-transparent bg-[#565656] bg-clip-text text-shadow-sm text-5xl lg:text-9xl text-[#0CAFA2] uppercase stroke-black"}>Portfolio
                </text>
                <div
                    className={`${isFinishAnimation ? "animate-infinity" : "animate-clip"}  absolute bottom-0 left-1/2 text-5xl lg:text-9xl -translate-x-1/2  uppercase `}>
                    Portfolio
                </div>
            </div>
            <div className={"flex-col h-1/2 text-center flex justify-center items-center"}>
                <Progress percent={percent} className={"w-9/12"}/>

                        <p className={` ${ percent === 100 ? "visible":"invisible"} mt-10 animate__animated animate__pulse animate__infinite text-white`}>Nhấn vào
                            đây để tiếp
                            tục ...</p>
            </div>
        </main>
    );
}
