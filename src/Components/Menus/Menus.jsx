import React from "react";
import styles from "./Menus.module.css";

const Menus = ()=>{
    return(
        <div className={styles.menu}>
            <div>Home</div>
            <div>Attorneys</div>
            <div>Practice Areas</div>
            <div>About Us</div>
        </div>
    )
}

export default Menus;