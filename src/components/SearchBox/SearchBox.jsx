import React from 'react';
import './SearchBox.css';
import SearchItems from '../SearchItems/SearchItems';
export default function SearchBox() {
  return (
    <>
      <div className="container-fluid">
        <div className="row col-9 border border-3 rounded-4 ms-auto me-auto text-center ">
          <div className=" border-bottom border-primary mb-5 py-3 d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-calendar-check  fs-1 me-2 text-normal-anchor"></i>
            <p className="text-uppercase text-normal-anchor fs-6 fw-bold my-0">
              Book A Doctor
            </p>
          </div>
          <div className="py-5"></div>
        </div>
      </div>
      <SearchItems />
    </>
  );
}
