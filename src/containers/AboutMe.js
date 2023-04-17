import React, {useContext, useEffect} from "react";
import SegmentTitle from "../components/SegmentTitle";
import aboutMe from '../assets/aboutMe2.png'
import SwitchContext from "../context/ThemeSwitch";
import AOS from "aos";

import "aos/dist/aos.css";
import './AboutMe.scss'


function AboutMe() {
    const {lightTheme} = useContext(SwitchContext);
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    return (
        <section className='aboutMe'>
            {/*<SegmentTitle title={"About Me"} src={aboutMe} alt={'About Me'}/>*/}
            <div className='contentَAboutMe'>

                <p className='textAboutMe' style={!lightTheme ? {} : {color: "#a9a9a9"}} data-aos="fade-right">
                    An innovative front-end developer with about three years of experience in developing and
                    maintaining responsive websites focusing on the UI/UX interface in the React JS library and the Next
                    JS framework.Proficient in code development projects in modern working methodologies, over four
                    years of experience in marketing and SEO, give me a comprehensive perspective on different aspects of
                    the business.
                </p>


                <div className='imgFrame'/>

            </div>
        </section>
    );
}

export default AboutMe;
