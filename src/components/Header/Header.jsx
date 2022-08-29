import React from 'react';
import './Header.css';
import images from '../../constants/images';
import { t } from 'i18next';
export default function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row col-md-12 col-xl-10  ms-auto me-auto">
          <div className="d-flex justify-content-between align-content-center">
            <div className="brief">
              <h1 className="text-dark-silver fs-19  fw-bold">
              {t('bestdocineg')}
                
              </h1>
              <p className="text-grey fs-16 fw-semibold">
              {t('bookorcall')}
                <span className="hotline-icon text-danger">
                  &nbsp;
                  <i className="fa-solid fa-phone"></i>&nbsp;
                </span>
                <span className="hotline-num text-dark-silver fs-19  fw-bold">
                  16676
                </span>
              </p>
              <p className="statistics text-grey fs-16 fw-semibold lh-1">
                <span className="statistics--Doctors">15000</span>{' '}
                {t('docs')}&nbsp;-&nbsp;
                <span className="statistics--professors">90000</span> 
                {t('profandconsult')}&nbsp;
                <span className="statistics--Specialties">40</span> 
                {t('speciali')}
               
              </p>
            </div>
            <div>
              <img src={images.doctors} className="img-fluid" alt="doctors" />
            </div>
          </div>
          <div className="search"></div>
        </div>
      </div>
    </>
  );
}
