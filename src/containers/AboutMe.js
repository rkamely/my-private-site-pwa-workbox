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
                    A frontend developer with expertise in HTML, CSS, JavaScript, TypeScript, Next and React, I have
                    developed and launched 3 successful e-commerce websites, 6 dashboard panels that improved data
                    visibility and decision-making for 1000+ clients and 10 landing pages that contributed to increased
                    conversion rates.
                </p>

                <div className='imgFrame'/>

            </div>
        </section>
    );
}

export default AboutMe;
