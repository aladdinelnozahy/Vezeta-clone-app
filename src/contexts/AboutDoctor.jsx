import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AboutDoctorContext = createContext();

const AboutDoctorContextProvider = (props) => {
  // const [initialData, setInitialData] = useState({});
  const [doctorData, setDoctorData] = useState({});
  useEffect(() => {
    console.log('doctor data from context', doctorData._id);
  }, [doctorData]);

  // useEffect(() => {
  //   axios
  //     .get('https://vezeeta-data-api.herokuapp.com/user-doctor-search')
  //     // .get(
  //     //   `https://vezeeta-data-api.herokuapp.com/user-doctor-search?page=1&_id=${params.id}`
  //     // )
  //     .then((res) => {
  //       // set doctors from API response
  //       setInitialData(res.data.body[1]);
  //     })
  //     .catch((err) => {});
  // }, []);
  return (
    <AboutDoctorContext.Provider
      value={{
        doctorData,
        setDoctorData,
      }}
    >
      {props.children}
    </AboutDoctorContext.Provider>
  );
};

export default AboutDoctorContextProvider;
