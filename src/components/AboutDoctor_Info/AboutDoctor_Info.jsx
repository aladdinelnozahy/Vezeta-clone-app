import { t } from 'i18next';
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
            <i className="fa-solid fa-info me-3 fs-4 pb-1 border-bottom border-2 border-danger float-start"></i>
            {t('aboutdocinfohead')}
          </p>
        </div>
        <div className="ms-5">
          <p className="text-grey ">
          {t('aboutdocinfobody')} 
          </p>
        </div>
      </div>
    </>
  );
}
