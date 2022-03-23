import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from './Project';
import styles from '../../Styles/Projects/Projects.module.css'
import useScroll from '../useScroll';
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

export default function Projects() {
  const opacity = useScroll(700)
  return (
    <>
      <div className={opacity ? 'newSection' : ' newSection @apply opacity-100'}>
        <h2 id='projects'>Projects:</h2>
      </div>
      <div className={opacity ? '@apply opacity-0' : styles.center}>
        <div className={styles.carousel}>
          <Slider {...settings}>
            <Project projectTitle='Snobz Original-Version' qrCodeTo='https://snobz.vercel.app/' github='https://github.com/JosephSchec/Snobz' repository='Snobz' />
            <Project projectTitle='Snobz2 Webpack-Version' qrCodeTo='https://snobz2.vercel.app/' github='https://github.com/JosephSchec/Snobz2' repository='Snobz2' />
            <Project projectTitle='Snobz React-Version' qrCodeTo='https://snobzz.vercel.app/' github='https://github.com/JosephSchec/snobz-react' repository='snobz-react' />
            <Project projectTitle='Zmanim' github='https://github.com/JosephSchec/zmanim' repository='zmanim' />
          </Slider>
        </div>
      </div>
    </>
  )
}
