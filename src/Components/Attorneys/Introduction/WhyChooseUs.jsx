import React from "react";
import CardForLawFirm from "./Card";
import styles from "./WhyChooseUs.module.css";
import CardIcon from '../../../assests/ChooseUsIcon.png';

const WhyUs = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}><h1>Why Choose us?</h1></div>
            <div className={styles.cardWrapper}>
            <div className={styles.hoverClass}><CardForLawFirm cardIcon={CardIcon} heading="98% Success Rate" /></div>
            <div className={styles.hoverClass}><CardForLawFirm cardIcon={CardIcon} heading="100% Success Rate" /></div>
            <div className={styles.hoverClass}><CardForLawFirm cardIcon={CardIcon} heading="100% Success Rate" /></div>
            </div>
            
        </div>
    )
}

export default WhyUs;