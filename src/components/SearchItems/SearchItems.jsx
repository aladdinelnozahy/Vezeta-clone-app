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
import { t } from 'i18next';

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
    specialty,
    setSpecialty,
    city,
    setCity,
    doctorName,
    setDoctorName,
    filter,
  } = useContext(FilterContext);
  const history = useHistory();

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


  const searchHandler = () => {

    history.push('/all-doctors');
  };

  return (
    <>
      <Row className="g-0 col-12 border-rounded-4">
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label={t('selectspeciality')}
            className="fs-14 fw-semibold"
          >
            <Form.Select
              aria-label="Floating label select example"
              className="rounded-0  rounded-start text-normal-anchor fs-6 fw-bold"
              data_attribute="specialty"
              value={specialty}
              onChange={(event) => selectHandler(event)}
            >
              <option value="">
                {t('homesearchchoose')}

                </option>

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
            label={t('citysearchhome')}

            className="fs-14 fw-semibold"
          >
            <Form.Select
              aria-label="Floating label select example"
              className="rounded-0 text-normal-anchor fs-6 fw-bold"
              data_attribute="city"
              onChange={(event) => selectHandler(event)}
              value={city}
            >
              <option value="">{t('homesearchchoosecity')}</option>
              {location.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              }
              )}
            </Form.Select>
          </FloatingLabel>
        </Col>

        <Col md>
          <FloatingLabel
            controlId="floatingPassword"
            label={t('orsearchname')}
            className="fs-14 fw-semibold"
          >
            <Form.Control
              type="text"
              placeholder={t('searchdocname')}
              className="rounded-0 text-normal-anchor text-start fs-6 fw-bold"
              value={t('searchdocname')}
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

            onClick={(e) => searchHandler(e)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {t('homesearchbutton')}

          </Button>
        </Col>
      </Row>
    </>
  );
}
