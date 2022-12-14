import React from 'react';
import './Item.css';
import { Booking } from '../../components';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { t } from 'i18next';

export default function Item(props) {
  const { i18n } = useTranslation();

  const handleRoute = () => {
    // props.history.push('/doctor');
    props.history.push(`/doctor/${props.data._id}`);
  };

  const padges = {
    Hygiene: 'fa-hand-sparkles',
    'good listener': 'fa-ear-listen',
    friendly: 'fa-handshake-angle',
    informative: 'fa-circle-info',
  };
  return (
    <>
      <div
        className="container-fluid my-3  top-rounded bg-light item-hover position-relative"
        onClick={() => handleRoute()}
      >
        <div className="row">
          <div className="my-5 d-flex flex-column flex-lg-row justify-content-md-center justify-content-lg-center align-content-center">
            <div className="position-absolute top-0 end-0 bg-warning text-light text-capitalize py-2 px-4 cross-rounded fw-normal">
            {t('itemsponsored')}
            </div>
            <div className=" col-12 col-lg-8 order-lg-0 d-flex flex-wrap justify-content-evenly  justify-content-lg-start align-content-center">
              <div className=" mt-4 mb-4 mb-xl-0 mt-md-0 square-100  me-lg-5">
                <img
                  src={props.data.profileImagePath}
                  className=" rounded-circle img-fluid"
                  alt={props.data._id}
                  width="100"
                  height="100"
                />
              </div>
              <div>
                <div className="content ">
                  <div className="d-flex flex-column flex-md-row align-content-center">
                    <p className="text-capitalize text-normal-anchor fw-semibold fs-14 align-self-center">
                    {t('itemcenter')}
                      
                    </p>
                    <p className="text-capitalize text-center text-md-left">
                      &nbsp;
                      <Link
                        to="/doctor"
                        className="fs-21 hover-link text-normal-anchor "
                      >
                        {i18n.language=='ar'?props.data.doctorName.arabicName:props.data.doctorName.englishName}&nbsp;
                        <span className="text-capitalize">
                          {props.data.entity}
                        </span>
                      </Link>
                    </p>
                  </div>
                  <p className="d-inline-block text-truncate p-trunc p-md-trunc text-grey fw-semibold fs-14">
                  {i18n.language=='ar'?props.data.doctorSpecialization.specialization_arabic:props.data.doctorSpecialization.specialization_english}
                  </p>
                  <div className="rating">
                    <div className="rate">
                      <div
                        className="Stars"
                        style={{
                          '--rating': `${props.data.doctorRating * 20}`,
                        }}
                        aria-label="Rating of this product is 2.3 out of 100."
                      ></div>
                    </div>
                    <p className="text-capitalize fs-14  text-grey">
                    {t('itemoverallrating')}
                      <span>{props.data.voting}</span>{' '}
                      {t('itemvisitors')}
                      
                    </p>
                  </div>
                  <div className="badges d-flex flex-wrap justify-content-start align-content-center">
                    <div className="mx-1 border border-1 rounded-pill px-2 bg-light fs-12 text-grey">
                      <i
                        className={`fa-solid ${
                          padges[props.data.doctorPadges[0]]
                        } text-normal-anchor`}
                      ></i>
                      &nbsp;{props.data.doctorPadges[0]}
                    </div>
                    {/* <div className="mx-1 border border-1 rounded-pill px-2 bg-light fs-12 text-grey">
                      <i className="fa-solid fa-ear-listen  text-normal-anchor"></i>
                      &nbsp;good listener
                    </div> */}
                  </div>
                </div>
                <div className="  info mt-2  ">
                  <div>
                    <p className="d-inline-block text-truncate p-trunc p-md-trunc text-grey fw-semibold fs-12 my-1 ">
                      <i className="fa-solid fa-stethoscope text-normal-anchor border-bottom border-danger pb-1"></i>
                      &nbsp;&nbsp;&nbsp;
                      <a to="#" className=" hover-link text-normal-anchor">
                        {props.data.doctorSpecialization.specialization_english}
                      </a>
                      &nbsp;
                      {t('itemspecin')}&nbsp;
                      <a to="#" className=" hover-link text-normal-anchor">
                        {props.data.doctorSpecialization.specialization_english}
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="d-inline-block text-capitalize text-truncate p-trunc text-grey fw-semibold fs-12 my-1">
                      <i className="fa-solid fa-location-dot text-normal-anchor border-bottom border-danger pb-1"></i>
                      &nbsp;&nbsp;&nbsp;{' '}
                      <span>
                        {props.data.doctorLocation},&nbsp;
                        {i18n.language=='ar'?props.data.doctorClinics[0]['place'][0].placeArabic:props.data.doctorClinics[0]['place'][0].placeEnglish}&nbsp;
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="d-inline-block text-truncate p-trunc text-grey fw-semibold fs-12  my-1">
                      <i className="fa-solid fa-money-bill-1-wave  text-normal-anchor border-bottom border-danger pb-1"></i>
                      &nbsp;&nbsp;&nbsp; 
                      {t('itemfees')}
                      <span>{props.data.fees}</span>
                      &nbsp;
                      {t('itemegp')}
                      
                    </p>
                  </div>
                  <div>
                    <p className="d-inline-block text-grey fw-semibold fs-12 text-normal-anchor  my-1">
                      <i className="fa-solid fa-clock   text-normal-anchor border-bottom border-danger pb-1"></i>
                      &nbsp;&nbsp;&nbsp; 
                      {t('itemwaitingtime')}
                      {' '}
                      <span>{props.data.clinicWaitingTime}</span>
                      &nbsp;
                      {t('itemminutes')}
                      
                    </p>
                  </div>
                  <div>
                    <p className="d-inline-block text-truncate p-trunc text-grey fw-semibold fs-12  my-1">
                      <i className="fa-solid fa-phone  text-normal-anchor border-bottom border-danger pb-1"></i>
                      &nbsp;&nbsp;&nbsp;{' '}
                      <span className="fw-bolder">16676</span>
                      &nbsp;
                      <span>
                      {t('itemcostregcall')}
                      </span>
                      &nbsp;
                      {t('itemminutes')}
                      =
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" booking order-lg-1 col-12 col-lg-3 d-flex flex-column justify-content-start align-items-center  mt-5 mt-lg-0 d-md-block">
              <Booking
                bookingArr={props.data.doctorClinics[0].clinicAppointment}
              />
              <p className="fs-14  text-grey text-center">
              {t('itemreserreq')}
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
