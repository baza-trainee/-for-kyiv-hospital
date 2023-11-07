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

export const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <p>fundraising for a military hospital</p>
      </div>
    </>
  );
};
