import React from 'react';
import './Patients_Reviews.css';

export default function Patients_Reviews() {
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
            <i className="fa-solid fa-star-half-stroke me-3 fs-4 pb-1 border-bottom border-2 border-danger float-start"></i>
            patients review
          </p>
        </div>
        <div className="mx-3"></div>
      </div>
    </>
  );
}
