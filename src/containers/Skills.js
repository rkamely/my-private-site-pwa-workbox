import React, {useContext} from "react";
import SegmentTitle from "../components/SegmentTitle";
import DownloadButton from "../components/Button/DownloadButton";
import skills from "../assets/skills.png";
import myResume from "../assets/RezaKameli.pdf"
import SwitchContext from "../context/ThemeSwitch";

import './Skills.scss';


function Skills() {
    const {lightTheme} = useContext(SwitchContext);

    return (
        <section className='Skills'>
            <SegmentTitle title={"Skills"} src={skills} alt={'Skills'}/>
            <div className='skillItems'>

                <div className='item'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>1</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Next JS</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>I've developed web sites that need Server-side
                            rendering or Static site generation and SEO by Next js </h5>
                    </div>
                </div>
                <div className='item2'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>2</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>React JS</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>I've developed panels by client site rendering
                            method in React js and I'm also proficient in using hooks.
                        </h5>
                    </div>
                </div>

                <div className='item'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>3</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Typescript</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>I've used typescript on big projects to make
                            maintenance and development easier. </h5>
                    </div>
                </div>

                <div className='item2'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>4</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>CSS & HTML</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>I've used CSS methods and libraries such as
                            TailwindCSS, emotion, SCSS, styled component, material UI, ant design, bootstrap and
                            ...</h5>
                    </div>
                </div>


                <div className='item'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>5</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>State management</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>I've used Redux, redux toolkit, zustand for
                            state managing. </h5>
                    </div>
                </div>

                <div className='item2'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>6</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>PWA</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>I've used PWA on some projects and I also used
                            workbox for caching assets on my private site. </h5>
                    </div>
                </div>
                <div className='item'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,36,37,1) 100%)"}}>
                    <div className='shadow'/>
                    <div className='number'><span>7</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>React native</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>I developed an App by React native and I
                            should say I'm a middle level expert in React native.</h5>
                    </div>
                </div>

                <div className='item2'
                     style={!lightTheme ? {} : {background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,44,45,1) 100%)"}}>
                    <div className='shadow2'/>
                    <div className='number2'><span>8</span></div>
                    <div className='contentSkills'>
                        <h2 style={!lightTheme ? {} : {color: "#a9a9a9"}}>Other Skills</h2>
                        <h5 style={!lightTheme ? {} : {color: "#a9a9a9"}}>
                            React-query, Git, Photoshop, SEO, Office, Google analysis tools, ...</h5>
                    </div>
                </div>
            </div>
            <DownloadButton content={"Download My Resume"} file={myResume}/>
        </section>
    );
}

export default Skills;
