import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.leftSection}>
                <h1>Let's Introduce Ourself</h1>
            </div>
            <div className={styles.midSection}></div>
            <div className={styles.rightSection}>
                <div>Criminal Lawyer</div>
                <p>Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia consequatduis
                    enim velit mollit Exercitation.</p>
            </div>
        </div>
    )
}

export default Introduction;