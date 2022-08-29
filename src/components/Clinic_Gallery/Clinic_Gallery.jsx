import React, { useState, useContext, useEffect } from 'react';
import './Clinic_Gallery.css';
import images from '../../constants/images';
import { AboutDoctorContext } from '../../contexts/AboutDoctor';
import { t } from 'i18next';

export default function Clinic_Gallery() {
  const { doctorData, setDoctorData } = useContext(AboutDoctorContext);
  const [renderVariable, setRenderVariable] = useState();
  const activeVariable = () => {
    return (
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
          {doctorData.clinicImagesPath.map((img, index) => {
            return (
              <div
                key={index}
                className=" col-12 col-md-3 text-center my-3 square-150"
              >
                <img
                  src={img.image}
                  className="  img-fluid"
                  alt=""
                  width="150"
                  height="150"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const inactiveVariable = () => {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">{t('loading')}</span>
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
  return <>{renderVariable}</>;
}
