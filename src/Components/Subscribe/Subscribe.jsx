import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
return(
        <div className={styles.mainContent}>
            <div><h1>Subscribe Our Newsletter</h1></div>
            <div className={styles.subscribeDetails}>
                <input style={{'border-top-left-radius' : '8px','border-bottom-left-radius': '8px'}} placeholder="Name:"/>
                <input placeholder="Enter your Email"/>
                <button className={styles.btn}>SEND</button>
            </div>
        </div>
)
}

export default Subscribe;