import React from 'react';
import { Header } from '../../components';
import { AboutDoctor_Main } from '../../containers';
import './AboutDoctor.css';

export default function AboutDoctor() {
  return (
    <>
      <div className=" bg-color-porcelain d-none d-md-block ">
        <Header />
      </div>
      <div className=" bg-mercury">
        <AboutDoctor_Main />
      </div>
    </>
  );
}
