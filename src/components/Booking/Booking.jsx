import React from 'react';
import './Booking.css';
import { t } from 'i18next';

export default function Booking(props) {
  const handleBooking = (e) => {
    const attribute = e.target.attributes.data_attribute.nodeValue;
    console.log(attribute);
  };
  return (
    <>
      <div className="d-flex justify-content-evenly align-content-center col-12 col-md-6 offset-md-3 offset-lg-0 col-lg-12  ">
        
        <div className="card text-bg-secondary mb-3 border border-1 booking-opacity ">
          <div className="card-header bg-primary text-center fs-12 fw-bold px-0">
            <span className="text-capitalize">{props.bookingArr[0].day1}</span>
            &nbsp;
          </div>
          <div
            className="card-body bg-light  overflow-hidden px-50 text-capitalize d-flex justify-content-center align-items-center"
            style={{ width: '80px', maxHeight: '140px' }}
          >
            <p className="card-text fs-12 text-center  text-normal-anchor">
              <span className="fw-semibold">{props.bookingArr[0].time1}</span>
            </p>
          </div>
          <div
            className="card-footer bg-danger text-center fs-12 fw-bold"
            data_attribute={0}
            onClick={(e) => {
              handleBooking(e);
            }}
          >
            {t('bookhead')}
          </div>
        </div>
        <div className="card text-bg-secondary mb-3 border border-1 booking-opacity ">
          <div className="card-header bg-primary text-center fs-12 fw-bold px-0">
            <span className="text-capitalize">{props.bookingArr[1].day2}</span>
            &nbsp;
          </div>
          <div
            className="card-body bg-light  overflow-hidden px-50 text-capitalize d-flex justify-content-center align-items-center"
            style={{ width: '80px', maxHeight: '140px' }}
          >
            <p className="card-text fs-12 text-center  text-normal-anchor">
              <span className="fw-semibold">{props.bookingArr[1].time2}</span>
            </p>
          </div>
          <div
            className="card-footer bg-danger text-center fs-12 fw-bold"
            data_attribute={1}
            onClick={(e) => {
              handleBooking(e);
            }}
          >
            {t('bookhead')}
          </div>
        </div>
        <div className="card text-bg-secondary mb-3 border border-1 booking-opacity ">
          <div className="card-header bg-primary text-center fs-12 fw-bold px-0">
            <span className="text-capitalize">{props.bookingArr[2].day3}</span>
            &nbsp;
          </div>
          <div
            className="card-body bg-light  overflow-hidden px-50 text-capitalize d-flex justify-content-center align-items-center"
            style={{ width: '80px', maxHeight: '140px' }}
          >
            <p className="card-text fs-12 text-center  text-normal-anchor">
              <span className="fw-semibold">{props.bookingArr[2].time3}</span>
            </p>
          </div>
          <div
            className="card-footer bg-danger text-center fs-12 fw-bold"
            data_attribute={2}
            onClick={(e) => {
              handleBooking(e);
            }}
          >
            {t('bookhead')}
          </div>
        </div>
              </div>
    </>
  );
}
