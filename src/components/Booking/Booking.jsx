import React from 'react';
import './Booking.css';

export default function Booking(props) {
  return (
    <>
      <div className="d-flex justify-content-evenly align-content-center col-12 col-md-6 offset-md-3 offset-lg-0 col-lg-12  ">
        {/* not available booking */}
        {/* <div className="card text-bg-secondary mb-3 border border-1 not-available-opacity">
          <div className="card-header bg-primary text-center fs-12 fw-bold px-0">
            <span className="text-capitalize">Sun</span>&nbsp;
            <span>08/29</span>
          </div>
          <div
            className="card-body bg-light  overflow-hidden px-50 text-capitalize  d-flex justify-content-center align-items-center"
            style={{ width: '80px', minHeight: '140px' }}
          >
            <p className="card-text fs-12 text-center text-grey ">
              not available appointments
            </p>
          </div>

          <div className="card-footer bg-secondary text-center fs-12 fw-bold disabled">
            Book
          </div>
        </div> */}
        {/* represent booking by using from to */}

        {/* <div className="card text-bg-secondary mb-3 border border-1 booking-opacity ">
          <div className="card-header bg-primary text-center fs-12 fw-bold px-0">
            <span className="text-capitalize">Sun</span>&nbsp;
            <span>08/29</span>
          </div>
          <div
            className="card-body bg-light  overflow-hidden px-50 text-capitalize d-flex justify-content-center align-items-center"
            style={{ width: '80px', maxHeight: '140px' }}
          >
            <p className="card-text fs-12 text-center  text-normal-anchor">
              from <span className="fw-semibold">5:00 PM</span> to&nbsp;
              <span className="fw-semibold">11:55 PM</span>
            </p>
          </div>
          <div className="card-footer bg-danger text-center fs-12 fw-bold">
            Book
          </div>
        </div> */}
        {/* represent booking by using from to */}

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
          <div className="card-footer bg-danger text-center fs-12 fw-bold">
            Book
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
          <div className="card-footer bg-danger text-center fs-12 fw-bold">
            Book
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
          <div className="card-footer bg-danger text-center fs-12 fw-bold">
            Book
          </div>
        </div>
        {/* represent booking by using from to */}
        {/* <div className="card text-bg-secondary mb-3 border border-1  booking-opacity">
          <div className="card-header bg-primary text-center fs-12 fw-bold px-0">
            <span className="text-capitalize">Sun</span>&nbsp;
            <span>08/29</span>
          </div>
          <div
            className="card-body bg-light  overflow-hidden px-50 text-capitalize d-flex justify-content-center align-items-center"
            style={{ width: '80px', maxHeight: '140px' }}
          >
            <p className="card-text fs-12 text-center  text-normal-anchor">
              from <span className="fw-semibold">5:00 PM</span> to&nbsp;
              <span className="fw-semibold">11:55 PM</span>
            </p>
          </div>
          <div className="card-footer bg-danger text-center fs-12 fw-bold">
            Book
          </div>
        </div> */}
        {/* represent booking by hours */}
        {/* <div className="card text-bg-secondary mb-3 border border-1">
          <div className="card-header bg-primary text-center fs-12 fw-bold px-0">
            <span className="text-capitalize">Sun</span>&nbsp;
            <span>08/29</span>
          </div>
          <div
            className="card-body bg-light  overflow-hidden px-50 text-capitalize d-flex flex-column justify-content-start align-items-center pt-1"
            style={{ width: '80px', 'max-height': '130px' }}
          >
            <p className="card-text fs-12 text-center text-danger my-0 px-2 rounded time-hover">
              <span className="fw-semibold">5:00 PM</span>
            </p>
            <p className="card-text fs-12 text-center text-normal-anchor  my-0 px-2 rounded time-hover">
              <span className="fw-semibold">5:00 PM</span>
            </p>
            <p className="card-text fs-12 text-center text-normal-anchor   my-0 px-2 rounded time-hover">
              <span className="fw-semibold ">5:00 PM</span>
            </p>
            <p className="card-text fs-12 text-center text-normal-anchor   my-0 px-2 rounded time-hover">
              <span className="fw-semibold">5:00 PM</span>
            </p>
            <p className="card-text fs-12 text-center text-normal-anchor   my-0 px-2 rounded time-hover">
              <span className="fw-semibold">5:00 PM</span>
            </p>
            <p className="card-text fs-12 text-center text-normal-anchor   my-0 px-2 rounded time-hover">
              <span className="fw-semibold">5:00 PM</span>
            </p>
            <p className="card-text fs-12 text-center text-normal-anchor   my-0 px-2 rounded time-hover">
              <span className="fw-semibold">5:00 PM</span>
            </p>
            <p className="card-text fs-12 text-center text-normal-anchor   my-0 px-2 rounded time-hover">
              <span className="fw-semibold">5:00 PM</span>
            </p>
            <p className="card-text fs-12 text-center text-normal-anchor   my-0 px-2 rounded time-hover">
              <span className="fw-semibold">5:00 PM</span>
            </p>
            <p className="card-text fs-12 text-center text-danger   my-0 px-2 rounded time-hover">
              <span className="fw-semibold">5:00 PM</span>
            </p>
          </div>
          <div className="card-footer bg-danger text-center fs-12 fw-bold">
            Book
          </div>
        </div> */}
      </div>
    </>
  );
}
