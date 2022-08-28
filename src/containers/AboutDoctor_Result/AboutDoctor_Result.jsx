import React, { useState } from 'react';
import './AboutDoctor_Result.css';
import images from '../../constants/images';
import { useParams } from 'react-router-dom';

export default function AboutDoctor_Result(props) {
  // using usParams Hook to receive params object
  const params = useParams();
  const [showMore, setShowMore] = useState(false);

  // handle show more info
  const handleShowMore = () => {
    setShowMore(() => !showMore);
  };
  return (
    <>
      <div className=" rounded-4 bg-light p-3 mb-3">
        {/* using props to call params object */}
        {/* <p>{props.match.params.id}</p> */}
        <p>let {params.id}</p>
        <div className=" col-12 d-flex ms-auto me-auto flex-column flex-md-row flex-wrap justify-content-between align-content-center">
          <div className=" col-12 col-md-3 text-center mt-4 mb-5 mb-xl-0 mt-md-0 square-150">
            <img
              src={images.d01}
              className=" rounded-circle img-fluid"
              alt=""
              width="150"
              height="150"
            />
          </div>
          <div className="content  col-12 col-md-9 ms-auto me-auto">
            <div className="d-flex flex-column flex-md-row justify-content-start align-content-center">
              <p className="text-capitalize text-center  text-grey text-md-left fs-21">
                Center&nbsp;Mohammad Nagy&nbsp;
                <span className="text-capitalize">Royal Clinic</span>
              </p>
              <p className="text-grey fw-semibold fs-14 align-self-center mx-5">
                <span>27,478</span> View(s)
              </p>
            </div>
            <p className="d-inline-block text-grey fw-semibold fs-14">
              Royal clinic cardiovascular and chest endovascular intervention
              ,endoscopic and surgery consultants England
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
                    Pulmonologist
                  </a>
                  &nbsp; specialized in&nbsp;
                  <a href="#" className=" hover-link text-normal-anchor">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit eaque id molestias numquam soluta iusto
                    blanditiis ipsam excepturi dolorem modi.
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
                  style={{ '--rating': '50' }}
                  aria-label="Rating of this product is 2.3 out of 100."
                ></div>
              </div>
              <p className="text-capitalize fs-14 text-grey">
                overall rating from <span>208</span> visitors
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
                <i className="fa-solid fa-hand-sparkles text-normal-anchor"></i>
                &nbsp;Hygiene
              </div>
              <div className="mx-1 border border-1 rounded-pill px-2 bg-light fs-12 text-grey">
                <i className="fa-solid fa-ear-listen  text-normal-anchor"></i>
                &nbsp;good listener
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
