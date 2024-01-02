import { React, useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import {ReactComponent as  RightArrow} from "../../../assests/RightArrow.svg";
import styles from './RightArrowButton.module.css';

const CarouselRightNavigation = () =>{
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd)
        });
    },[])

    return(
    <div className={styles.rightNavigation}>
        {!isEnd && (<RightArrow onClick={() => {swiper.slideNext()}}/>)}
    </div>)
}

export default CarouselRightNavigation;