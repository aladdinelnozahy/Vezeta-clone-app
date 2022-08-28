import * as React from 'react';
// import { useTheme } from "@mui/material/styles";
import './Pharmacy.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

export default function Pharmacy() {
  // const theme = useTheme();
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
  const currentLanguageCode=localStorage.getItem('i18nextLng')||'en'
  const currentLanguage=languages.find((l)=> l.code == currentLanguageCode)
  const { t } = useTranslation()

  useEffect(()=>{
    console.log(currentLanguage)
    document.body.dir= currentLanguage.dir||'ltr'
  },[currentLanguage, t])

  return (
    
    <>
      <Row className="containerSize m-0 p-0">
        <Row>
          <Col lg={1}> </Col>
          <Col lg={10}>
            {/* ///////////fristTEXT////////////// */}
            <Row className="firstPharmacyRow ">
            {t('serviceheader')}
            </Row>
            {/* ///////////////////////// */}
            {/* ///////////secondPharmacy////////////// */}

            <Row className="secondPharmacyRow d-flex justify-content-center mb-4">
              <Row>
                <Col lg={8} className="pt-4 pb-2 ps-4 fs-4 fw-bold">
                {t('pharmacycardhead')}{' '}
                </Col>
              </Row>
              <Row>
                <Col lg={8} className=" pb-3  ps-4">
                {t('pahrmacybody')}
                </Col>
              </Row>
              <Row>
                <Col lg={8} className="pb-4  ps-4">
                  <button className="btn btn-light text-primary fs-6 fw-bold btn-lg">
                  {t('placeorderbutton')}
                  </button>{' '}
                </Col>
              </Row>
            </Row>
            {/* ///////////////////////// */}
            {/* ///////////third////////////// */}

            <Row>
              <Col lg={6} className="secondPharmacyCol ps-0 pe-4">
                {' '}
                {/* ///////////thirdCard1////////////// */}
                <div className="cardMain ">
                  <Card sx={{ display: 'flex' }} className=" mb-5">
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="Images/desktop.jpg"
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography
                          component="div"
                          variant="h6"
                          className="cardCol2 fw-bold"
                        >
                  {t('Teleconsultationhead')}{' '}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          style={{ fontSize: '15px' }}
                        >
                          
                  {t('Teleconsultationbody')}{' '}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          pl: 1,
                          pb: 1,
                        }}
                      >
                        <IconButton
                          aria-label="play/pause"
                          className="mt-0 pt-0"
                        >
                          <span>
                            <a
                              href="#Content"
                              style={{
                                fontSize: '15px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                              }}
                            >
                  {t('bookacall')}                            
                  </a>{' '}
                            <PlayArrowIcon
                              sx={{ height: 20, width: 25, color: 'red' }}
                            />
                          </span>{' '}
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                </div>
                {/* ///////////////////////// */}
              </Col>
              <Col lg={6} className=" ps-0">
                {/* ///////////thirdCard2////////////// */}

                <div className="cardMain ">
                  <Card sx={{ display: 'flex' }} className=" mb-5">
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="Images/desktop2.jpg"
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }} className="p-3">
                        <Typography
                          component="div"
                          variant="h6"
                          className="cardCol2 fw-bold"
                        >
                          {t('homevisit')}{' '}
                        </Typography>
                        <Typography
                          style={{ fontSize: '15px' }}
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          {t('choosespeciality')}
                          {' '}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          pl: 1,
                          pb: 1,
                        }}
                      >
                        <IconButton
                          aria-label="play/pause"
                          className="mt-0 pt-0"
                        >
                          <span>
                            <a
                              href="#Content"
                              style={{
                                fontSize: '15px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                              }}
                            >
                             {t('bookavisit')}
                            </a>{' '}
                            <PlayArrowIcon
                              sx={{ height: 20, width: 25, color: 'red' }}
                            />
                          </span>
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                </div>
                {/* ///////////////////////// */}
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Row>
    </>
  );
}
