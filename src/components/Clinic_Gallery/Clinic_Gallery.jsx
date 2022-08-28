import React from 'react';
import './Clinic_Gallery.css';
import images from '../../constants/images';

export default function Clinic_Gallery() {
  return (
    <>
      <div className="info  rounded-4 bg-light py-2 px-4 my-3">
        <div className=" ">
          <p
            className="accordion-header text-primary fw-bold px-4 py-4 accordion-button collapsed text-capitalize"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-title"
            aria-expanded="true"
            aria-controls="collapse-title"
            id="title"
          >
            <i className="fa-solid fa-image me-3 fs-4 pb-1 border-bottom border-2 border-danger float-start"></i>
            clinic
          </p>
        </div>
        <div className="mx-5 d-flex justify-content-between align-content-center">
          <div className=" col-12 col-md-3 text-center my-3 square-150">
            <img
              src={images.d01}
              className="  img-fluid"
              alt=""
              width="150"
              height="150"
            />
          </div>

          <div className=" col-12 col-md-3 text-center my-3  square-150">
            <img
              src={images.d03}
              className="  img-fluid"
              alt=""
              width="150"
              height="150"
            />
          </div>
          <div className=" col-12 col-md-3 text-center my-3  square-150">
            <img
              src={images.d04}
              className="  img-fluid"
              alt=""
              width="150"
              height="150"
            />
          </div>
        </div>
      </div>
    </>
  );
}
