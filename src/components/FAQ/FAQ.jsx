import React from 'react';
import './FAQ.css';
export default function FAQ() {
  return (
    <>
      <div className="container-fluid">
        <div className="row col-11 ms-auto me-auto my-5 border border-2 py-5 px-md-5 rounded-4 position-relative">
          <div className="bg-primary rounded-pill py-2 px-4 w-auto position-absolute top-0 start-10 start-md-5  translate-middle-x  translate-middle-y">
            <p className="fs-6 fw-semibold text-light my-0">
              <i className="fa-solid fa-circle-question me-2"></i>FAQs
            </p>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button accordion-button-md text-dark-silver fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How Can I Search and Book Same Day Appointment with the best
                  Doctor?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordion-body-md text-grey fw-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi officia iste nulla, praesentium illo veritatis sequi,
                  beatae exercitationem iure nam voluptatibus. Neque dolor illo,
                  aperiam laudantium assumenda similique consectetur eligendi
                  labore dolore earum tempora ad cum sit natus, asperiores
                  quidem. Nemo, non. Explicabo eaque consectetur, iusto vero
                  ratione beatae. Aspernatur.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button accordion-button-md collapsed  text-dark-silver fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How Can I Find the best Doctor That Accepts My Medical
                  Insurance Plan?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordion-body-md  text-grey fw-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi officia iste nulla, praesentium illo veritatis sequi,
                  beatae exercitationem iure nam voluptatibus. Neque dolor illo,
                  aperiam laudantium assumenda similique consectetur eligendi
                  labore dolore earum tempora ad cum sit natus, asperiores
                  quidem. Nemo, non. Explicabo eaque consectetur, iusto vero
                  ratione beatae. Aspernatur.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button accordion-button-md collapsed  text-dark-silver fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How to Book an Online Appointment with A Doctor?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordion-body-md  text-grey fw-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi officia iste nulla, praesentium illo veritatis sequi,
                  beatae exercitationem iure nam voluptatibus. Neque dolor illo,
                  aperiam laudantium assumenda similique consectetur eligendi
                  labore dolore earum tempora ad cum sit natus, asperiores
                  quidem. Nemo, non. Explicabo eaque consectetur, iusto vero
                  ratione beatae. Aspernatur.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button accordion-button-md collapsed  text-dark-silver fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Can I choose a Doctor based on gender?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordion-body-md  text-grey fw-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi officia iste nulla, praesentium illo veritatis sequi,
                  beatae exercitationem iure nam voluptatibus. Neque dolor illo,
                  aperiam laudantium assumenda similique consectetur eligendi
                  labore dolore earum tempora ad cum sit natus, asperiores
                  quidem. Nemo, non. Explicabo eaque consectetur, iusto vero
                  ratione beatae. Aspernatur.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button accordion-button-md collapsed  text-dark-silver fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How Can I Search for the best Doctor Based On a Higher Rate?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordion-body-md  text-grey fw-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi officia iste nulla, praesentium illo veritatis sequi,
                  beatae exercitationem iure nam voluptatibus. Neque dolor illo,
                  aperiam laudantium assumenda similique consectetur eligendi
                  labore dolore earum tempora ad cum sit natus, asperiores
                  quidem. Nemo, non. Explicabo eaque consectetur, iusto vero
                  ratione beatae. Aspernatur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
