import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Menus from "../Menus/Menus";
import ContactButton from "../ContactUs/ContactButton";

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <Logo/>
            <Menus/>
            <ContactButton/>
        </div>
    )
}

export default Navbar;