import React, { useEffect, useContext } from 'react';
import { FilterContext } from '../../contexts/AllDoctors_Filter';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { SearchBox, SearchItems } from '../../components';
import { MdCall } from 'react-icons/md';
import { App4, TabPanel } from '../../components/Taps/Taps';
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
import { t } from 'i18next';
// import ContainerOffer from '../offer/offerslider';
// import MediaControlCard from '../pharmacy/pharmacy';
// import ContainerCatdoc from '../categorydoctors/catDoctores';
// import Mediadownloud from '../downloudside/downloud';

export default function Home() {
  const { filter } = useContext(FilterContext);
  useEffect(() => {
    console.log('home filter', filter);
  }, [filter]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Container fluid className="parentImgSlider px-0">
            <Carousel fade className="d-lg-block d-none">
              <Carousel.Item>
                <img
                  className="d-block col-12 imgSlider"
                  src={images.homecovernewen1}
                  alt="frist slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block col-12 imgSlider"
                  src={images.homecovernewen2}
                  alt="Second slide"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block col-12 imgSlider"
                  src={images.homecovernewen3}
                  alt="Third slide"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block col-12 imgSlider"
                  src={images.homecovernewen4}
                  alt="Third slide"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className="box carousel-caption d-lg-block d-none  ">
              <h2
                className="d-flex align-items-start"
                style={{ color: '#48545c' }}
              >
                {t('sliderheader')}
                {/* Better Healthcare for a Better Life */}
              </h2>
              <h4
                className="d-flex align-items-start"
                style={{ color: '#6f7072' }}
              >
                Book online or&nbsp;
                <span style={{ color: 'red' }}>
                  <MdCall />
                </span>
                &nbsp;16676
              </h4>
              <TabPanel />
            </div>
            <div className="container-fluid">
              <div className="boxSearch row d-flex justify-content-center align-content-center">
                <div className="col-9 d-flex justify-content-center align-content-center py-4   rounded-3 bg-light">
                  <SearchItems />
                </div>
              </div>
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
        </div>
      </div>
    </>
  );
}
