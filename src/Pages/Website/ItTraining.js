/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import AbuseForm from "../../Components/AbuseForm";
import BotnetForm from "../../Components/BotnetForm";
import ChildAbuseForm from "../../Components/ChildAbuseForm";
import FAQ from "../../Components/FAQ";
import Header from "./Include/Header";
import IntrusionForm from "../../Components/IntrusionForm";
import MalwareForm from "../../Components/MalwareForm";
import OtherForm from "../../Components/OtherForm";
import PhishingForm from "../../Components/PhishingForm";
import SharedHostingHeader from "../../Components/SharedHostingHeader";
import SpamForm from "../../Components/SpamForm";
import TrademarkForm from "../../Components/TrademarkForm";
import ViolentForm from "../../Components/ViolentForm";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";
//import Card from '../../Components/UI/Card';
import { AiOutlineBarChart } from "react-icons/ai";
import { GrAnalytics } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import './styles/DataAnalytics.css';
import Aos from "aos";
import 'aos/dist/aos.css';
export const DataAnalytics = (props) => {
    
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    const baseUrl = location.href.includes("trainingncr.info")
        ? `http://trainingncr.info/techx/assets/images`
        : `/assets/images`;
    return (
        <>
            <div className="container-fluid pt-2 webhosting-all-section cloud-banner-section">
                <div className="row ">
                    <div className="col-lg-6">
                        <div className="image-aboutus-section">
                            <img
                                src={baseUrl + "/theme/ittraining1.jpg"}
                                className=" img-fluid"
                                alt="Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutus-text-section">
                            <h2 className="AI-text-title-one white-theme-text-AI color-about"   data-aos='fade-up'>
                                Unlocking Potential: Empowering Success <br />
                                Through Cutting-Edge IT Training at TECHX
                            </h2>
                            <p className="AI-text-title-three mt-1 " data-aos='fade-up'>
                                At TECHX, we redefine the landscape of IT training, transcending conventional boundaries to
                                cultivate a new era of expertise and innovation. As an engineering company committed to
                                pushing the limits, we recognize the profound impact of continuous learning in the dynamic
                                field of technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="se-iv-home py-90 bg-2">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head">
                        <h3 className="se-title-1 " data-aos='fade-up'>Why our IT Training Service</h3>
                        <h4 className="se-title-2 " data-aos='fade-up'>
                            Revolutionizing Learning in IT: Unleash Your Potential with TECHX's Unique Approach.
                        </h4>
                    </div>
                    {/* <!-- space --> */}
                    <div className="space space-sm"></div>
                    {/* <!-- row --> */}
                    <div className="row text-center">
                        {/* <!-- col --> */}

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-3">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon icon-style color2 m-auto">
                                    <AiOutlineBarChart />
                                    {/* <img src="/assets/images/icons/mission.svg" className="lazy img-fluid" alt="mission" /> */}
                                </div>
                                {/* <!-- box-title --> */}
                                <h3 className="box-title " data-aos='fade-up'>Innovative Curriculum</h3>
                                {/* <!-- box-para --> */}
                                <p className="box-para " data-aos='fade-up'>
                                    Embark on a learning journey crafted by industry experts, blending theoretical knowledge
                                    with real-world applications. Our innovative curriculum evolves alongside the rapidly
                                    changing IT landscape, ensuring you stay ahead of the curve
                                </p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img
                                        // src="/assets/images/icons/right-arrow.svg"
                                        src={baseUrl + "/icons/right-arrow.svg"}
                                        className="lazy img-fluid"
                                        alt="Right-Arrow"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-5">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon icon-style color2 m-auto">
                                    <TbDeviceDesktopAnalytics />
                                    {/* <img src="/assets/images/icons/data-storage-device.svg" className="lazy img-fluid" alt="data-storage-device" /> */}
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title " data-aos='fade-up'> Hands-On Experience</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para " data-aos='fade-up'>
                                    At TECHX, theory meets practice. Immerse yourself in hands-on projects, simulations, and
                                    interactive labs designed to reinforce concepts and foster practical skills. Experience is not
                                    just encouraged; it's integral to our training philosophy.
                                </p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img
                                        // src="/assets/images/icons/right-arrow.svg"
                                        src={baseUrl + "/icons/right-arrow.svg"}
                                        className="lazy img-fluid"
                                        alt="Right-Arrow"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-2">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon icon-style color2 m-auto">
                                    <TbReportAnalytics />
                                    {/* <img src="/assets/images/icons/priority.svg" className="lazy img-fluid" alt="priority" /> */}
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title " data-aos='fade-up'> Expert Instructors</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para " data-aos='fade-up'>
                                    Learn from the best in the industry. Our seasoned instructors bring a wealth of experience,
                                    passion, and a commitment to nurturing your technical prowess. They don't just teach; they
                                    inspire and guide you to reach new heights.
                                </p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img
                                        // src="/assets/images/icons/right-arrow.svg"
                                        src={baseUrl + "/icons/right-arrow.svg"}
                                        className="lazy img-fluid"
                                        alt="Right-Arrow"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid pt-2 webhosting-all-section cloud-banner-section">
                <div className="row ">
                    <div className="col-lg-6">
                        <div className="image-aboutus-section">
                            <img
                                src={baseUrl + "/theme/ittraining2.jpg"}
                                className=" img-fluid"
                                alt="Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutus-text-section">
                            <h1 className="sec-title-2 mt-1 drop" data-aos='fade-up'>
                                Customized Learning Paths
                            </h1>
                            <br />
                            <p className="sec-para-1 mb-1 drop" data-aos='fade-up'>
                                Recognizing that every learner is unique, we o er personalized learning paths tailored to your
                                goals and aspirations. Whether you're a beginner or a seasoned professional, TECHX has the
                                right program to elevate your expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="container-fluid webhosting-all-section cloud-banner-section">
                <div className="row cloud-row-reverse">
                    <div className="col-lg-6">
                        <div className="aboutus-text-section">
                            <h1 className="sec-title-2 mb-2 drop" data-aos='fade-up'>
                                Cutting-Edge Technologies
                            </h1>
                            <p className="sec-para-1 mb-1 drop" data-aos='fade-up'>
                                Stay on the forefront of technology trends with access to cutting-edge tools and platforms.
                                Our training programs encompass the latest advancements in IT, providing you with the skills
                                demanded by the industry.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">

                        <div className="image-aboutus-section">
                            <img
                                src={baseUrl + "/theme/ittraining3.jpg"}
                                className=" img-fluid"
                                alt="Image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-mobileApp-section">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-md-4 col-sm-12 card-box-mobileApp mt-5">
                        <div className="overlay-card-box"></div>
                        <img
                            // src="/assets/images/icons/Home-2-Info-Box-1.jpg"
                            src={baseUrl + "/theme/cyberbg.png"}
                            className="img-fluid card-img-mobileAppdevice"
                            alt="priority"
                        />
                        <div className="card-text-box-mobileApp">
                            <h3 className="text-title-two text-center banner-text-mobile" data-aos='fade-up'> Programming and Development</h3>
                            <p className="text-title-three text-center banner-text-mobile" data-aos='fade-up'>
                                Comprehensive courses in popular programming languages and development
                                frameworks.
                            </p>
                            <a href="https://store.techx.live/" target="_blank" className="card-btn-mobileApp">
                                See More
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 card-box-mobileApp mt-5">
                        <div className="overlay-card-box"></div>
                        <img
                            // src="/assets/images/icons/Home-2-Info-Box-2.jpg"
                            src={baseUrl + "/theme/cloud1.gif"}
                            className="img-fluid card-img-mobileAppdevice"
                            alt="priority"
                        />
                        <div className="card-text-box-mobileApp">
                            <h3 className="text-title-two text-center banner-text-mobile" data-aos='fade-up'>Cloud Computing and DevOps</h3>
                            <p className="text-title-three text-center banner-text-mobile" data-aos='fade-up'>
                                Harness the power of the cloud and streamline development with our Cloud
                                Computing and DevOps training.
                            </p>
                            <a href="https://store.techx.live/" target="_blank" className="card-btn-mobileApp">
                                See More
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 card-box-mobileApp mt-5">
                        <div className="overlay-card-box"></div>
                        <img
                            // src="/assets/images/icons/Home-2-Info-Box-3.jpg"
                            src={baseUrl + "/theme/cyber-security-back.jpg"}
                            className="img-fluid card-img-mobileAppdevice"
                            alt="priority"
                        />
                        <div className="card-text-box-mobileApp">
                            <h3 className="text-title-two text-center banner-text-mobile" data-aos='fade-up'>Cybersecurity</h3>
                            <p className="text-title-three text-center banner-text-mobile" data-aos='fade-up'>
                                Protect systems and networks with our cutting-edge cybersecurity training programs.
                            </p>
                            <a href="https://store.techx.live/" target="_blank" className="card-btn-mobileApp">
                                See More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-mobileApp-section">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-md-4 col-sm-12 card-box-mobileApp mt-5">
                        <div className="overlay-card-box"></div>
                        <img
                            // src="/assets/images/icons/Home-2-Info-Box-1.jpg"
                            src={baseUrl + "/theme/dataanalytics.jpg"}
                            className="img-fluid card-img-mobileAppdevice"
                            alt="priority"
                        />
                        <div className="card-text-box-mobileApp">
                            <h3 className="text-title-two text-center banner-text-mobile" data-aos='fade-up'> Data Science and Analytics</h3>
                            <p className="text-title-three text-center banner-text-mobile" data-aos='fade-up'>
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout
                            </p>
                            <a href="https://store.techx.live/" target="_blank" className="card-btn-mobileApp">
                                See More
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 card-box-mobileApp mt-5">
                        <div className="overlay-card-box"></div>
                        <img
                            // src="/assets/images/icons/Home-2-Info-Box-2.jpg"
                            src={baseUrl + "/theme/AI-M2.gif"}
                            className="img-fluid card-img-mobileAppdevice"
                            alt="priority"
                        />
                        <div className="card-text-box-mobileApp">
                            <h3 className="text-title-two text-center banner-text-mobile" data-aos='fade-up'> Artificial Intelligence and Machine Learning</h3>
                            <p className="text-title-three text-center banner-text-mobile" data-aos='fade-up'>
                                Explore the realms of AI and ML with hands-on training in the latest technologies.
                            </p>
                            <a href="https://store.techx.live/" target="_blank" className="card-btn-mobileApp">
                                See More
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 card-box-mobileApp mt-5">
                        <div className="overlay-card-box"></div>
                        <img
                            // src="/assets/images/icons/Home-2-Info-Box-3.jpg"
                            src={baseUrl + "/theme/database1.png"}
                            className="img-fluid card-img-mobileAppdevice"
                            alt="priority"
                        />
                        <div className="card-text-box-mobileApp">
                            <h3 className="text-title-two text-center banner-text-mobile" data-aos='fade-up'>Networking and Infrastructure</h3>
                            <p className="text-title-three text-center banner-text-mobile" data-aos='fade-up'>
                                Build a solid foundation in networking and infrastructure through our specialized
                                courses.
                            </p>
                            <a href="https://store.techx.live/" target="_blank" className="card-btn-mobileApp">
                                See More
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="se-head mt-2">
                <h3 className="se-title-1">FAQS</h3>
                <h4 className="se-title-2">Got questions?<br />Well, we've got answers.</h4>
                <Link to="/support"

                    className="AI-text-title-one-btn" style={{ margin: 'auto' }}
                >
                    Support
                </Link >
            </div>

            {/* <FAQ /> */}
            <ThemeSetting />

            <Cookie />
        </>
    );
};

export default withRouter(DataAnalytics);
