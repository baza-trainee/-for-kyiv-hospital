import Hero from './Hero';

const Header = () => {
  return (
    <>
      <div className="container">
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,

            width: '100%',
            height: 84,

            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        ></div>
      </div>
      <Hero />
    </>
  );
};

export default Header;
