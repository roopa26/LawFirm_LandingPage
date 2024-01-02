import React from "react";
import styles from "./AreaOfPractices.module.css";
import BusinessLaw from "../../assests/BusinessLaw.png";
import PartnershipLaw from "../../assests/PartnershipLaw.png";
import RealEstate from "../../assests/RealEstate.png";
import BusinessLaw2 from '../../assests/BusinessLaw2.png';
import LandLordDisputes from "../../assests/LandLordDisputes.png";
import ElderAbuse from "../../assests/ElderAbuse.png";

const AreaOfPractices = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}><h1>Area of Practices</h1></div>
            <div className={styles.cardWrapper}>
                    <div className={styles.group1}>
                        <div className={styles.BusinessLaw}>
                            <div style={{ flexGrow: 2 }}><img src={BusinessLaw} alt="Business law"/></div>
                            <div className={`${styles.title} ${styles.businessTitle}`}>BUSINESS LAW</div>
                        </div>
                        <div className={styles.PartnershipLaw}>
                            <div style={{ flexGrow: 1 }}><img src={PartnershipLaw} alt="Partnership law"/></div>
                            <div className={`${styles.title} ${styles.partershipTitle}`}>PARTNERSHIP LAW</div>
                        </div>
                    </div>  
                    <div className={styles.group1}>
                        <div className={styles.BusinessLaw}>
                            <div style={{ flexGrow: 1 }}><img src={RealEstate} alt="Real Estate"/></div>
                            <div className={`${styles.title} ${styles.partershipTitle}`}>REAL ESTATE LAW</div>
                        </div>
                        <div className={styles.PartnershipLaw}>
                            <div style={{ flexGrow: 2 }}><img src={BusinessLaw2} alt="Partnership law"/></div>
                            <div className={`${styles.title} ${styles.businessTitle}`}>BUSINESS LAW</div>
                        </div>
                    </div>   
                    <div className={styles.group1}>
                        <div className={styles.BusinessLaw}>
                            <div style={{ flexGrow: 1 }}><img src={LandLordDisputes} alt="Landlord disputes law"/></div>
                            <div className={`${styles.title} ${styles.businessTitle}`}>LANDLORD DISPUTES LAW</div>
                        </div>
                        <div className={styles.PartnershipLaw}>
                            <div style={{ flexGrow: 2 }}><img src={ElderAbuse} alt="Elder abuse law"/></div>
                            <div className={`${styles.title} ${styles.partershipTitle}`}>ELDER ABUSE</div>
                        </div>
                    </div>              
            </div>
        </div>
    )
}

export default AreaOfPractices;