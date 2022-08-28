import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchItems.css';
import { specialization, location } from '../../constants/data';
import { FilterContext } from '../../contexts/AllDoctors_Filter';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function SearchItems() {
  const {
    gender,
    setGender,
    examination,
    setExamination,
    entity,
    setEntity,
    availability,
    setAvailability,
    title,
    setTitle,
    initialHomeSearchState,
    // homeSearch,
    // setHomeSearch,
    specialty,
    setSpecialty,
    city,
    setCity,
    doctorName,
    setDoctorName,
    filter,
  } = useContext(FilterContext);
  //  second way to use history object without using props
  // using useHistory Hook to destruct history object
  const history = useHistory();

  // const [specialty, setSpecialty] = useState('');
  // const [city, setCity] = useState('');
  // const [doctorName, setDoctorName] = useState('Doctor name');

  const [homeQuery, setHomeQuery] = useState('');

  const selectHandler = (e) => {
    const attribute = e.target.attributes.data_attribute.nodeValue;
    const value = e.target.value;
    setDoctorName('Doctor name');
    if (attribute == 'specialty') {
      setSpecialty(value);
    } else if (attribute == 'city') {
      setCity(value);
    }
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    if (value == '') {
      setDoctorName('Doctor name');
    }
  };
  const handleFocus = (e) => {
    // e.target.select();

    setDoctorName('');
  };
  const inputTextHandler = (e) => {
    const value = e.target.value;
    setTitle([
      { name: 'professor', value: false },
      { name: 'lecturer', value: false },
      { name: 'consultant', value: false },
      { name: 'specialist', value: false },
    ]);
    setAvailability([
      { name: 'any', value: false },
      { name: 'today', value: false },
      { name: 'tomorrow', value: false },
    ]);
    setEntity([
      { name: 'hospital', value: false },
      { name: 'clinic', value: false },
    ]);
    setGender([
      { name: 'female', value: false },
      { name: 'male', value: false },
    ]);
    setExamination('');
    setCity('');
    setSpecialty('');
    setDoctorName(value);
  };
  //   useEffect(() => {
  //     setHomeSearch(initialHomeSearchState);
  //   }, []);

  /////////////////////////////////////////////////////////
  // useEffect(() => {
  //   console.log('render filter', filter);
  // }, [filter]);

  // 👇️ reset to initial state
  //   const resetHomeSearchState = () => {
  //     setHomeSearch(initialHomeSearchState);
  //     console.log('homeeeee', homeSearch);
  //   };

  const homeFilterHandler = (e) => {
    // console.log('homeSearch', [...homeSearch]);
    // console.log('initialHomeSearchState', initialHomeSearchState);
    // setHomeSearch(initialHomeSearchState);
    // console.log('homeeeeee', homeSearch);
    // resetHomeSearchState();
    // //////////////////////////////////////////
    // if (doctorName !== 'Doctor name') {
    //   let newHomeSearch = [...homeSearch]; // copying the old datas array
    //   let ele = newHomeSearch.findIndex((v) => v['name'] === 'doctorName');
    //   newHomeSearch[ele]['value'] = true; // replace e.target.value with whatever you want to change it to
    //   setHomeSearch(newHomeSearch);
    // } else if (doctorName == 'Doctor name') {
    //   if (city !== 'default' && specialty == 'default') {
    //     let newHomeSearch = [...homeSearch]; // copying the old datas array
    //     let ele = newHomeSearch.findIndex((v) => v['name'] === 'city');
    //     newHomeSearch[ele]['value'] = true; // replace e.target.value with whatever you want to change it to
    //     setHomeSearch(newHomeSearch);
    //   } else if (specialty !== 'default' && city == 'default') {
    //     let newHomeSearch = [...homeSearch]; // copying the old datas array
    //     let ele = newHomeSearch.findIndex((v) => v['name'] === 'specialty');
    //     newHomeSearch[ele]['value'] = true; // replace e.target.value with whatever you want to change it to
    //     setHomeSearch(newHomeSearch);
    //   } else if (specialty !== 'default' && city !== 'default') {
    //     let newHomeSearch = [...homeSearch]; // copying the old datas array
    //     let ele1 = newHomeSearch.findIndex((v) => v['name'] === 'city');
    //     let ele2 = newHomeSearch.findIndex((v) => v['name'] === 'specialty');
    //     newHomeSearch[ele1]['value'] = true; // replace e.target.value with whatever you want to change it to
    //     newHomeSearch[ele2]['value'] = true; // replace e.target.value with whatever you want to change it to
    //     setHomeSearch(newHomeSearch);
    //   }
    // }
    // //////////////////////////////////////////
  };
  // 👇️ reset to initial state
  const searchHandler = () => {
    // resetHomeSearchState();
    // homeFilterHandler();
    // setCity('');
    // setSpecialty('');
    // setDoctorName('Doctor name');
    // function which firing and redirect to doctor page
    history.push('/all-doctors');
  };

  return (
    <>
      <Row className="g-0 col-12 border-rounded-4">
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Select a specialty"
            className="fs-14 fw-semibold"
          >
            <Form.Select
              aria-label="Floating label select example"
              className="rounded-0  rounded-start text-normal-anchor fs-6 fw-bold"
              data_attribute="specialty"
              value={specialty}
              onChange={(event) => selectHandler(event)}
            >
              <option value="">Choose specialty</option>
              {specialization.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="In this city"
            className="fs-14 fw-semibold"
          >
            <Form.Select
              aria-label="Floating label select example"
              className="rounded-0 text-normal-anchor fs-6 fw-bold"
              data_attribute="city"
              onChange={(event) => selectHandler(event)}
              value={city}
            >
              <option value="">Choose city</option>
              {location.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </Form.Select>
          </FloatingLabel>
        </Col>

        <Col md>
          <FloatingLabel
            controlId="floatingPassword"
            label="Or search by name"
            className="fs-14 fw-semibold"
          >
            <Form.Control
              type="text"
              placeholder="Doctor name"
              className="rounded-0 text-normal-anchor text-start fs-6 fw-bold"
              value={doctorName}
              data_attribute="inputText"
              onChange={(event) => inputTextHandler(event)}
              onBlur={(event) => handleBlur(event)}
              onFocus={(event) => handleFocus(event)}
            />
          </FloatingLabel>
        </Col>

        <Col md>
          <Button
            variant="outline-secondary"
            id="button-addon1"
            type="submit"
            className="h-100 rounded-0 rounded-end px-5 bg-danger text-light fw-semibold fs-5 col-12"
            // onClick={() => resetHomeSearchState()}
            // onClick={(e) => homeFilterHandler(e)}
            onClick={(e) => searchHandler(e)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;Search
          </Button>
        </Col>
      </Row>
    </>
  );
}
