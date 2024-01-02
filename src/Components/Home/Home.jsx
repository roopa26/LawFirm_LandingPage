import React from "react";
import styles from "./Home.module.css";
import MessageImage from "../../assests/Message.png";
import HeroImage from "../../assests/hero_image.png";

const Home = () => {
    return(
        <div className={styles.mainContent}>
            <div className={styles.rightContent}>
                <div className={styles.headerContent}>
                    <div className={styles.header1}>You don’t have to</div>
                    <div className={styles.header2}>Fight them Alone.</div>
                </div>
                <div className={styles.subHeaderContent}>
                    <div>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos 
                        faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.inputContent}>
                        <span><img className={styles.MessageImage} src={MessageImage} alt="email"/><input className={styles.emailInput} placeholder="Enter your email address"/></span>
                    </div>
                    <button className={styles.button}>Let's Talk</button>
                </div>
                
            </div>
            <div className={styles.heroImage}>
                <img src={HeroImage} alt="Hero"/>
            </div>
        </div>
    )
}

export default Home;