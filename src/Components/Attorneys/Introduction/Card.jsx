import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Card.module.css';

const CardForLawFirm = ({heading,subHeading,type,cardIcon}) => {
    return(
        <Card className={styles.card} sx={{ maxWidth: 345 }}>
      <CardMedia className={styles.img}
        sx={{ height: 140 }}
        image={cardIcon}
        title="card icon"
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
        {heading}
        </Typography>
        {type === "happyclients" && (<Typography sx={{ mb: 1.5 }} color="text.secondary">
        {subHeading}
      </Typography>)}
        <Typography className={styles.cardContentSecondary} variant="body2">
            Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
      <CardActions>
        <Button className = {styles.btn} size="small">Read More</Button>
      </CardActions>
    </Card>
    )
}

export default CardForLawFirm;