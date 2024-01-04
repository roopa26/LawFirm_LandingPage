import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Menus from "../Menus/Menus";
import Insta from "../../assests/SocialMedia/Insta.png";
import Facebook from "../../assests/SocialMedia/Facebook.png";
import Twitter from "../../assests/SocialMedia/Twitter.png";
import Picsart from "../../assests/SocialMedia/Picsart.png";

const Footer = () => {
    return(
        <>
        <div className={styles.navbar}>
            <Logo styles={{"margin-left":"100px"}}/>
            <Menus/>
            <div className={styles.socialMedia}>
                <img src={Insta} alt="Insta"/>
                <img src={Facebook} alt="Facebook"/>
                <img src={Twitter} alt="Twitter"/>
                <img src={Picsart} alt="Picsart"/>
            </div>
        </div>
        <div className={styles.terms}>
            <div>© 2020 Acme. All right reserved.</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
        </div>
        </>
    )
}

export default Footer;