import Goal from 'containers/Goal';
import Thank from './containers/Thank-Modal';
import { useThank } from './hooks/ThankContext';

export const App = () => {
  const { isShowThank } = useThank();
  console.log(isShowThank);
  return (
    <>
      <div className="container mx-auto">
        <Goal />
        {isShowThank ? <Thank /> : null}
      </div>
    </>
  );
};
