import "../css/experience.css";
import React, {useState} from "react";
import {Spin, Timeline} from "antd";

const Experience = () => {
    const [isClick, setIsClick] = useState(false);

    const handleClickLeft = () => {
        setIsClick(true);
        console.log('Transition ended');
    };
    const handleClickRight = () => {
        setIsClick(false);
        console.log('Transition ended');
    };
    return (
        <div className={"text-black bg-main h-screen w-screen overflow-x-hidden overflow-y-scroll  "}>
            <div onClick={handleClickLeft}
                 className={`flex clip-path-upper  absolute w-screen h-screen top-0 left-0 bg-white pl-32 pt-5 ${isClick ? "" : "clip-path-upper2 "} z-10 `}>
                <div>
                    <div
                        className={`transition duration-500 move-header-left ${isClick ? "delay-500" : " -translate-x-24  delay-1000"}`}>
                        <h1 className={"text-2xl text-green-primary font-bold uppercase tracking-widest"}>Portfolio</h1>
                        <h1 className={"font-bold mb-10 text-3xl text-black after:absolute after:-bottom-3 after:left-0 relative after:w-16 after:h-1 after:bg-black"}>
                            Experience</h1>
                    </div>
                    <Timeline className={"w-9/12"}
                              mode={"left"}
                              items={[
                                  {
                                      color: 'green',
                                      label: 'T8 - 2020',
                                      children: 'Started accumulating knowledge in SaiGon University',
                                  },
                                  {
                                      color: 'green',
                                      label: 'June - 2022',
                                      children: 'Join project Management SupperMarket use Java Swing',
                                  },
                                  {
                                      color: 'green',
                                      label: 'May - 2023',
                                      children: 'Join project Cinema Website use PHP with Front-end role',
                                  },
                                  {
                                      color: 'green',
                                      label: 'Dec - 2023',
                                      children: 'Join project Report Facility use ReactNative with Front-end role by university requirement',
                                  },
                                  {
                                      color: 'green',
                                      label: 'Dec - 2023',
                                      children: 'Join project Ecommerce Website use ReactJS with Front-end and Back-end role',
                                  },
                                  {
                                      color: 'green',
                                      label: 'Jan - 2024',
                                      children: 'Start Internship at Irics company during 3 month',
                                  },
                                  {
                                      color: 'blue',
                                      children: '....',
                                  },
                                  {
                                      dot: <Spin/>,
                                      color: 'red',
                                      children: 'Become Senior Website Developer',
                                  },
                              ]}
                    />
                </div>
                <div>
                    <div
                        className={`transition duration-500 move-header-left ${isClick ? "delay-500" : " -translate-x-26  delay-1000"}`}>
                        <h1 className={"invisible text-2xl text-green-primary font-bold uppercase tracking-widest"}>Portfolio</h1>
                        <h1 className={"font-bold mb-10 text-3xl text-black after:absolute after:-bottom-3 after:left-0 relative after:w-16 after:h-1 after:bg-black"}>
                            Achievement</h1>
                    </div>
                    <Timeline className={"w-full"}
                              mode={"left"}
                              items={[
                                  {
                                      color: 'green',
                                      label: 'Dec - 2023',
                                      children: 'Implement project by University Requirement',
                                  },
                                  {
                                      color: 'green',
                                      label: 'Jan - 2024',
                                      children: 'Top 10% GPA in 2023',
                                  },
                                  {
                                      dot: <Spin/>,
                                      color: 'red',
                                      children: 'More',
                                  },
                              ]}
                    />
                </div>

            </div>
            <div onClick={handleClickRight}
                 className={`flex absolute w-screen h-screen top-0 left-0 bg-black text-white pr-32 pt-5 `}>
                <div className={"w-8/12 pl-72 flex flex-row mt-20 justify-evenly gap-10"}>

                    <div>
                        <h3 className={" text-2xl font-bold"}>Short-Term</h3>
                        <p>Desire to apply the knowledge
                            have gained to real projects and enhance
                            my skills for working in a professional
                            environment and contribute for company</p>
                        <h6 className={"mt-5 font-medium text-lg"}>To do list in Short-Term</h6>
                        <Timeline className={"custom-timeline mt-3 text-white"}
                            items={[
                                {
                                    color:"white",
                                    children: 'Find a Internship Job',
                                },
                                {
                                    color:"white",
                                    children: 'Gain 650 Toeic score',
                                },
                                {
                                    color:"white",
                                    children: 'Accumulate Experience',
                                },
                                {
                                    color:"white",
                                    children: 'Improve Speaking and Listen Skill',
                                },
                                {
                                    color:"white",
                                    children: 'Become primary employee',
                                }]}
                        />
                    </div>
                    <div className={"ml-10"}>
                        <li className={" text-2xl font-bold "}>Long-Term</li>
                        <p>
                            When I have accumulated
                            enough experience in the field, I will further
                            advance into developing back-end skills,
                            building upon my existing knowledge to
                            become a full-stack developer.
                        </p>
                        <h6 className={"mt-5 font-medium text-lg"}>To do list in Long-Term</h6>
                        <Timeline className={"custom-timeline mt-3 text-white"}
                            items={[
                                {
                                    color:"white",
                                    children: 'Find a Job',
                                },
                                {
                                    color:"white",
                                    children: 'Learn a new Back-end language',
                                },
                                {
                                    color:"white",
                                    children: 'Develop Back-end Skill',
                                },
                                {
                                    color:"white",
                                    children: 'Build Full-Stack Developer',
                                },
                                {
                                    color:"white",
                                    children: 'Try lead a team',
                                },
                                {
                                    color:"white",
                                    children: 'Become employee best contribute of company',
                                }
                            ]}
                        />
                    </div>


                </div>
                <div className={"w-4/12 flex justify-end"}>
                    <div
                        className={`transition duration-500  ${isClick ? "translate-x-28  delay-1000" : " delay-500"}`}>
                        <h1 className={"text-2xl text-green-primary font-bold uppercase tracking-widest"}>Portfolio</h1>
                        <h1 className={"font-bold mb-10 text-3xl text-white after:absolute after:-bottom-3 after:left-0 relative after:w-16 after:h-1 after:bg-white"}>
                            Plan for Future</h1>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Experience;