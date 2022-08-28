import React, { useContext } from 'react';
import {
  AboutDoctor_Info,
  Clinic_Gallery,
  Patients_Reviews,
} from '../../components';
import { AboutDoctor_Result, AboutDoctor_BookingInfo } from '../../containers';
// import { AboutDoctorContext } from '../../contexts/AboutDoctor';
import './AboutDoctor_Main.css';

export default function AboutDoctor_Main() {
  // const { doctorData, setDoctorData } = useContext(AboutDoctorContext);
  return (
    <>
      <div className="container-fluid">
        <div className="row col-12 d-xl-none ms-auto me-auto">
          <div className=" d-flex flex-column flex-wrap flex-xl-row justify-content-evenly align-content-center border border-1 py-4 px-0">
            <AboutDoctor_Result />
            <AboutDoctor_BookingInfo />
            <AboutDoctor_Info />
            <Clinic_Gallery />
            {/* <Patients_Reviews /> */}
          </div>
        </div>
        <div className="row d-none col-xl-10 d-xl-block ms-auto me-auto">
          <div className="d-flex flex-column flex-wrap flex-xl-row justify-content-between align-content-center border border-1 py-4 px-0">
            <div className="col-xl-7">
              <AboutDoctor_Result />
              <AboutDoctor_Info />
              <Clinic_Gallery />
              {/* <Patients_Reviews /> */}
            </div>
            <div className="col-xl-4">
              <AboutDoctor_BookingInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
