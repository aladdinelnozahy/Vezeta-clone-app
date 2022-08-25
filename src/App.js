import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar_c, Footer } from './components';
import { Home, AllDoctors, AboutDoctor } from './pages';
import './App.css';
import Login from './pages/Login/login';
import SignUp from './pages/SignUp/signup';
import ChangePass from './components/ChangePass/ChangePass';
import UserProfile from './components/UserProfile/userprofile';
import FilterContextProvider from './contexts/AllDoctors_Filter.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar_c />
        <FilterContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Home" exact component={Home} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={SignUp} />
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/UserProfile" exact component={UserProfile} />

            <Route exact path="/changepassword" component={ChangePass} />

            <Route path="/all-doctors" exact component={AllDoctors} />
            <Route path="/doctor/:id" exact component={AboutDoctor} />
            {/* <Route path="/doctor" exact component={AboutDoctor} /> */}
          </Switch>
        </FilterContextProvider>
        <Footer />
      </Router>
      {/* <Navbar1 />
      <CarouselFadeExample /> */}
    </>
  );
}

export default App;
