import React, {useEffect, useRef, useState} from "react";
import "../css/skill.css";
import {SiFigma, SiJavascript, SiPostman, SiReact, SiRedux, SiSpring, SiTailwindcss} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import {RiNextjsLine} from "react-icons/ri";

const Skill = () => {
    const [selectedItem, setSelectedItem] = useState({
        icon: <SiReact/>,
        title: "Click on item to see details",
        content: ""
    });

    const [isAnimation, setIsAnimation] = useState(false);
    const backgroundColorItem = [
        "#FFCCCC",
        "#CCFFCC",
        "#CCCCFF",
        "#FFFFCC",
        "#CCFFFF",
        "#FFCCFF",
        "#ffdb99", // new color
        "#ffc8b5", // new color
        "#99CCFF"  // new color
    ];
    const animationRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setIsAnimation(true)
        if (animationRef.current) {
            animationRef.current.addEventListener('animationend', () => {
                console.log('Animation ended');
                setIsAnimation(false);
            });
        }
    }, [selectedItem]);
    const arrayIcon = [{
        icon: <SiReact/>,
        title: "ReactJS",
        content: "I have study ReactJS Framework from early 2023. I have experience in building website with ReactJS. I have knowledge about React Hook, React Router, Redux, Context API to develop a website."
    }, {
        icon: <SiSpring/>,
        title: "SpringBoot",
        content: "I have knowledge about SpringBoot to build a backend server. I have experience in building a website with SpringBoot and connect to MySQL database. Authentication by JWT. Using JPA to query and create interface."
    }, {
        icon: <SiRedux/>,
        title: "Redux",
        content: "I have knowledge about Redux to manage state in ReactJS. I have experience in building a website with Redux. I have knowledge about Redux Thunk, Redux Saga to manage state in ReactJS."
    }, {
        icon: <FaJava/>,
        title: "Java",
        content: "I have knowledge about Java core. I have experience in building a website with Java, Servlet and create an app by Java Swing.",
    }, {
        icon: <RiNextjsLine/>,
        title: "NextJS",
        content: "I am trained during internship about NextJS and I have knowledge to build a website with SSR. I have experience in building a website with NextJS API, NextJS Image to develop a website.",
    }, {
        icon: <SiTailwindcss/>,
        title: "TailwindCSS",
        content: "I have knowledge about TailwindCSS to design website. I have experience in building a website with TailwindCSS. I have knowledge about TailwindCSS to design website faster.",
    }, {
        icon: <SiJavascript/>,
        title: "JavaScript",
        content: "I have knowledge about TailwindCSS to design website. I have experience in building a website with TailwindCSS. I have knowledge about TailwindCSS to design website faster.",
    }, {
        icon: <SiPostman/>,
        title: "PostMan",
        content: "I have knowledge about TailwindCSS to design website. I have experience in building a website with TailwindCSS. I have knowledge about TailwindCSS to design website faster.",
    }, {
        icon: <SiFigma/>,
        title: "Figma",
        content: "I have knowledge about TailwindCSS to design website. I have experience in building a website with TailwindCSS. I have knowledge about TailwindCSS to design website faster.",
    }]
    const handleClickItem = (index: number) => {
        console.log("handleClickItem")
        setSelectedItem(arrayIcon[index])
    }
    return (
        <div
            className=" gap-5 md:gap-0 bg-main flex bg-gray-50 text-black flex-row justify-between w-screen relative overflow-hidden">
            <div className={`w-1/2 `}>
                <div className={"pl-8 md:pl-32 pt-5 mb-16"}>
                    <h1 className={"text-2xl text-green-primary font-bold uppercase tracking-widest"}>Portfolio</h1>
                    <h1 className={"font-bold  text-3xl text-black after:absolute after:-bottom-3 after:left-0 relative after:w-16 after:h-1 after:bg-black"}>
                        Skill</h1>
                </div>

                <div ref={animationRef}
                     className={`min-h-96 px-6 md:px-10 lg:px-32 py-10 flex flex-col text-white bg-black w-full h-min  drop-shadow-2xl ${isAnimation ? "animate__animated animate__fadeInLeft" : ""}`}>
                    <div className={"flex flex-col md:flex-row  justify-between items-center"}>
                        <h1 className={"text-xl md:text-4xl lg:text-7xl font-bold mb-3"}>
                            {selectedItem.title}
                        </h1>
                        {
                            React.cloneElement(selectedItem.icon, {
                                fontSize: 54,
                                className: `mb-3`
                            })
                        }
                    </div>
                    <p className={"mb-2"}>
                        {selectedItem.content}                    </p>
                </div>
            </div>

            <div className={"flex gap-3 md:gap-10 flex-row justify-end h-[100vh] w-1/2 pr-1 md:pr-5 lg:pr-32"}>
                <div className={"w-1/3 hidden md:flex flex-col justify-center items-center origin-center -rotate-90"}>
                    <h1 style={{WebkitTextStroke: "2px black"}}
                        className={"text-7xl text-white whitespace-nowrap"}>Have Knowledge</h1>
                    <h2 className={"text-lg text-gray-400 whitespace-nowrap"}>Click on each item to see detail</h2>
                </div>

                {
                    Array.from({length: 2}).map((value, index1) => {
                        return (
                            <div key={index1}
                                 className={"icon-slides w-1/2 md:w-1/4 h-full flex flex-col overflow-hidden text-black relative " +
                                     "before:w-full before:h-12 before:bg-before-opacity before:absolute before:top-0 before:z-10 " +
                                     "after:w-full after:h-12  after:bg-after-opacity after:absolute after:bottom-0 "}>
                                {
                                    Array.from({length: 2}).map((value, index) => {
                                        return (
                                            <div key={index}
                                                 className={` ${index1 == 1 ? "animation-scroll-up" : "animation-scroll-down"} flex flex-col items-center text-black  `}>
                                                {
                                                    arrayIcon.map((value, index) => {
                                                        return (
                                                            <div
                                                                onClick={() => !isAnimation ? handleClickItem(index) : ""}
                                                                key={index}
                                                                style={{backgroundColor: backgroundColorItem[index % backgroundColorItem.length]}}
                                                                className={`text-black  cursor-pointer hover:text-teal-400 hover:scale-[1.2] transition duration-500 py-7 h-36 lg:h-54 w-full text-center rounded-2xl m-auto flex flex-col justify-center items-center mb-10`}>
                                                                {React.cloneElement(value.icon, {
                                                                    fontSize: 54,
                                                                    className: `mb-3`
                                                                })}
                                                                <text className={"font-medium"}>{value.title}</text>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}
export default Skill;