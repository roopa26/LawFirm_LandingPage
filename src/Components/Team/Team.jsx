import React from "react";
import styles from "./Team.module.css";
import TeamCard from "./Card/TeamCard";
import Daniel from "../../assests/Team/Daniel.png";
import Cesforila from "../../assests/Team/Cesforila.png";
import Collean from "../../assests/Team/Collean.png";
import Haldone from "../../assests/Team/Haldone.png";
import Nik from "../../assests/Team/Nik.png";
import Sanfole from "../../assests/Team/Sanfole.png";

const Team = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}><h1>Why Choose us?</h1></div>
            <div className={styles.cardWrapper}>
                <TeamCard image={Daniel} header="Danial Def" subHeader="301 cases"/>
                <TeamCard image={Sanfole} header="Sanfole" subHeader="850 cases"/>
                <TeamCard image={Cesforila} header="Cesforila" subHeader="470 cases"/>
            </div>
            <div className={styles.cardWrapper}>
            <TeamCard image={Collean} header="Colleen" subHeader="180 cases"/>
                <TeamCard image={Haldone} header="Halsone" subHeader="212 cases"/>
                <TeamCard image={Nik} header="Nik Jeo" subHeader="350 cases"/>
            </div>
        </div>
    )
}

export default Team;