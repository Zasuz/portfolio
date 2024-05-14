import ProjectItem from "@/components/ProjectItem";
import "../css/project.css"
import {Button, Carousel, Spin} from "antd";
import React, {useEffect, useRef, useState} from "react";
import storage from "@/firebase.config";
import {getDownloadURL, listAll, ListResult, ref} from "firebase/storage"

const Project = () => {
    const [isAnimation, setIsAnimation] = useState(false)
    const animationRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true)
    type ProjectSelectedType = {
        folder: string
        type: string
        title: string;
        member: number;
        techUse: string[];
        img: string[];
        responsibility: string[];
        goal: string[];
        learnInProject: string[];
        period: string;
        linkSource: string;
        linkDeloy: string;
        about: string;
        role: string[]
        [key: string]: string | number | string[];
    }


    const [projectSelected, setProjectSelected] = useState<ProjectSelectedType>({
        folder: "",
        type: "",
        title: "",
        member: 0,
        techUse: [""],
        img: [""],
        responsibility: [""],
        goal: [""],
        learnInProject: [""],
        period: "",
        linkDeloy: "",
        linkSource: "",
        about: "",
        role: [""],
    })
    const projectItem = [{
        folder: "ecommerce-website",
        type: "website",
        title: "Ecommerce Website",
        member: 4,
        techUse: ["SpringBoot", "ReactJS", "JWT", "MySQL", "Tailwindcss",],
        img: [""],
        responsibility: ["Using ReactJS to implement user-interface", "Implement JWT features", "Design user-interface on Figma", "Design work-flow for system"],
        goal: ["Create a website for selling products"],
        learnInProject: ["Learn about Spring Boot, ReactJS", "Improve my coding", "Improve my design skill", "Have knowledge about JWT Authentication"],
        period: "08/2023 - 12/2023",
        linkSource: "https://github.com/teamdptl/EcommerceApp",
        linkDeloy: "",
        about: "E-commerce websites play a crucial role in connecting consumers with products and services through the online environment. These websites provide users with the convenience of shopping from home and a smooth, user-friendly online shopping experience. With the advancement of technology and the Internet, e-commerce websites are continually improving in user interface, features, and customer experience. They offer consumers a wide range of product choices, from electronics to fashion and groceries, helping them save time and effort.",
        role: ["Frontend", "Backend", "Design"]

    }, {
        folder: "report-damaged",
        type: "android",
        title: "Report damaged facilities",
        member: 4,
        techUse: ["ReactNative", "Laravel"],
        img: [""],
        responsibility: ["Using ReactNative to implement user-interface", "Design user-interface on Figma"],
        goal: ["Create a app according university`s request", "Get perfect score from university", "It will be deloy by university"],
        learnInProject: ["Learn about ReactNative", "Improve my design skill", "Learn about API"],
        period: "10/2023 - 12-2023",
        linkSource: "https://github.com/teamdptl/ReportMobile",
        linkDeloy: "",
        about: "The app is custom-built for the university. It will assist both students and professors in reporting infrastructure damages. Subsequently, the university can receive the information and address it accordingly.",
        role: ["Frontend", "Design"],

    }, {
        folder: "load-video",
        type: "website",
        title: "Load Video From URL",
        member: 1,
        techUse: ["NextJS", "Redux"],
        img: [""],
        responsibility: ["All"],
        goal: ["Create a website load video from URL Youtube, Tiktok, Instagram"],
        learnInProject: ["Improve my skill about NextJS", "Learn about Redux", "Learn about toolkit"],
        period: "1/2024 - 1-2024",
        linkSource: "https://github.com/Zasuz/SearchVideo",
        linkDeloy: "https://search-video-zasuzs-projects.vercel.app/",
        about: "",
        role: ["All"],

    }, {
        folder: "pg-clone",
        type: "website",
        title: "PG Clone Website",
        member: 1,
        techUse: ["NextJS", "Tailwindcss", "Antd"],
        img: [""],
        responsibility: ["All"],
        goal: ["Create a website clone",],
        learnInProject: ["Improve my skill about NextJS", "Improve my skill about Tailwindcss", "Learn about Antd"],
        period: "1/2024 - 3-2024",
        linkSource: "https://github.com/Zasuz/pgirics",
        linkDeloy: "https://pgirics.vercel.app/",
        about: "Clone PG website with NextJS, Tailwindcss, Antd and deploy on Vercel. Link primary website : pg.vn.com",
        role: ["All"],

    }, {
        folder: "cinema-website",
        type: "website",
        title: "Cinema Website",
        member: 4,
        techUse: ["PHP"],
        img: [""],
        responsibility: ["Using PHP to implement user-interface"],
        goal: ["Create a website for selling products"],
        learnInProject: ["Learn about PHP"],
        period: "1/2023 - 5-2023",
        linkSource: "https://github.com/teamdptl/WebsiteRapPhim",
        linkDeloy: "",
        about: "The cinema website boasts an array of features aimed at enhancing the movie-watching experience. Users can easily navigate through the platform to book tickets online, select preferred seating arrangements, and explore detailed showtime schedules. Additionally, comprehensive movie information, including cast details, directorial credits, synopses, and trailers, empowers users to make informed viewing choices. With interactive seating maps and occasional promotional offers, the website ensures a seamless and enjoyable cinema experience from start to finish.",
        role: ["Frontend"],

    }]
    useEffect(() => {
        setProjectSelected(projectItem[0]);
        listAllImage(0)
    }, []);
    const titleTable = ["Technology Use", "Role", "Responsibility", "Goal", "Learn In Project"]
    const keyToGetAttribute: any = {
        "Role": "role",
        "Technology Use": "techUse",
        "Responsibility": "responsibility",
        "Goal": "goal",
        "Learn In Project": "learnInProject"
    }

    const handleClickItem = (index: number) => {

        setProjectSelected(projectItem[index]);
        listAllImage(index)
        setIsAnimation(true)
        if (animationRef.current) {
            animationRef.current.addEventListener('animationend', () => {
                console.log('Animation ended');
                setIsAnimation(false);
            });
        }
    }


    const listAllImage = (index: number) => {
        const path = projectItem[index].folder;
        const imagesRef = ref(storage, '/image/' + path);
        setIsLoading(true)
        listAll(imagesRef).then((result: ListResult) => {
            const urls = result.items.map((imageRef) => {
                return getDownloadURL(imageRef);
            });
            Promise.all(urls).then((downloadUrls) => {
                setProjectSelected(prevState => ({
                    ...prevState,
                    img: downloadUrls
                }));
                projectItem[index].img = downloadUrls;
            });
        }).catch((error: Error) => {
            console.error('Error:', error);
        }).finally(() => {
            setIsLoading(false)
        });
    }
    return (
        <div
             className={` bg-main flex flex-row w-screen h-screen relative overflow-hidden`}>
            <div className={"pt-10 px-4 lg:px-24 w-1/3 h-full overflow-scroll overflow-x-hidden direction-rtl relative"}>
                <div className={"direction-ltr"}>
                    <h1 className={"text-2xl text-green-primary font-bold uppercase tracking-widest"}>Portfolio</h1>
                    <h1 className={"font-bold mb-10 text-3xl text-black after:absolute after:-bottom-3 after:left-0 relative after:w-16 after:h-1 after:bg-black"}>
                        Project</h1>
                    <div className={"gap-10 flex flex-col justify-center"}>
                        {
                            projectItem.map((value, index) => {
                                return (
                                    <ProjectItem isAnimation={isAnimation} title={value.title} member={value.member}
                                                 technology={value.techUse}
                                                 key={index} handleClickItem={() => handleClickItem(index)}/>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <div ref={animationRef}
                 className={`${isAnimation == true ? "animate__animated animate__fadeInRight" : ""} w-2/3 h-full bg-white rounded-l-3xl text-black pl-16 pt-10 pr-10 details-carousel overflow-y-scroll `}>
                <h6 className={"text-gray-400"}>Details</h6>
                <div className={"flex flex-row justify-between items-center"}>
                    <h1 className={"text-2xl lg:text-6xl font-medium mb-8 relative after:absolute after:-bottom-3 after:w-16 after:h-1 after:bg-black after:left-0"}>{projectSelected.title}</h1>
                    <div className={"flex flex-row gap-5"}>
                        <Button type="primary" href={projectSelected.linkSource} className={""}>Link Source</Button>
                        <Button type="primary" href={projectSelected.linkDeloy} className={projectSelected.linkDeloy == "" ? "hidden": "block"}>Go to Website</Button>
                    </div>
                </div>
                {
                    isLoading ?
                        <div className={"flex w-full h-96 flex items-center justify-center"}>
                            <Spin className={"text-3xl"}/>
                        </div> :
                        <Carousel slidesToShow={projectSelected.type == "android" ? 3 : 1} swipeToSlide draggable
                                  dots={false}
                                  arrows={true}
                                  className={"cursor-pointer rounded-2xl !w-full mb-8"}>
                            {
                                projectSelected.img.map((item, index) => {
                                    return (
                                        <img key={index} src={item}
                                             className={`${projectSelected.type == "android" ? "!w-8/12" : ""} h-96 object rounded-2xl`}/>
                                    )
                                })
                            }
                        </Carousel>
                }

                <div className={"w-full h-auto flex flex-col lg:flex-row gap-10"}>
                    <div className={" w-full lg:w-3/12 shadow-2xl bg-white p-6 rounded-2xl"}>
                        <h1 className={"mb-4 font-medium text-lg"}>About Project</h1>
                        <p>{projectSelected.about}</p>
                    </div>
                    <div className={" w-full lg:w-9/12 shadow-2xl bg-white p-6 rounded-2xl flex flex-col"}>
                        <h1 className={"mb-4 font-medium text-lg"}>Information</h1>
                        <table className={"w-full rounded-2xl border-2 border-gray-100 flex-grow"}>
                            <tbody>
                            {
                                titleTable.map((title, index) => {
                                    const key = keyToGetAttribute[title]
                                    return (
                                        <tr key={index} className={`${index % 2 ? "bg-gray-100" : ""}`}>
                                            <td className={"w-1/3 p-5"}>
                                                <h6 className={"font-medium"}>{title}</h6>
                                            </td>
                                            <td>
                                                {
                                                    Array.isArray(projectSelected[key]) ? (
                                                        <ul className={"p-5"}>
                                                            {(projectSelected[key] as string[]).map((value: string, index: number) => (
                                                                <li className={"list-disc"} key={index}>{value}</li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p>{projectSelected[key]}</p>
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                        <div className={"flex flex-row gap-5 my-5 items-center justify-end"}>
                            <Button type="primary" href={projectSelected.linkSource} className={""}>Link Source</Button>
                            <Button type="primary" href={projectSelected.linkDeloy} className={projectSelected.linkDeloy ==""? "hidden":"block"}>Go to Website</Button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Project;