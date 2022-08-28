import React from 'react';
import { Header, FAQ, SearchItems } from '../../components';
import { AllDoctors_Main } from '../../containers';
export default function AllDoctors(props) {
  return (
    <>
      <div className=" bg-color-porcelain d-none d-md-block py-3">
        <Header />
        <div className="container-fluid">
          <div className="row col-md-12 col-xl-10  ms-auto me-auto my-2">
            <SearchItems />
          </div>
        </div>
      </div>
      <div className=" bg-mercury">
        <AllDoctors_Main />
      </div>
      <FAQ />
    </>
  );
}
