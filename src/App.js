import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LicenseValidation from './components/LicenseValidation/LicenseValidation';
import CompanySelection from './components/CompanySelection/CompanySelection';
import CompanyLogin from './components/CompanyLogin/CompanyLogin';
import CompanyProfile from './components/CompanyProfile/CompanyProfile';

// Import SCSS
import './components/CompanyDashboard/assets/scss/themes.scss'; 

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// Fake Backend 
import fakeBackend from "./components/CompanyDashboard/helpers/AuthType/fakeBackend";


// Activating fake backend
fakeBackend();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LicenseValidation />} />
          <Route path="/CompanySelection" element={<CompanySelection />} />
          <Route path="/CompanyLogin/:companyId" element={<CompanyLogin />} />
          <Route path="/BlankPage" element={<CompanyProfile />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
