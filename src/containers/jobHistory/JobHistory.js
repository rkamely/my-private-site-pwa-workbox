import React, {useContext} from "react";
import SegmentTitle from "../../components/SegmentTitle";
import Experience from "./Experience";
import experience from '../../assets/experience.png'
import firstStar from '../../assets/SetarehAvalLogo.png'
import SwitchContext from "../../context/ThemeSwitch";

import './JobHistory.scss'

function JobHistory() {

    const frontendDevStar =
        {
            jobTitle: 'Frontend Developer',
            companyName: 'Setareh Aval',
            time: '2021-Present',
            task: [
                "Coauthored with design, product and back-end team to create 6 web products.",
                "Created 3 efficient and reusable front-end system to drive web applications to marketplace.",
                "Evaluated SEO strategies for user acquisition and increase it about 100% during 12 months.",
                "Contributed in product release and code reviews with 2 senior developer and team leads.",
                "Collaborated with 3 team members to develop 6 new user-facing features.",
                "Boosted +4 applications for maximum speed and scalability.",
                "Developed +6 Dashboard panel in React JS environment.",
                "Finished +3 websites in Next JS.",
                "Standardized all output with a new, responsive, mobile-first approach and strategy in about +4 projects.",
                "Audited websites and application continuously to improve user experience and increased CTR by 30% averagely.",
                "Assessed UX and UI designs for technical feasibility and fixed +100 bugs.",
                "Collaborated with product team members to implement new feature developments.",
                "Modified +60 graphs in panel dashboards.",
            ],
            achievements: [
                "Implemented setaresim.com based on React technology",
                "Implemented 3 responsive landing pages.",
                "Developed and maintained a panel dashboard for B2B team and Implemented multiple graphs upon request of the sales team.",
                "Implemented Cart by using redux technology.",
                "Implemented Google map API.",
                "Optimized websites for maximum speed and scalability.",
            ],
            logoCompany: {firstStar},
        }
    const digitalMarketerStar =
        {
            jobTitle: 'Digital Marketing Specialist',
            companyName: 'Setareh Aval',
            time: '2016-2021',
            task: [
                "Accomplished +10 digital advertising campaigns.",
                "Directed +6 Google Ads advertising campaigns and increase website's audience up to 200% averagely.",
                "Analyzed and evaluated target criteria, content, landing pages and traffic trends, visitor behavior and decreased customer churn rate from 25% to 10%.",
                "Tested and published about 20 responsive landing pages.",
                "Tracked Social media campaigns and increased impression 20% end of campaigns averagely .",
                "Projected and analyzed SEO/SEM/PPC campaigns.",
                "Illustrated monthly performance reports about 2 times per month.",
                "Defined key metrics that were of primary importance to clients and provided trending data.",

            ],
            achievements: [
                "Implemented SEO strategies for client websites including layout,content optimization, keyword structuring, etc.",
                "Set up Google Adwords advertising campaigns including keywords and campaign filters for future marketing opportunities.",
                "Implemented ECRM system for sending email and SMS based on our algorithm to returning them in website.",
            ],
            logoCompany: {firstStar},
        }
    const {lightTheme} = useContext(SwitchContext);

    return (
        <section className='experience'>
            <SegmentTitle title={"My Experience"} src={experience} alt={'My Experience'}/>
            <div className="parent">
                <div className='rightSide' data-aos="fade-up">
                    <Experience jobTitle={frontendDevStar.jobTitle} company={frontendDevStar.companyName}
                                time={frontendDevStar.time}
                                Duties={
                                    frontendDevStar.task.map((item, index) =>
                                        <p key={index} style={!lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                    )
                                }
                                achievements={
                                    frontendDevStar.achievements.map((item, index) =>
                                        <p key={index} style={!lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                    )
                                }
                                img={frontendDevStar.logoCompany.firstStar}/>
                </div>
                <div className='leftSide' data-aos="fade-up">
                    <Experience jobTitle={digitalMarketerStar.jobTitle} company={digitalMarketerStar.companyName}
                                time={digitalMarketerStar.time}
                                Duties={
                                    digitalMarketerStar.task.map((item, index) =>
                                        <p key={index} style={!lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                    )
                                }
                                achievements={
                                    digitalMarketerStar.achievements.map((item, index) =>
                                        <p key={index} style={!lightTheme ? {} : {color: "#a9a9a9"}}>{item}</p>
                                    )
                                }
                                img={digitalMarketerStar.logoCompany.firstStar}/>
                </div>
            </div>
        </section>
    );
}

export default JobHistory;
