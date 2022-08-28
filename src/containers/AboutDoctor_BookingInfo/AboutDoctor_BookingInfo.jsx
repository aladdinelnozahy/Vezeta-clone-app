import React, { useState, useContext, useEffect } from 'react';
import './AboutDoctor_BookingInfo.css';
import { Booking } from '../../components';
import { AboutDoctorContext } from '../../contexts/AboutDoctor';

export default function AboutDoctor_BookingInfo() {
  const [renderVariable, setRenderVariable] = useState();
  const [currentClinic, setCurrentClinic] = useState('');
  let clinicData = [];

  const { doctorData, setDoctorData } = useContext(AboutDoctorContext);

  const clinicHandler = (e) => {
    const attribute = e.target.attributes.data_attribute.nodeValue;
    setCurrentClinic(clinicData[Number(attribute)]);
    console.log('currentClinic', currentClinic);
  };
  const activeVariable = () => {
    return (
      <div className="rounded-4 bg-light">
        <div className="text-center bg-primary text-light py-2 rounded-top-4">
          Booking Information
        </div>
        <div className="text-center border-bottom border-secondary py-2">
          <p className="text-grey m-0">
            Book
            <br />
            <span className="text-normal-anchor">Examination</span>
          </p>
        </div>
        <div className="text-center border-bottom border-secondary d-flex justify-content-evenly align-items-center py-3">
          <div className=" col">
            <i className="fa-solid fa-money-bill-1-wave me-3 fs-5 pb-1 border-bottom border-2 border-danger text-primary mb-2"></i>

            <p
              className="accordion-header text-grey ps-4  border-5  fs-10 fw-semibold accordion-button collapsed text-capitalize"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-title"
              aria-expanded="true"
              aria-controls="collapse-title"
              id="title"
            >
              Fees
              <span className="text-dark-sliver fw-bold">
                &nbsp; {doctorData.fees} EGP
              </span>
            </p>
          </div>
          <div className="  text-center col">
            <i className="fa-solid fa-coins me-3 fs-5 pb-1 border-bottom border-2 border-warning text-warning mb-2"></i>
            <p
              className="accordion-header text-grey fs-10 ps-1 text-center fw-semibold accordion-button collapsed text-capitalize"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-title"
              aria-expanded="true"
              aria-controls="collapse-title"
              id="title"
            >
              you'll earn
              <span className="text-dark-sliver fw-bold">
                &nbsp; {doctorData.voting - doctorData.fees} points
              </span>
            </p>
          </div>
          <div className="  col">
            <i className="fa-solid fa-clock me-3 fs-5 pb-1 border-bottom border-2 border-success mb-2 text-success"></i>
            <p
              className="accordion-header text-grey text-center fs-10 fw-semibold accordion-button collapsed text-capitalize"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-title"
              aria-expanded="true"
              aria-controls="collapse-title"
              id="title"
            >
              Waiting Time:
              <span className="text-dark-sliver fw-bold">
                &nbsp; {doctorData.clinicWaitingTime} Minutes
              </span>
            </p>
          </div>
        </div>
        <div className="border-bottom border-secondary py-1 px-1">
          <div className=" ">
            <p
              className="accordion-header fs-14 text-grey fw-bold px-4 py-4 accordion-button collapsed "
              data-bs-toggle="collapse"
              data-bs-target="#collapse-title"
              aria-expanded="true"
              aria-controls="collapse-title"
              id="title"
            >
              <i className="fa-solid fa-location-dot me-3 fs-5 pb-1 text-primary border-bottom border-2 border-danger float-start"></i>
              Choose a clinic
            </p>
          </div>
          <div className="d-flex justify-content-evenly align-content-center">
            {doctorData.doctorClinics.map((dClinic, index) => {
              clinicData.push(dClinic['place'][0]['placeEnglish']);
              return (
                <button
                  type="button"
                  key={index}
                  data_attribute={index}
                  className="btn btn-outline-primary  btn-sm text-capitalize"
                  onClick={(e) => clinicHandler(e)}
                >
                  {dClinic['place'][0]['placeEnglish']}
                </button>
                // <a
                //   key={index}
                //   className="text-normal-anchor fw-bold text-capitalize"
                // >
                //   {dClinic['place'][0]['placeEnglish']}
                // </a>
              );
            })}
          </div>
          {console.log(clinicData)}
        </div>
        <div className="border-bottom border-secondary py-1 px-1 my-4">
          <div className=" ">
            <p
              className="accordion-header fs-14 text-grey fw-bold px-4 accordion-button collapsed text-capitalize"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-title"
              aria-expanded="true"
              aria-controls="collapse-title"
              id="title"
            >
              <i className="fa-solid text-primary  fa-location-dot me-3 fs-5 pb-1 border-bottom border-2 border-danger float-start "></i>
              {currentClinic}
            </p>
            <p
              className="accordion-header fs-12 text-dark-silver fw-bold ps-5 pt-2 accordion-button collapsed "
              data-bs-toggle="collapse"
              data-bs-target="#collapse-title"
              aria-expanded="true"
              aria-controls="collapse-title"
              id="title"
            >
              Book now to receive the clinic’s address details and phone number
            </p>
          </div>
          <div className="d-flex justify-content-center align-content-center mt-3">
            <p className="fs-5 fw-semibold">Choose your appointment</p>
          </div>
          <div className="d-flex justify-content-center align-content-center mt-3">
            <Booking
              bookingArr={doctorData.doctorClinics[0].clinicAppointment}
            />
          </div>
        </div>
        <div className="text-center fs-14 py-1">
          <p className="text-grey p-0">
            Reservation required, first-come, first-served
          </p>
        </div>
      </div>
    );
  };
  const inactiveVariable = () => {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  };

  useEffect(() => {
    console.log('about-doctor filter', doctorData);
    // Object.keys(doctorData).length > 0 ? renderVariable=activeVariable : inactiveVariable
    if (Object.keys(doctorData).length > 0) {
      setRenderVariable(activeVariable);
    } else {
      setRenderVariable(inactiveVariable);
    }
  }, [doctorData]);

  return <>{renderVariable}</>;
}
