import Header from 'containers/Header';
import Goal from 'containers/Goal';

export const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <p>fundraising for a military hospital</p>
        <Goal />
      </div>
    </>
  );
};
