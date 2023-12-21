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
import { FaTools } from "react-icons/fa";
import { IoMdAnalytics, IoIosAnalytics } from "react-icons/io";
import './styles/DataAnalytics.css';
import Aos from "aos";
import 'aos/dist/aos.css';

// import useLoader from "../Services/useLoader";
export const DataAnalytics = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

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
                                src={baseUrl + "/theme/dataanalytics3.jpg"}
                                className=" img-fluid"
                                alt="Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutus-text-section">
                            <h2 className="AI-text-title-one white-theme-text-AI color-about mt-1 drop" data-aos='fade-up' >
                                Unlocking Insights, Empowering Success
                            </h2>
                            <p className="AI-text-title-three mt-1 mb-1 drop" data-aos='fade-up'>
                                In the dynamic landscape of the digital era, data has emerged as the cornerstone of informed
                                decision-making and business excellence. At TECHX, we take pride in offering unparalleled
                                Data Analytics Services that transcend traditional boundaries, providing our clients with a
                                competitive edge in today's data-driven
                                world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="se-iv-home py-90 bg-2">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head">
                        <h3 className="se-title-1 drop" data-aos='fade-up'>Why our Data Analytics Service</h3>
                        <h4 className="se-title-2 drop" data-aos='fade-up'>
                            Harness the Power of Your Data with TECHX's Cutting-Edge Analytics Solutions.
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
                                <h3 className="box-title drop" data-aos='fade-up'>Navigating the Data <br /> Deluge</h3>
                                {/* <!-- box-para --> */}
                                <p className="box-para drop" data-aos='fade-up'>
                                    In the vast sea of information, TECHX stands as a beacon, helping businesses navigate and
                                    extract meaningful insights from their data. Our Data Analytics Services go beyond mere
                                    analysis; we empower organizations to unlock the full potential of their data, transforming it
                                    into actionable intelligence.
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
                                <h4 className="box-title drop" data-aos='fade-up'>Customized Solutions for Every Business</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para drop" data-aos='fade-up'>
                                    Recognizing that each business is unique, our Data Analytics Services are tailored to meet
                                    specific needs and challenges. Whether you're a startup aiming for growth or an established
                                    enterprise seeking optimization, TECHX crafts personalized analytics solutions that align with
                                    your objectives.
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
                                <h4 className="box-title drop" data-aos='fade-up'> Advanced Analytics Capabilities</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para drop" data-aos='fade-up'>
                                    TECHX leverages state-of-the-art technologies and advanced analytics tools to delve deep
                                    into your data. From predictive analytics that forecast future trends to prescriptive analytics
                                    that provide actionable recommendations, we cover the entire spectrum to drive strategic
                                    decision-making.
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
                    <div className="row text-center">
                        {/* <!-- col --> */}

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-3">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon icon-style color2 m-auto">
                                    <FaTools />
                                    {/* <img src="/assets/images/icons/mission.svg" className="lazy img-fluid" alt="mission" /> */}
                                </div>
                                {/* <!-- box-title --> */}
                                <h3 className="box-title drop" data-aos='fade-up'>  Real-time Insights for Timely Actions</h3>
                                {/* <!-- box-para --> */}
                                <p className="box-para drop" data-aos='fade-up'>
                                    In today's fast-paced business environment, timely decisions are paramount. TECHX ensures
                                    that your organization stays ahead with real-time analytics, enabling you to respond
                                    promptly to market shifts, customer behaviors, and emerging opportunities.
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
                                    <IoMdAnalytics />
                                    {/* <img src="/assets/images/icons/data-storage-device.svg" className="lazy img-fluid" alt="data-storage-device" /> */}
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title drop" data-aos='fade-up'> Data Security at <br /> the Core
                                </h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para drop" data-aos='fade-up'>
                                    We understand the critical nature of your data. Security is not an afterthought but a
                                    fundamental aspect woven into the fabric of our Data Analytics Services. TECHX employs
                                    robust measures to safeguard your data, ensuring confidentiality, integrity, and compliance
                                    with industry standards
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
                                    <IoIosAnalytics />
                                    {/* <img src="/assets/images/icons/priority.svg" className="lazy img-fluid" alt="priority" /> */}
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title drop" data-aos='fade-up'> Proven Track <br /> Record</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para drop" data-aos='fade-up'>
                                    TECHX takes pride in a track record of delivering impactful Data Analytics Services across
                                    diverse industries. From improving operational e ciency to enhancing customer
                                    experiences, our solutions have left a lasting imprint on businesses worldwide.
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
                                src={baseUrl + "/theme/dataanalytics.jpg"}
                                className=" img-fluid"
                                alt="Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutus-text-section">
                            <h1 className="sec-title-2 mt-1 drop" data-aos='fade-up'>
                                Unraveling the Complexity
                                <br />with Simplified Dashboards
                            </h1>
                            <br />
                            <p className="sec-para-1 mb-1 drop" data-aos='fade-up'>
                                Our commitment to user-friendly solutions is reflected in the intuitive dashboards we design.
                                Visualizing complex data shouldn't be a challenge, and with TECHX, it isn't. We present your
                                insights in a clear and accessible manner, empowering users at all levels to make data-driven
                                decisions
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
                                Continuous Innovation
                            </h1>
                            <p className="sec-para-1 mb-1 drop" data-aos='fade-up'>
                                In the ever-evolving field of data analytics, stagnation is a setback. TECHX stays at the
                                forefront of innovation, consistently incorporating the latest advancements to enhance the
                                capabilities of our Data Analytics Services. Your success is our motivation for continual
                                improvement
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">

                        <div className="image-aboutus-section">
                            <img
                                src={baseUrl + "/theme/dataanalytics2.jpg"}
                                className=" img-fluid"
                                alt="Image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-2 webhosting-all-section cloud-banner-section">
                <div className="row ">
                    <div className="col-lg-6">
                        <div className="image-aboutus-section">
                            <img
                                src={baseUrl + "/theme/dataanalytics4.jpg"}
                                className=" img-fluid"
                                alt="Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutus-text-section">
                            <h1 className="sec-title-2 mt-1 drop" data-aos='fade-up'>
                                Client-Centric Approach
                            </h1>
                            <br />
                            <p className="sec-para-1 mb-1 drop" data-aos='fade-up'>
                                Our success is intertwined with the success of our clients. TECHX adopts a client-centric
                                approach, working collaboratively to understand your unique challenges and aspirations. We
                                don't just deliver analytics; we foster partnerships that drive continual innovation and
                                improvement.
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
                                Scalability for Future Growth
                            </h1>
                            <p className="sec-para-1 mb-1 drop" data-aos='fade-up'>
                                As your business evolves, so do your data requirements. TECHX's Data Analytics Services are
                                designed for scalability, accommodating the growing volumes and complexities of your data
                                landscape. Our solutions grow with you, ensuring sustained relevance and value.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">

                        <div className="image-aboutus-section">
                            <img
                                src={baseUrl + "/theme/cloud2.gif"}
                                className=" img-fluid"
                                alt="Image"
                            />
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
