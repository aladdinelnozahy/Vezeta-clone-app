import React, { useState, useContext, useEffect } from 'react';
import './AboutDoctor_Result.css';
import images from '../../constants/images';
import { AboutDoctorContext } from '../../contexts/AboutDoctor';

import { useParams } from 'react-router-dom';

export default function AboutDoctor_Result() {
  const { doctorData, setDoctorData } = useContext(AboutDoctorContext);
  // // using usParams Hook to receive params object
  // const params = useParams();
  const [showMore, setShowMore] = useState(false);
  const [renderVariable, setRenderVariable] = useState();
  const padges = {
    Hygiene: 'fa-hand-sparkles',
    'good listener': 'fa-ear-listen',
    friendly: 'fa-handshake-angle',
    informative: 'fa-circle-info',
  };
  // handle show more info
  const handleShowMore = () => {
    setShowMore(() => !showMore);
  };

  const activeVariable = () => {
    return (
      <div className=" rounded-4 bg-light p-3 mb-3">
        <div className=" col-12 d-flex ms-auto me-auto flex-column flex-md-row flex-wrap justify-content-between align-content-center">
          <div className=" col-12 col-md-3 text-center mt-4 mb-5 mb-xl-0 mt-md-0 square-150">
            <img
              src={doctorData.profileImagePath}
              className=" rounded-circle img-fluid"
              alt=""
              width="150"
              height="150"
            />
          </div>
          <div className="content  col-12 col-md-9 ms-auto me-auto">
            <div className="d-flex flex-column flex-md-row justify-content-start align-content-center">
              <p className="text-capitalize text-center  text-grey text-md-left fs-21">
                Center&nbsp;{doctorData.doctorName.englishName}&nbsp;
                <span className="text-capitalize">{doctorData.entity}</span>
              </p>
              <p className="text-grey fw-semibold fs-14 align-self-center mx-5">
                <span>{doctorData.voting + 153}</span> View(s)
              </p>
            </div>
            <p className="d-inline-block text-grey fw-semibold fs-14">
              {doctorData.doctorSpecialization.specialization_english}
            </p>

            <div className="info">
              <div className="d-flex justify-content-start flex-wrap align-items-center">
                <p
                  className={` ${
                    showMore ? 'd-inline-block text-truncate p-trunc' : ''
                  } p-md-trunc text-grey fw-semibold fs-12 my-1 `}
                >
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" className=" hover-link text-normal-anchor">
                    {doctorData.doctorSpecialization.specialization_english}
                  </a>
                  &nbsp; specialized in&nbsp;
                  <a href="#" className=" hover-link text-normal-anchor">
                    {doctorData.doctorSpecialization.specialization_english}
                  </a>
                </p>
                <a
                  className={` hover-link text-normal-anchor ms-2 fs-12 fw-semibold user-select-none ${
                    showMore ? '' : 'col-12'
                  }`}
                  onClick={() => {
                    handleShowMore();
                  }}
                >
                  {showMore ? 'More' : 'Less'}
                </a>
              </div>
            </div>
            <div className="rating d-flex flex-wrap justify-content-start align-content-center my-3">
              <div className="rate col-12 col-md-4">
                <div
                  className="Stars"
                  style={{
                    '--rating': `${doctorData.doctorRating * 20}`,
                  }}
                  aria-label="Rating of this product is 2.3 out of 100."
                ></div>
              </div>
              <p className="text-capitalize fs-14 text-grey">
                overall rating from <span>{doctorData.voting}</span> visitors
                <a
                  href="#"
                  className=" ms-3 text-capitalize hover-link text-normal-anchor"
                >
                  show all reviews
                </a>
              </p>
            </div>
            <div className="badges d-flex flex-wrap justify-content-start align-content-center">
              <div className="mx-1 border border-1 rounded-pill px-2 bg-light fs-12 text-grey">
                <i
                  className={`fa-solid ${
                    padges[doctorData.doctorPadges[0]]
                  } text-normal-anchor`}
                ></i>
                &nbsp;{doctorData.doctorPadges[0]}
              </div>
            </div>
          </div>
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
    if (Object.keys(doctorData).length >= 1) {
      setRenderVariable(activeVariable);
    } else {
      setRenderVariable(inactiveVariable);
    }
  }, [doctorData]);
  return (
    <>
      {/* {console.log(doctorData)} */}
      {/* {Object.keys(doctorData).length > 0 ? activeVariable : inactiveVariable} */}
      {renderVariable}
      {/* <div className=" rounded-4 bg-light p-3 mb-3">
        <div className=" col-12 d-flex ms-auto me-auto flex-column flex-md-row flex-wrap justify-content-between align-content-center">
          <div className=" col-12 col-md-3 text-center mt-4 mb-5 mb-xl-0 mt-md-0 square-150">
            <img
              src={doctorData.profileImagePath}
              className=" rounded-circle img-fluid"
              alt=""
              width="150"
              height="150"
            />
          </div>
          <div className="content  col-12 col-md-9 ms-auto me-auto">
            <div className="d-flex flex-column flex-md-row justify-content-start align-content-center">
              <p className="text-capitalize text-center  text-grey text-md-left fs-21">
                Center&nbsp;{doctorData.doctorName.englishName}&nbsp;
                <span className="text-capitalize">{doctorData.entity}</span>
              </p>
              <p className="text-grey fw-semibold fs-14 align-self-center mx-5">
                <span>{doctorData.voting + 153}</span> View(s)
              </p>
            </div>
            <p className="d-inline-block text-grey fw-semibold fs-14">
              {doctorData.doctorSpecialization.specialization_english}
            </p>

            <div className="info">
              <div className="d-flex justify-content-start flex-wrap align-items-center">
                <p
                  className={` ${
                    showMore ? 'd-inline-block text-truncate p-trunc' : ''
                  } p-md-trunc text-grey fw-semibold fs-12 my-1 `}
                >
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" className=" hover-link text-normal-anchor">
                    {doctorData.doctorSpecialization.specialization_english}
                  </a>
                  &nbsp; specialized in&nbsp;
                  <a href="#" className=" hover-link text-normal-anchor">
                    {doctorData.doctorSpecialization.specialization_english}
                  </a>
                </p>
                <a
                  className={` hover-link text-normal-anchor ms-2 fs-12 fw-semibold user-select-none ${
                    showMore ? '' : 'col-12'
                  }`}
                  onClick={() => {
                    handleShowMore();
                  }}
                >
                  {showMore ? 'More' : 'Less'}
                </a>
              </div>
            </div>
            <div className="rating d-flex flex-wrap justify-content-start align-content-center my-3">
              <div className="rate col-12 col-md-4">
                <div
                  className="Stars"
                  style={{
                    '--rating': `${doctorData.doctorRating * 20}`,
                  }}
                  aria-label="Rating of this product is 2.3 out of 100."
                ></div>
              </div>
              <p className="text-capitalize fs-14 text-grey">
                overall rating from <span>{doctorData.voting}</span> visitors
                <a
                  href="#"
                  className=" ms-3 text-capitalize hover-link text-normal-anchor"
                >
                  show all reviews
                </a>
              </p>
            </div>
            <div className="badges d-flex flex-wrap justify-content-start align-content-center">
              <div className="mx-1 border border-1 rounded-pill px-2 bg-light fs-12 text-grey">
                <i
                  className={`fa-solid ${
                    padges[doctorData.doctorPadges[0]]
                  } text-normal-anchor`}
                ></i>
                &nbsp;{doctorData.doctorPadges[0]}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
