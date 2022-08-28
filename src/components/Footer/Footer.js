import React, { useEffect } from 'react';
import './Footer.css';
import Links from './links';

import { useTranslation } from "react-i18next";
import i18next from 'i18next';

const languages=[
  {
    code:'ar',
    name: 'العربية',
    country_code:'sa',
    dir:"rtl"
  },
  {
    code:'en',
    name: 'English',
    country_code:'gb'
  }
  

]
const Footer = () => {
  const currentLanguageCode=localStorage.getItem('i18nextLng')||'en'
  const currentLanguage=languages.find((l)=> l.code == currentLanguageCode)
  const { t } = useTranslation()

  useEffect(()=>{
    console.log(currentLanguage)
    document.body.dir= currentLanguage.dir||'ltr'
  },[currentLanguage, t])
  return (
    <footer className="footer">
      <div className="container-fluid px-lg-5">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="row">
              <div className="col-md-3 mb-md-0 mb-4">
                <img className='logo' src={require('../Images/whitelogowithdotcom.jpg')} alt='logo' />
                <Links link="https://www.vezeeta.com/en/Generic/AboutUs" name={t('footer_aboutus')} />
                <Links link="https://www.vezeeta.com/en/Generic/OurTeam" name={t('footer_ourteam')} />
                <Links link="https://careers.vezeeta.com/" name={t('footer_carrers')} />
                <Links link="https://www.vezeeta.com/en/Generic/News" name={t('footer_press')} />

              </div>
              <div className="col-md-12 col-lg-9">
                <div className="row">
                  <div className="col-md-3 mb-md-0 mb-4">
                    <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                    {t('footer_searchby')} 
                                        </p>											
                    <ul className="list-unstyled">
                      <Links link="https://www.vezeeta.com/en/specialties" name={t('footer_speciality')}  />
                      <Links link="https://www.vezeeta.com/en/areas" name={t('footer_area')} />
                      <Links link="https://www.vezeeta.com/en/insurances" name={t('footer_insurance')} />
                      <Links link="https://www.vezeeta.com/en/hospitals" name={t('footer_hospital')} />
                      <Links link="https://www.vezeeta.com/en/clinics" name={t('footer_center')} />
                    </ul>
                  </div>
                  <div className="col-md-3 mb-md-0 mb-4">
                    <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                    {t('footer_areyoudoctor')}
                    </p>
                    <ul className="list-unstyled">
                      <Links link="https://doctors.vezeeta.com/" name={t('footer_joinvezeeta')} />
                    </ul>
                  </div>
                  <div className="col-md-3 mb-md-0 mb-4">
                    <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                    {t('footer_needhelp')}
                    </p>
                    <ul className="list-unstyled">
                      <Links link="https://www.vezeeta.com/en/Generic/ContactUs" name={t('footer_contact')} />
                      <Links link="https://www.vezeeta.com/en/termsofuse" name={t('footer_terms')} />
                      <Links link="https://www.vezeeta.com/en/Generic/PrivacyPolicy" name={t('footer_policy')} />
                      <Links link="https://www.vezeeta.com/en/Generic/DoctorsPrivacyPolicy" name={t('footer_docprivacy')} />
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <div className='col-12'>
                      <div className="container p-2">
                        <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn google-btn" role="button">
                          <span className="market-button-subtitle">{t('footer_downloadonthe')}</span>
                          <span className="market-button-title">{t('footer_googleplay')}</span>
                        </a>
                      </div>
                      <div className="container p-2 ">
                        <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn apple-btn" role="button">
                          <span className="market-button-subtitle">{t('footer_downloadonthe')}</span>
                          <span className="market-button-title">{t('footer_appstore')}</span>
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
  );

}
export default Footer;