import React from 'react';
import { Header, FAQ } from '../../components';
import { AllDoctors_Main } from '../../containers';
export default function AllDoctors(props) {
  return (
    <>
      <div className=" bg-color-porcelain d-none d-md-block ">
        <Header />
      </div>
      <div className=" bg-mercury">
        <AllDoctors_Main />
      </div>
      <FAQ />
    </>
  );
}
