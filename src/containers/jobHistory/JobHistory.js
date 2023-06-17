import React, {useContext} from "react";
import SegmentTitle from "../../components/SegmentTitle";
import Experience from "./Experience";
import experience from '../../assets/experience.png'
import SwitchContext from "../../context/ThemeSwitch";

import './JobHistory.scss'

function JobHistory() {

    const frontendDevStar =
        [{
            jobTitle: 'Frontend Developer',
            companyName: 'Setareh Aval',
            time: 'Feb 2020 - Present',
            task: [
                "Designed and developed 6 dashboard panels using React and Next that provided real-time visibility into key performance metrics and enabled clients to make data-driven decisions.",
                "Finished 3 websites using Next and React in the facilities payment services and online shopping industries.",
                "Audited websites and applications continuously to improve user experience and increase CTR by 30% on average.",
                "Created and maintained a library of reusable React components that improved development efficiency and reduced code duplication by 40%.",
                "Standardized all output with a new, responsive, mobile-first approach and strategy in all projects that increased 15% mobile traffic on average.",
                "Collaborated with cross-functional teams to gather requirements, design user interfaces, and ensure seamless integration with back-end systems, resulting in a 20% reduction in development time and a 10% increase in customer satisfaction.",
            ],
            // achievements: [
            //     "Implemented setaresim.com based on React technology",
            //     "Implemented 3 responsive landing pages.",
            //     "Developed and maintained a panel dashboard for B2B team and Implemented multiple graphs upon request of the sales team.",
            //     "Implemented Cart by using redux technology.",
            //     "Implemented Google map API.",
            //     "Optimized websites for maximum speed and scalability.",
            // ],
            logoCompany: './SetarehAvalLogo.png',
        },
            {
                jobTitle: 'Frontend Developer',
                companyName: 'Ertebat cell',
                time: 'May 2019 - Jan 2020',
                task: [
                    "Build, Test and debug SMS panel and sales panel to ensure high performance and responsiveness.",
                    "Successfully optimized website load times by 50%, resulting in a 25% increase in user engagement and a 10% increase in conversions.",
                    "Designing and implementing +5 complex web pages and features.",
                    "Identifying and resolving technical issues and bugs daily.",
                    "Producing graphs in the sales panel and SMS panel using D3.js and Amchart, enabling users to visualize sales trends and patterns and make informed business decisions..",
                ],
                // achievements: [
                //     "Implemented setaresim.com based on React technology",
                //     "Implemented 3 responsive landing pages.",
                //     "Developed and maintained a panel dashboard for B2B team and Implemented multiple graphs upon request of the sales team.",
                //     "Implemented Cart by using redux technology.",
                //     "Implemented Google map API.",
                //     "Optimized websites for maximum speed and scalability.",
                // ],
                logoCompany: '',
            },
            {
                jobTitle: 'Junior frontend Developer',
                companyName: 'Telecommunication Infrastructure Company',
                time: 'Apr 2018 - May 2019',
                task: [
                    "Developed 10 high-converting landing pages with an average conversion rate of 20%, resulting in a total of 2,000 new leads.",
                    "Utilized A/B testing and user feedback to continuously improve page design and content and maximize effectiveness.",
                    "Collaborated closely with senior developers on complex projects, contributing to the design and implementation of key features and providing valuable insights and feedback that improved overall project quality and user experience.",
                    "Write clean, well-designed, and efficient code using HTML, CSS, and JavaScript.",
                ],
                // achievements: [
                //     "Implemented setaresim.com based on React technology",
                //     "Implemented 3 responsive landing pages.",
                //     "Developed and maintained a panel dashboard for B2B team and Implemented multiple graphs upon request of the sales team.",
                //     "Implemented Cart by using redux technology.",
                //     "Implemented Google map API.",
                //     "Optimized websites for maximum speed and scalability.",
                // ],
                logoCompany: './Telecuminucation.jpg',
            },
        ]

    const {lightTheme} = useContext(SwitchContext);

    return (
        <section className='experience'>
            <SegmentTitle title={"My Experience"} src={experience} alt={'My Experience'}/>
            <div className="parent">
                {frontendDevStar.map(job => {
                    {console.log(job.logoCompany)}
                    return (<div className='rightSide' data-aos="fade-up">
                        <Experience jobTitle={job.jobTitle} company={job.companyName}
                                    time={job.time}
                                    Duties={
                                        job.task.map((item, index) =>
                                            <p key={index} style={!lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                        )
                                    }
                            // achievements={
                            //     job.achievements.map((item, index) =>
                            //         <p key={index} style={!lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                            //     )
                            // }

                                    img={job.logoCompany}/>
                    </div>)
                })}
            </div>
        </section>
    );
}

export default JobHistory;
