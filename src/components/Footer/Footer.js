import React from 'react';
import './Footer.css';
// import { CDBFooter, CDBBox } from 'cdbreact';

import Links from './links';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid px-lg-5">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="row">
              <div className="col-md-3 mb-md-0 mb-4">
                <img className='logo' src={require('../Images/whitelogowithdotcom.jpg')} alt='logo' />
                <Links link="https://www.vezeeta.com/en/Generic/AboutUs" name="About Us" />
                <Links link="https://www.vezeeta.com/en/Generic/OurTeam" name="Our Team" />
                <Links link="https://careers.vezeeta.com/" name="Careers" />
                <Links link="https://www.vezeeta.com/en/Generic/News" name="Press" />

              </div>
              <div className="col-md-12 col-lg-9">
                <div className="row">
                  <div className="col-md-3 mb-md-0 mb-4">
                    <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                      Search By
                    </p>											
                    <ul className="list-unstyled">
                      <Links link="https://www.vezeeta.com/en/specialties" name="Speciality" />
                      <Links link="https://www.vezeeta.com/en/areas" name="Area" />
                      <Links link="https://www.vezeeta.com/en/insurances" name="Insurance" />
                      <Links link="https://www.vezeeta.com/en/hospitals" name="Hospital" />
                      <Links link="https://www.vezeeta.com/en/clinics" name="Center" />
                    </ul>
                  </div>
                  <div className="col-md-3 mb-md-0 mb-4">
                    <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                      Are You A Doctor ?
                    </p>
                    <ul className="list-unstyled">
                      <Links link="https://doctors.vezeeta.com/" name="Join Vezeeta Doctors" />
                    </ul>
                  </div>
                  <div className="col-md-3 mb-md-0 mb-4">
                    <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                      Need Help?
                    </p>
                    <ul className="list-unstyled">
                      <Links link="https://www.vezeeta.com/en/Generic/ContactUs" name="Contact Us" />
                      <Links link="https://www.vezeeta.com/en/termsofuse" name="Terms Of Use" />
                      <Links link="https://www.vezeeta.com/en/Generic/PrivacyPolicy" name="Privacy Policy" />
                      <Links link="https://www.vezeeta.com/en/Generic/DoctorsPrivacyPolicy" name="Doctors Privacy Policy" />
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <div className='col-12'>
                      <div className="container p-2">

                        <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn google-btn" role="button">
                          <span className="market-button-subtitle">Download on the</span>
                          <span className="market-button-title">Google Play</span>
                        </a>
                      </div>
                      <div className="container p-2 ">
                        <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn apple-btn" role="button">
                          <span className="market-button-subtitle">Download on the</span>
                          <span className="market-button-title">App Store</span>
                        </a>
                      </div>

                      <div className=" row col p-2">
                        <div className='col-3 '>
                          <a href="https://www.facebook.com/martydevelopment/" target="_blank">
                            <i className="aaaa fab fa-facebook" tabIndex="0"></i>
                          </a>
                        </div>

                        <div className='col-3 '>
                          <a href="https://www.instagram.com/marty.development/" target="_blank">
                            <i className="aaaa fab fa-instagram" tabIndex="0"></i>
                          </a>
                        </div>

                        <div className='col-3 '>
                          <a href="#">
                            <i className="aaaa fab fa-twitter" tabIndex="0" target="_blank"></i>
                          </a>
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
    </footer>
    //     <div className='footer  '>
    // aaa
    //       <CDBFooter className="">

    //         <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
    //           <CDBBox display="flex" justifyContent="between" className="flex-wrap">
    //             <CDBBox>
    //               <img className='logo' src={require('../Images/whitelogowithdotcom.jpg')} alt='logo' />
    //               <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', color: 'white' }}>
    //                 <Links link="https://www.vezeeta.com/en/Generic/AboutUs" name="About Us" />
    //                 <Links link="https://www.vezeeta.com/en/Generic/OurTeam" name="Our Team" />
    //                 <Links link="https://careers.vezeeta.com/" name="Careers" />
    //                 <Links link="https://www.vezeeta.com/en/Generic/News" name="Press" />

    //               </CDBBox>
    //             </CDBBox>

    //             <CDBBox>
    //               <p className="h5 mb-4" style={{ fontWeight: '600' }}>
    //                 Search By
    //               </p>
    //               <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
    //                 <Links link="https://www.vezeeta.com/en/specialties" name="Speciality" />
    //                 <Links link="https://www.vezeeta.com/en/areas" name="Area" />
    //                 <Links link="https://www.vezeeta.com/en/insurances" name="Insurance" />
    //                 <Links link="https://www.vezeeta.com/en/hospitals" name="Hospital" />
    //                 <Links link="https://www.vezeeta.com/en/clinics" name="Center" />
    //               </CDBBox>
    //             </CDBBox>
    //             <CDBBox>
    //               <p className="h5 mb-4" style={{ fontWeight: '600' }}>
    //                 Are You A Doctor ?
    //               </p>
    //               <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
    //                 <Links link="https://doctors.vezeeta.com/" name="Join Vezeeta Doctors" />

    //               </CDBBox>
    //             </CDBBox>
    //             <CDBBox>
    //               <p className="h5 mb-4" style={{ fontWeight: '600' }}>
    //                 Need Help?
    //               </p>
    //               <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
    //                 <Links link="https://www.vezeeta.com/en/Generic/ContactUs" name="Contact Us" />
    //                 <Links link="https://www.vezeeta.com/en/termsofuse" name="Terms Of Use" />
    //                 <Links link="https://www.vezeeta.com/en/Generic/PrivacyPolicy" name="Privacy Policy" />
    //                 <Links link="https://www.vezeeta.com/en/Generic/DoctorsPrivacyPolicy" name="Doctors Privacy Policy" />
    //               </CDBBox>
    //             </CDBBox>
    //             <CDBBox>
    //               <div className="container downbtn">

    //                 <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn google-btn" role="button">
    //                   <span className="market-button-subtitle">Download on the</span>
    //                   <span className="market-button-title">Google Play</span>
    //                 </a>
    //               </div>
    //               <div className="container downbtn">
    //                 <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn apple-btn" role="button">
    //                   <span className="market-button-subtitle">Download on the</span>
    //                   <span className="market-button-title">App Store</span>
    //                 </a>
    //               </div>

    //               <div className="container downbtn">
    //                 <a href="https://www.facebook.com/martydevelopment/" target="_blank">
    //                   <i className="fab fa-facebook" tabIndex="0"></i>
    //                 </a>
    //                 <a href="https://www.instagram.com/marty.development/" target="_blank">
    //                   <i className="fab fa-instagram" tabIndex="0"></i>
    //                 </a>
    //                 <a href="#">
    //                   <i className="fab fa-twitter" tabIndex="0" target="_blank"></i>
    //                 </a>
    //               </div>
    //             </CDBBox>

    //           </CDBBox>
    //         </CDBBox>
    //       </CDBFooter>
    //     </div>


  );

}
export default Footer;