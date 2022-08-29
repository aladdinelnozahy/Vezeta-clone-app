import React, { useEffect, useState, useContext } from 'react';
import { AllDoctors_Sidebar, AllDoctors_Results } from '../../containers';
import { FilterContext } from '../../contexts/AllDoctors_Filter';
import './AllDoctors_Main.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';

export default function AllDoctors_Main() {
  const { setGender, setExamination, setEntity, setAvailability, setTitle } =
    useContext(FilterContext);
  const [generalData, setGeneralData] = useState([]);
  const [page, setPage] = useState(1);
  const [doctors, setDoctors] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
    // console.log(page);
  };

  useEffect(() => {
    axios
      .get(
        `https://vezeeta-data-api.herokuapp.com/user-doctor-search?page=${page}`
      )
      .then((res) => {
        // set doctors from API response
        setDoctors(res.data.body);
        setGeneralData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {});
  }, [page]);

  return (
    <>
      <div className="container-fluid">
        <div className="row col-12 ms-auto me-auto">
          <div className="d-flex justify-content-evenly align-content-center border border-1 py-4 px-0">
            <AllDoctors_Sidebar />
            <AllDoctors_Results
              doctorsData={doctors}
              generalData={generalData}
            />
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-evenly align-content-center ">
          {/* <Pagination  count={generalData.totalPages} color="primary" /> */}
          <Pagination
            count={generalData.totalPages}
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
