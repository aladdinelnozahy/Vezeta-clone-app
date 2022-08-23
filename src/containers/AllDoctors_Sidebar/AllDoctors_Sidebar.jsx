import React from 'react';
import './AllDoctors_Sidebar.css';
export default function AllDoctors_Sidebar() {
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
                    value=""
                    id="professor"
                  />
                  <label className="form-check-label fs-12" htmlFor="professor">
                    Professor
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value=""
                    id="lecturer"
                  />
                  <label className="form-check-label  fs-12" htmlFor="lecturer">
                    Lecturer
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value=""
                    id="consultant"
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
                    value=""
                    id="specialist"
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
                    value=""
                    id="professor"
                  />
                  <label
                    className="form-check-label  fs-12"
                    htmlFor="professor"
                  >
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value=""
                    id="lecturer"
                  />
                  <label className="form-check-label  fs-12" htmlFor="lecturer">
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
                    value=""
                    id="any-day"
                  />
                  <label className="form-check-label  fs-12" htmlFor="any-day">
                    Any Day
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value=""
                    id="today"
                  />
                  <label className="form-check-label  fs-12" htmlFor="today">
                    Today
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value=""
                    id="consultant"
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
                    value=""
                    id="tomorrow"
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
              <div className="accordion-body bg-light text-grey fs-12 fw-semibold text-capitalize">
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="radio"
                    name="flexRadioDefault"
                    id="any"
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
                    value=""
                    id="hospital"
                  />
                  <label className="form-check-label  fs-12" htmlFor="hospital">
                    Hospital
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input  fs-12"
                    type="checkbox"
                    value=""
                    id="clinic"
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
