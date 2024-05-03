import {Button} from "antd";

const AboutMe = () => {
    const detailsMe = [
        {
            title: "Fullname",
            content: "Tran Gia Lam",
        }, {
            title: "Phone",
            content: "093 449 7654",
        }, {
            title: "Address",
            content: "8 District,HCM City, Viet Nam",
        }, {
            title: "Email",
            content: "trangialam91b@gmail.com"
        },
        {
            title: "Role",
            content: "Frontend Developer",
        },
        {
            title: "Program Language",
            content: "Javascript, Typescript, Java",
        },
        {
            title: "Framework",
            content: "ReactJS , NextJS , SpringBoot , TailwindCSS , Redux",
        }, {
            title: "Database",
            content: "MySQL, Firebase",
        }, {
            title: "Other",
            content: "Ant Design,AI, Draw.io, Balsamiq, Figma, Git, Junit, Postman, Wordpress",
        }, ]
    const dataTable1 = detailsMe.slice(0, detailsMe.length / 2 + 1)
    const dataTable2 = detailsMe.slice(detailsMe.length / 2 + 1, detailsMe.length)
    const aboutMe = "Hi there, I’m Tran Gia Lam, a 22-year-old. I'm 4th year student and study in Sai Gon University. My primary is web developer. I love creative so i choose become a Front-end developer to make make life more beautiful and joyful by creation. I have a passion for learning new technology that have much more knowledge and make develop website easier. When I’m not coding, you’ll find me exploring the great outdoors, hiking, and camping with my friends. I’m really want to find a work to start career dreams."
    const background = "/background-header.png"
    return (
        <div
            className={"flex w-screen h-screen flex-row justify-center text-end pl-32 pr-8 relative  pt-5 text-black bg-main"}>
            <img src={background} className={"object-fill absolute bottom-7  left-0 w-full h-48 z-0"}/>
            <div className={"w-1/2 text-start flex justify-between flex-col"}>
                <h1 className={"text-2xl text-green-primary font-bold uppercase tracking-widest"}>Portfolio</h1>
                <h1 className={"font-bold mb-10 text-3xl text-black after:absolute after:-bottom-3 after:left-0 relative after:w-1/4 after:h-1 after:bg-black"}>
                    About me</h1>
                <p>{aboutMe}</p>
                <div className={"flex flex-row mt-10 rounded-2xl bg-white shadow-2xl py-3 px-5 z-10 relative"}>
                    <table className={"text-md w-1/2"}>
                        <tbody>
                        {
                            dataTable1.map((detail, index) => {
                                return (
                                    <tr key={index}>
                                        <td className={"w-1/4 py-4 text-black font-medium"}>{detail.title}</td>
                                        <td className={"w-3/4 py-4 text-gray-500"}>{detail.content}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <table className={"text-md w-1/2"}>
                        <tbody>
                        {
                            dataTable2.map((detail, index) => {
                                return (
                                    <tr key={index}>
                                        <td className={"w-1/4 py-4 text-black font-medium"}>{detail.title}</td>
                                        <td className={"w-3/4 py-4 text-gray-500"}>{detail.content}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <Button href={"https://www.google.com/intl/vi/gmail/about/"} type={"primary"} className={"absolute -top-4 right-4 "}>Email me</Button>
                </div>

                <h1 className={"text-5xl my-12 text-white after:absolute after:-bottom-3 after:left-0 relative after:w-16 after:h-1 after:bg-white"}>Trần
                    Gia Lâm</h1>
            </div>

            <div className={"w-1/2 flex items-center justify-center relative overflow-hidden"}>
                <img src={"/cv.jpg"} className={"w-7/12 rounded-3xl z-10 shadow-2xl"}/>
                <div className={"h-full absolute w-64 bg-white top-0 right-32 z-0"}>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;

