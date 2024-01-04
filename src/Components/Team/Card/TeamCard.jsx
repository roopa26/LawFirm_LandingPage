import React from "react";
import Card from "@mui/material/Card";
import CardMedia  from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import styles from "./TeamCard.module.css";

const TeamCard = ({image, header, subHeader}) => {
    return(
        <Card className={styles.teamcard}>
            <CardMedia image={image} className={styles.image}></CardMedia>
            <CardHeader title = {header} subheader = {
                <Typography variant="subtitle1" className={styles.subheader}>
                        {subHeader}
                </Typography>}
            ></CardHeader>
        </Card>
    )
}

export default TeamCard;