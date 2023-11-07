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
import ShareModal from './containers/ShareModal';
import { useThank } from './hooks/ThankContext';
import { useShareModal } from './hooks/ShareContext';
import About from 'containers/About';
import ErrorPage from 'containers/ErrorPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import Needs from 'containers/Needs';
import Footer from 'containers/Footer';

export const App = () => {
  const { isShowThank } = useThank();
  const { isShowShareModal } = useShareModal();

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
              {isShowShareModal ? <ShareModal /> : null}
              <ScrollToTopButton />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Outlet />
    </Router>
  );
};
