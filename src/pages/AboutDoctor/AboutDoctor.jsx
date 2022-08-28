import React from 'react';
import { Header, SearchItems } from '../../components';
import { AboutDoctor_Main } from '../../containers';
import './AboutDoctor.css';

export default function AboutDoctor() {
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
        <AboutDoctor_Main />
      </div>
    </>
  );
}
