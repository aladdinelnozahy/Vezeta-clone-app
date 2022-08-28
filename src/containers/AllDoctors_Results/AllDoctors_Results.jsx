import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './AllDoctors_Results.css';
import Item from '../../components/Item/Item';
export default function AllDoctors_Results(props) {
  // state for sorting elements
  const [sortItems, setSortItems] = useState([
    'Best Match',
    'Top Rated',
    'Price Low To High',
    'Price High To Low',
    'Less Waiting Time',
  ]);
  // state for current choosing element from sorting list
  const [currentSortItem, setCurrentSortItem] = useState('Best Match');
  // using useState to store doctors result from API
  const [doctors, setDoctors] = useState([]);
  // using useState to general data from API
  const [generalData, setGeneralData] = useState([]);
  // handle choosing element
  const handleSortSelection = (index) => {
    setCurrentSortItem(() => sortItems[index]);
  };

  //  second way to use history object without using props
  // using useHistory Hook to destruct history object
  const history = useHistory();
  // function which firing and redirect to doctor page

  // using useEffect Hook to start using API integration
  // we are using didMount life cycle method which start automatically after rendering
  useEffect(() => {
    axios
      .get('https://vezeeta-data-api.herokuapp.com/user-doctor-search')
      // .get('https://vezeeta-data-api.herokuapp.com/user-doctor-search?page=4')
      .then((res) => {
        // set doctors from API response
        setDoctors(res.data.body);
        setGeneralData(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <div className="col-12 col-lg-9">
        <div className="data  d-flex flex-wrap justify-content-between align-items-center px-md-3 my-3">
          <div className="data--info d-flex justify-content-center align-content-center  d-block order-1 order-md-0">
            <p className="text-dark-silver fs-19 fw-bold my-0 d-none d-md-block">
              All Specialities
            </p>
            <p className="text-grey fs-14 lh-xlg  my-0">
              &nbsp;<span>{generalData.totalDoctors}</span>&nbsp;Doctors
            </p>
          </div>
          <div className="d-block w-50 d-md-none ">
            <button
              type="button"
              className="btn bg-light text-normal-anchor"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fa-solid fa-filter"></i> Filter
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header  bg-light text-normal-anchor">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Filters
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div
                      className="accordion  user-select-none"
                      id="accordionExample"
                    >
                      <div className="accordion-item border-bottom-grey item-hover">
                        <p
                          className="accordion-header bg-light text-primary px-4 py-4 fs-12  accordion-button collapsed"
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
                          <div className="accordion-body bg-light text-grey fs-12 fw-semibold text-capitalize">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="professor"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="professor"
                              >
                                Professor
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="lecturer"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="lecturer"
                              >
                                Lecturer
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="consultant"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="consultant"
                              >
                                Consultant
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="specialist"
                              />
                              <label
                                className="form-check-label"
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
                          className="accordion-header bg-light text-primary px-4 py-4 fs-14  accordion-button  collapsed"
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
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="professor"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="professor"
                              >
                                Professor
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="lecturer"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="lecturer"
                              >
                                Lecturer
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="consultant"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="consultant"
                              >
                                Consultant
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="specialist"
                              />
                              <label
                                className="form-check-label"
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
                          className="accordion-header bg-light text-primary px-4 py-4 fs-14  accordion-button  collapsed "
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
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="any-day"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="any-day"
                              >
                                Any Day
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="today"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="today"
                              >
                                Today
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="consultant"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="consultant"
                              >
                                Consultant
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="tomorrow"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="tomorrow"
                              >
                                Tomorrow
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item border-bottom-grey item-hover">
                        <p
                          className="accordion-header bg-light text-primary px-4 py-4 fs-12  accordion-button  collapsed "
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
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="any"
                              />
                              <label className="form-check-label" htmlFor="any">
                                Any
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="less-50"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="less-50"
                              >
                                Less than 50
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="50-100"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="50-100"
                              >
                                From 50 to 100
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="100-200"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="100-200"
                              >
                                From 100 to 200
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="200-300"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="200-300"
                              >
                                From 200 to 300
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="greater-300"
                              />
                              <label
                                className="form-check-label"
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
                          className="accordion-header bg-light text-primary px-4 py-4 fs-12  accordion-button  collapsed "
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
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="hospital"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="hospital"
                              >
                                Hospital
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="clinic"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="clinic"
                              >
                                Clinic
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="data--sorting d-flex justify-content-center align-items-center">
            <p className="text-grey fs-14  my-0 d-none d-md-block">
              Sorting:&nbsp;&nbsp;
            </p>
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle text-grey"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currentSortItem}
              </button>
              <ol className="dropdown-menu">
                {sortItems.map((sortItem, index) => (
                  <li key={index}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        handleSortSelection(index);
                      }}
                    >
                      {sortItem}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {props.doctorsData.map((doctor, index) => {
          return <Item key={index} data={doctor} history={history} />;
        })}
      </div>
    </>
  );
}
