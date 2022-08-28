import React, { useEffect, useContext } from 'react';
import { FilterContext } from '../../contexts/AllDoctors_Filter';
import { AboutDoctorContext } from '../../contexts/AboutDoctor';
import { Header, SearchItems } from '../../components';
import { AboutDoctor_Main } from '../../containers';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './AboutDoctor.css';

export default function AboutDoctor(props) {
  const { doctorData, setDoctorData } = useContext(AboutDoctorContext);
  // using usParams Hook to receive params object
  const params = useParams();
  // using useState to store doctors result from API

  const { filter } = useContext(FilterContext);
  useEffect(() => {
    console.log('about-doctor filter', filter);
  }, [filter]);

  // using useEffect Hook to start using API integration
  // we are using didMount life cycle method which start automatically after rendering
  useEffect(() => {
    axios
      // .get('https://vezeeta-data-api.herokuapp.com/user-doctor-search')
      // http://localhost:3000/user-profile/${items}
      .get(
        `https://vezeeta-data-api.herokuapp.com/user-doctor-profile/${params.id}`
      )
      .then((res) => {
        // set doctors from API response
        console.log(res.data.body);
        setDoctorData(res.data.body);

        // console.log(doctorData);
        // setDoctorData(res.data);
        // console.log('doctorData', doctorData);
      })
      .catch((err) => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
