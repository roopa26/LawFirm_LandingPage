import React from 'react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';
import CardForLawFirm from "../../Attorneys/Introduction/Card";
import Jane from "../../../assests/JaneCooper.png";
import Devon from "../../../assests/Devon.png";
import Robert from "../../../assests/Robert.png";

function Carousel(){
    return (
        <div className={styles.wrapper}>
           <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        slidesPerView={3}
        spaceBetween={40}
        modules={[Navigation]}
        allowTouchMove
      >
          {/* <CarouselLeftNavigation/>
          <CarouselRightNavigation/> */}
          <SwiperSlide className={styles.slide}><CardForLawFirm heading="Jane Cooper" subHeading="Ceo of Hunt" type="happyclients" cardIcon={<Jane/>}/></SwiperSlide>
          <SwiperSlide className={styles.slide}><CardForLawFirm heading="Devon Lane" subHeading="Ceo of Hunt" type="happyclients" cardIcon={<Devon/>}/></SwiperSlide>
          <SwiperSlide className={styles.slide}><CardForLawFirm heading="Robert Fox" subHeading="Ceo of Hunt" type="happyclients" cardIcon={<Robert/>}/></SwiperSlide>
          <SwiperSlide className={styles.slide}><CardForLawFirm heading="Jane Cooper" subHeading="Ceo of Hunt" type="happyclients" cardIcon={<Jane/>}/></SwiperSlide>
          <SwiperSlide className={styles.slide}><CardForLawFirm heading="Devon Lane" subHeading="Ceo of Hunt" type="happyclients" cardIcon={<Devon/>}/></SwiperSlide>
          <SwiperSlide className={styles.slide}><CardForLawFirm heading="Robert Fox" subHeading="Ceo of Hunt" type="happyclients" cardIcon={<Robert/>}/></SwiperSlide>
      </Swiper>
        </div>
    )
}

export default Carousel;