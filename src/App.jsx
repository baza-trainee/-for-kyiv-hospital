import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from 'react-router-dom';
import Header from 'containers/Header';
import Goal from 'containers/Goal';
import Thank from './containers/Thank-Modal';
import { useThank } from './hooks/ThankContext';
import About from 'containers/About';
import ErrorPage from 'containers/ErrorPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import Needs from 'containers/Needs';

export const App = () => {
  const { isShowThank } = useThank();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Goal />
              <About />
              <Needs />
              {isShowThank ? <Thank /> : null}
              <ScrollToTopButton />
            </>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Outlet />
    </Router>
  );
};
