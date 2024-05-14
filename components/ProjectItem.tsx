import { SiSpring } from "react-icons/si";
import React, {useState} from "react";

const ProjectItem = ({title ,technology,member,handleClickItem,isAnimation} :{title : string,technology: string[] ,member:number ,handleClickItem: React.MouseEventHandler<HTMLDivElement>|undefined,isAnimation:boolean}) => {


    return (
        <div  onClick={isAnimation ? undefined : handleClickItem} style={{boxShadow:"10px 10px 10px rgba(0, 0, 0, 0.25)"}} className={"cursor-pointer hover:scale-[1.1] transition duration-500 mb-5 rounded-2xl w-full h-auto bg-white p-6 text-black relative overflow-x-hidden overflow-y-hidden"}>

            <h3 className={"text-md text-[#909090] mb-3"}>Project</h3>
            <h1 className={"text-xl font-bold mb-5"}>{title}</h1>
            <p className={"text-[12px]  before:h-2 before:w-16 before:bg-black before:content-[''] after:bg-black after:w-16 after:h-1 after:content-[''] mb-10 font-medium"}>----{technology.slice(0,2).join(', ')}-----</p>
            <div className={"flex justify-between z-10"}>
                <div className={"text-[12px] w-1/3"}>{member} member</div>
                <text className={"text-[12px] w-1/2 text-center"}>Click to see detail</text>
                <text className={"w-1/3 text-end"}></text>
            </div>
            <div className={"w-56 h-full absolute top-0 -right-20 "}>
                <img className={"rotate-90"} src={"/blue-wavy.png"}/>
            </div>
        </div>
    )
}
export default ProjectItem;