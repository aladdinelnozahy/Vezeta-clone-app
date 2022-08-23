import React from 'react';
import { AboutDoctor_Info } from '../../components';
import { AboutDoctor_Result, AboutDoctor_BookingInfo } from '../../containers';
import './AboutDoctor_Main.css';

export default function AboutDoctor_Main() {
  return (
    <>
      <div className="container-fluid">
        <div className="row col-12 col-xl-11 ms-auto me-auto">
          <div className="d-flex flex-column flex-wrap flex-xl-row justify-content-evenly align-content-center border border-1 py-4 px-0">
            <AboutDoctor_Result />
            <AboutDoctor_BookingInfo />
            {/* <AboutDoctor_Info /> */}
          </div>
        </div>
      </div>
    </>
  );
}
