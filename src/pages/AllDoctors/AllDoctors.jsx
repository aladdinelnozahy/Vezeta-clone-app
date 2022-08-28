import React, { useEffect, useContext } from 'react';
import { FilterContext } from '../../contexts/AllDoctors_Filter';
import { Header, FAQ, SearchItems } from '../../components';
import { AllDoctors_Main } from '../../containers';
export default function AllDoctors(props) {
  const { filter } = useContext(FilterContext);
  useEffect(() => {
    console.log('all-doctor filter', filter);
  }, [filter]);
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
