import React from 'react';
import './about.css';
import Info from '../../components/Info';
import { RiDownload2Line } from "react-icons/ri";
import Cv from '../../pdf/Resume.pdf';
import Stats from '../../components/Stats';
import { skill } from '../../Data';
import SkillsItems from '../../components/SkillsItems';
import { resume } from '../../Data';
import ResumeItem from '../../components/ResumeItem';

const About = () => {
    return (
        <main className="section container">
            <section className="about">
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <div className="about-container grid">
                    <div className="about-info">
                        <h3 className="section-subtitle">Personal Infos</h3>

                        <ul className="info-list grid">
                            <Info />
                        </ul>

                        <a href={Cv} download='' className="button">
                            Download Cv

                            <span className="button-icon">
                                <RiDownload2Line />
                            </span>
                        </a>
                    </div>

                    <div className="stats grid">
                        <Stats />
                    </div>
                </div>
            </section>

            <div className="separator"></div>

            <section className="skills">
                <h3 className="section-subtitle subtitle-center">My Skills</h3>

                <div className="skills-container grid">
                    <div className="skills-group">
                        <h3 className="skills-title">Fontend Developer</h3>

                        <div className="skills-items grid">
                            {skill.map((val) => {
                                if (val.category === 'developer') {
                                    return (
                                        <SkillsItems key={val.id} {...val} />
                                    );
                                }
                            })}
                        </div>
                    </div>

                    <div className="skills-group">
                        <h3 className="skills-title">Graghic Design / Video Editor</h3>

                        <div className="skills-items grid">
                            {skill.map((val) => {
                                if (val.category === 'designer') {
                                    return (
                                        <SkillsItems key={val.id} {...val} />
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <div className="separator"></div>

            <section className="resume">
                <h3 className="section-subtitle subtitle-center">
                    Experience & Education
                </h3>

                <div className="resume-container grid">
                    <div className="resume-group grid">
                        {resume.map((val) => {
                            if (val.category === 'experience') {
                                return (
                                    <ResumeItem key={val.id} {...val} />
                                );
                            }
                        })}
                    </div>

                    <div className="resume-group grid">
                        {resume.map((val) => {
                            if (val.category === 'education') {
                                return (
                                    <ResumeItem key={val.id} {...val} />
                                );
                            }
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;