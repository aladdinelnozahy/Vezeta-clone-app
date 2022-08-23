import React, { useState } from 'react';
import './AboutDoctor_Info.css';

export default function AboutDoctor_Info() {
  const [showMore, setShowMore] = useState(false);

  // handle show more info
  const handleShowMore = () => {
    setShowMore(() => !showMore);
  };

  return (
    <>
      <div className="info col-12 col-xl-7 order-2 border border-5">
        <div className="">console</div>
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
              Reprehenderit eaque id molestias numquam soluta iusto blanditiis
              ipsam excepturi dolorem modi.
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
    </>
  );
}
