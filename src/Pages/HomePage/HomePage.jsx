import React from "react";
import Navbar from "../../Components/Navbar/Navbar"
import Home from '../../Components/Home/Home';
import Introduction from '../../Components/Attorneys/Introduction/Introduction';
import WhyUs from '../../Components/Attorneys/Introduction/WhyChooseUs';
import AreaOfPractices from '../../Components/AreasOfInterest/AreaOfPractices';
import HappyClients from '../../Components/HappyClients/HappyClients';
import Team from '../../Components/Team/Team';
import Faq from '../../Components/FAQ/Faq';
import Subscribe from "../../Components/Subscribe/Subscribe";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
    return(
    <>
        <Navbar/>
        <Home/>
        <Introduction/>
        <WhyUs />
        <AreaOfPractices/>
        <HappyClients/>
        <Team/>
        <Faq/>
        <Subscribe/>
        <Footer/>
    </>
    )
}

export default HomePage;