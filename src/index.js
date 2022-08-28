import React, { Suspense } from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({

    supportedLngs: ['ar', 'en'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'localStorage', 'htmlTag', 'cookie', 'subdomain'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/assets/locals/{{lng}}/translation.json',
    }

  });
const loadingMarkup = (
  <div className='py-4 text-center'>
    <h2>Loading..</h2>
  </div>
)
// append app to dom
const root = createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>

);