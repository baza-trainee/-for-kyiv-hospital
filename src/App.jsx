import Header from 'containers/Header';
import Goal from 'containers/Goal';
import Thank from './containers/Thank-Modal';
import { useThank } from './hooks/ThankContext';
import About from 'containers/About';

export const App = () => {
  const { isShowThank } = useThank();
  console.log(isShowThank);
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Goal />
        <About />
        {isShowThank ? <Thank /> : null}
      </div>
    </>
  );
};
