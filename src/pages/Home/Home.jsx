import React, { useEffect } from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { MdCall } from 'react-icons/md';
import { App4, TabPanel } from '../../components/Taps/Taps';

import { useTranslation } from "react-i18next";
import i18next from 'i18next';
// import Row from "react-bootstrap/Row";
import {
  Offers,
  Pharmacy,
  CategoryDoctors,
  DownloadSide,
  //   App4,
  //   TabPanel,
} from '../../components';
import images from '../../constants/images';
// import ContainerOffer from '../offer/offerslider';
// import MediaControlCard from '../pharmacy/pharmacy';
// import ContainerCatdoc from '../categorydoctors/catDoctores';
// import Mediadownloud from '../downloudside/downloud';



const languages=[
  {
    code:'ar',
    name: 'العربية',
    country_code:'sa',
    dir:"rtl"
  },
  {
    code:'en',
    name: 'English',
    country_code:'gb'
  }
  

]
export default function Home() {
  const currentLanguageCode=localStorage.getItem('i18nextLng')||'en'
  const currentLanguage=languages.find((l)=> l.code == currentLanguageCode)
  const { t } = useTranslation()

  useEffect(()=>{
    console.log(currentLanguage)
    document.body.dir= currentLanguage.dir||'ltr'
  },[currentLanguage, t])
  return (
    <>
      <Container fluid className="parentImgSlider px-0">
        <Carousel fade className="d-lg-block d-none">
          <Carousel.Item>
            <img
              className="d-block w-100 imgSlider"
              src={images.homecovernewen1}
              alt="frist slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSlider"
              src={images.homecovernewen2}
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSlider"
              src={images.homecovernewen3}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSlider"
              src={images.homecovernewen4}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="box carousel-caption d-lg-block d-none  ">
          <h2 className="d-flex align-items-start" style={{ color: '#48545c' }}>
          {t('sliderheader')}          </h2>
          <h4 className="d-flex align-items-start" style={{ color: '#6f7072' }}>
          {t('bookonlineheader')}
            &nbsp;
            <span style={{ color: 'red' }}>
              <MdCall />
            </span>
            &nbsp;16676
          </h4>
          <TabPanel />
        </div>
        <div className="boxSearch d-lg-flex justify-content-center d-none ">
          <App4 />
        </div>
        <div>
          {' '}
          <Pharmacy />
        </div>
        <div>
          <Offers />
        </div>
        <div>
          <CategoryDoctors />
        </div>
        <div>
          <DownloadSide />
        </div>
      </Container>
    </>
  );
}
