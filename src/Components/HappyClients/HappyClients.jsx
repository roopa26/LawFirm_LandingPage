import React from "react";
import styles from "./HappyClients.module.css";
import Carousel from "./CarouselNavigation/Carousel";
import CarouselLeftNavigation from "../HappyClients/CarouselNavigation/LeftArrowButton";
import CarouselRightNavigation from "../HappyClients/CarouselNavigation/RightArrowButton";
import {ReactComponent as  LeftArrow} from "../../assests/LeftArrow.svg";
import {ReactComponent as  RightArrow} from "../../assests/RightArrow.svg";

const HappyClients = () => {
    return(
        <div>
            <div className={styles.headerWrapper}>
                <div className={styles.header}><h1>What says our happy clients</h1></div>
                 <div className={styles.arrowWrapper}>
                    <LeftArrow/>
                    <RightArrow/>
                </div> 
            </div>
            <div>
                <Carousel />
            </div>
        </div>
    )
}

export default HappyClients;