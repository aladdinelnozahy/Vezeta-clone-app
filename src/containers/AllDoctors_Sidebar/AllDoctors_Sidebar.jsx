import React, { useState, useContext, useEffect } from 'react';
import { FilterContext } from '../../contexts/AllDoctors_Filter';
import './AllDoctors_Sidebar.css';
export default function AllDoctors_Sidebar() {
  const {
    gender,
    setGender,
    setExamination,
    entity,
    setEntity,
    availability,
    setAvailability,
    title,
    setTitle,
    filter,
  } = useContext(FilterContext);
  const [filterQuery, setFilterQuery] = useState([]);

  const shoot = (e) => {
    const attribute = e.target.attributes.data_attribute.nodeValue;
    const value = e.target.value;
    console.log(value);

    if (attribute == 'examination') {
      console.log('value is', value);
      setExamination(value);
    } else if (attribute == 'title') {
      // set title value
      let checkedValue = e.target.checked;
      let newTitle = [...title]; // copying the old datas array
      let ele = newTitle.findIndex((v) => v['name'] === value);
      newTitle[ele]['value'] = checkedValue; // replace e.target.value with whatever you want to change it to
      setTitle(newTitle);
    } else if (attribute == 'entity') {
      // set entity value
      let checkedValue = e.target.checked;
      let newEntity = [...entity]; // copying the old datas array
      let ele = newEntity.findIndex((v) => v['name'] === value);
      newEntity[ele]['value'] = checkedValue; // replace e.target.value with whatever you want to change it to
      setEntity(newEntity);
    } else if (attribute == 'availability') {
      // set availability value

      let checkedValue = e.target.checked;
      let newAvailability = [...availability]; // copying the old datas array
      let ele = newAvailability.findIndex((v) => v['name'] === value);
      newAvailability[ele]['value'] = checkedValue; // replace e.target.value with whatever you want to change it to
      setAvailability(newAvailability);
    } else if (attribute == 'gender') {
      // set gender value

      let checkedValue = e.target.checked;
      let newGender = [...gender]; // copying the old datas array
      let ele = newGender.findIndex((v) => v['name'] === value);
      newGender[ele]['value'] = checkedValue; // replace e.target.value with whatever you want to change it to
      setGender(newGender);
    }
  };

  useEffect(() => {
    console.log('render filter', filter);
  }, [filter]);
  return (
    <>
      <div className="col-12 col-lg-2 rounded-4  d-none d-lg-block">
        {/* filters */}
        <div className="">
          <p className=" bg-primary text-light ps-4 py-2 rounded-top-4 fs-14 fw-semibold user-select-none">
            <i className="fa-solid fa-filter me-2"></i> Filters
          </p>
        </div>
        <div className="accordion  user-select-none" id="accordionExample">
          <div className="accordion-item border-bottom-grey item-hover">
            <p
              className="accordion-header bg-light text-primary px-4 py-4 accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-title"
              aria-expanded="true"
              aria-controls="collapse-title"
              id="title"
            >
              <i className="fa-solid fa-graduation-cap me-2 pb-1 border-bottom border-2 border-danger float-start"></i>
              Title
            </p>
            <div
              id="collapse-title"
              className="accordion-collapse collapse"
              aria-labelledby="title"
              data-bs-parent="#accordionTitle"
            >
              <div className="accordion-body bg-light text-grey fw-semibold text-capitalize">
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="professor"
                    id="professor"
                    data_attribute="title"
                    onChange={(event) => shoot(event)}
                    // onChange={(event) => shoot(event)}
                  />
                  <label className="form-check-label fs-12" htmlFor="professor">
                    Professor
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="lecturer"
                    id="lecturer"
                    data_attribute="title"
                    onChange={(event) => shoot(event)}
                  />
                  <label className="form-check-label  fs-12" htmlFor="lecturer">
                    Lecturer
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="consultant"
                    id="consultant"
                    data_attribute="title"
                    onChange={(event) => shoot(event)}
                  />
                  <label
                    className="form-check-label  fs-12"
                    htmlFor="consultant"
                  >
                    Consultant
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="specialist"
                    id="specialist"
                    data_attribute="title"
                    onChange={(event) => shoot(event)}
                  />
                  <label
                    className="form-check-label  fs-12"
                    htmlFor="specialist"
                  >
                    Specialist
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item border-bottom-grey item-hover">
            <p
              className="accordion-header bg-light text-primary px-4 py-4  accordion-button  collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-gender"
              aria-expanded="false"
              aria-controls="collapse-gender"
              id="gender"
            >
              <i className="fa-solid fa-venus-mars me-2 pb-1 border-bottom border-2 border-danger float-start"></i>
              Gender
            </p>
            <div
              id="collapse-gender"
              className="accordion-collapse collapse"
              aria-labelledby="gender"
              data-bs-parent="#accordionTitle"
            >
              <div className="accordion-body bg-light text-grey fs-12 fw-semibold text-capitalize">
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="female"
                    id="female"
                    data_attribute="gender"
                    onChange={(event) => shoot(event)}
                  />
                  <label className="form-check-label  fs-12" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="male"
                    data_attribute="gender"
                    id="male"
                    onChange={(event) => shoot(event)}
                  />
                  <label className="form-check-label  fs-12" htmlFor="male">
                    Male
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item border-bottom-grey item-hover">
            <p
              className="accordion-header bg-light text-primary px-4 py-4  accordion-button  collapsed "
              data-bs-toggle="collapse"
              data-bs-target="#collapse-availability"
              aria-expanded="false"
              aria-controls="collapse-availability"
              id="availability"
            >
              <i className="fa-solid fa-calendar-days me-2 pb-1 border-bottom border-2 border-danger float-start"></i>
              Availability
            </p>
            <div
              id="collapse-availability"
              className="accordion-collapse collapse"
              aria-labelledby="availability"
              data-bs-parent="#accordionTitle"
            >
              <div className="accordion-body bg-light text-grey fs-12 fw-semibold text-capitalize">
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="any"
                    id="any-day"
                    data_attribute="availability"
                    onChange={(event) => shoot(event)}
                  />
                  <label className="form-check-label  fs-12" htmlFor="any-day">
                    Any Day
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="today"
                    id="today"
                    data_attribute="availability"
                    onChange={(event) => shoot(event)}
                  />
                  <label className="form-check-label  fs-12" htmlFor="today">
                    Today
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="tomorrow"
                    id="tomorrow"
                    data_attribute="availability"
                    onChange={(event) => shoot(event)}
                  />
                  <label className="form-check-label  fs-12" htmlFor="tomorrow">
                    Tomorrow
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item border-bottom-grey item-hover">
            <p
              className="accordion-header bg-light text-primary px-4 py-4   accordion-button  collapsed "
              data-bs-toggle="collapse"
              data-bs-target="#collapse-examination"
              aria-expanded="false"
              aria-controls="collapse-examination"
              id="examination"
            >
              <i className="fa-solid fa-money-bill me-2 pb-1 border-bottom border-2 border-danger float-start"></i>
              Examination Fee
            </p>
            <div
              id="collapse-examination"
              className="accordion-collapse collapse"
              aria-labelledby="examination"
              data-bs-parent="#accordionTitle"
            >
              <div
                className="accordion-body bg-light text-grey fs-12 fw-semibold text-capitalize"
                onChange={(event) => shoot(event)}
              >
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="radio"
                    name="flexRadioDefault"
                    id="any"
                    value="any"
                    data_attribute="examination"
                  />
                  <label className="form-check-label  fs-12" htmlFor="any">
                    Any
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="radio"
                    name="flexRadioDefault"
                    id="less-50"
                    value="less-50"
                    data_attribute="examination"
                  />
                  <label className="form-check-label  fs-12" htmlFor="less-50">
                    Less than 50
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="radio"
                    name="flexRadioDefault"
                    id="50-100"
                    value="50-100"
                    data_attribute="examination"
                  />
                  <label className="form-check-label  fs-12" htmlFor="50-100">
                    From 50 to 100
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="radio"
                    name="flexRadioDefault"
                    id="100-200"
                    value="100-200"
                    data_attribute="examination"
                  />
                  <label className="form-check-label  fs-12" htmlFor="100-200">
                    From 100 to 200
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="radio"
                    name="flexRadioDefault"
                    id="200-300"
                    value="200-300"
                    data_attribute="examination"
                  />
                  <label className="form-check-label  fs-12" htmlFor="200-300">
                    From 200 to 300
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="radio"
                    name="flexRadioDefault"
                    id="greater-300"
                    value="greater-300"
                    data_attribute="examination"
                  />
                  <label
                    className="form-check-label  fs-12"
                    htmlFor="greater-300"
                  >
                    Greater than 300
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item item-hover">
            <p
              className="accordion-header bg-light text-primary px-4 py-4  accordion-button  collapsed "
              data-bs-toggle="collapse"
              data-bs-target="#collapse-entity"
              aria-expanded="false"
              aria-controls="collapse-entity"
              id="entity"
            >
              <i className="fa-solid fa-stethoscope me-2 pb-1 border-bottom border-2 border-danger float-start"></i>
              Entity
            </p>
            <div
              id="collapse-entity"
              className="accordion-collapse collapse"
              aria-labelledby="entity"
              data-bs-parent="#accordionTitle"
            >
              <div className="accordion-body bg-light text-grey fs-12 fw-semibold text-capitalize">
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="hospital"
                    id="hospital"
                    data_attribute="entity"
                    onChange={(event) => shoot(event)}
                  />
                  <label className="form-check-label  fs-12" htmlFor="hospital">
                    Hospital
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value="clinic"
                    id="clinic"
                    data_attribute="entity"
                    onChange={(event) => shoot(event)}
                  />
                  <label className="form-check-label  fs-12" htmlFor="clinic">
                    Clinic
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
