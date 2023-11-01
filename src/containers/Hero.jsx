const Hero = () => {
  return (
    <section style={{ width: '100%', background: '#003948' }}>
      <div className="overlay">
        <div className="container">
          <div style={{ width: 648 }}>
            <h1
              style={{
                fontFamily: 'Mona Lisa engravedC',
                fontSize: 88,
                fontWeight: 400,
                lineHeight: 'calc(88 / 88)',
                letterSpacing: '0em',
                color: 'white',
              }}
            >
              Зроби внесок у Перемогу!
            </h1>
            <p
              style={{
                marginTop: 24,
                fontFamily: 'Montserrat',
                fontSize: 32,
                fontWeight: 400,
                lineHeight: 'cacl(32 / 40)',
                letterSpacing: '0em',
                color: 'white',
              }}
              className="text"
            >
              Медики Головного військового клінічного госпіталю мужньо боряться
              за життя наших захисників, але без твоєї допомоги вони безкрилі.
            </p>
            <button
              style={{
                display: 'inline-block',
                width: 312,
                height: 88,
                padding: 16,

                marginTop: 42,

                backgroundColor: 'rgba(197, 223, 240, 1)',
                color: 'rgba(16, 11, 7, 1)',
                fontFamily: 'Mona Lisa engravedC',
                fontSize: 40,
                lineHeight: 'calc(40 / 48)',
                borderRadius: 16,
              }}
            >
              Зробити донат
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
