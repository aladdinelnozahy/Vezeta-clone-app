import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { MdCall } from 'react-icons/md';
import { App4, TabPanel } from '../../components/Taps/Taps';
import { Footer } from '../../components';
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

export default function Home() {
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
            Better Healthcare for a Better Life
          </h2>
          <h4 className="d-flex align-items-start" style={{ color: '#6f7072' }}>
            Book online or&nbsp;
            <span style={{ color: 'red' }}>
              <MdCall />
            </span>
            &nbsp;16676
          </h4>
          <TabPanel />
          {/* <div  className='boxSearch'><TabPanel/></div> */}
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
