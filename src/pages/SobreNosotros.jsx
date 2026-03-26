import { Link } from 'react-router-dom';

const SobreNosotros = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <Link to="/" className="back-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Volver
        </Link>

        <div className="about-card">
          <div className="about-header">
            <h1 className="about-title">Vineria Bar</h1>
            <div className="title-decoration"></div>
          </div>

          <div className="about-content">
            <p className="about-text">
              Bienvenidos a <strong>Vineria Bar</strong>, tu lugar de encuentro para disfrutar 
              de los mejores vinos, empanadas artesanales y pizzas elaboradas con pasión.
            </p>

            <p className="about-text">
              Desde nuestros inicios, nos hemos dedicado a ofrecer una experiencia gastronómica 
              única, combinando tradición y calidad en cada plato. Nuestras empanadas son 
              preparadas siguiendo recetas tradicionales, con masa casera y rellenos 
              seleccionados.
            </p>

            <p className="about-text">
              Contamos con una cuidadosa selección de vinos de las mejores bodegas, 
              acompañados de un ambiente cálido y acogedor que te hará sentir como en casa.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🍷</div>
                <h3>Vinos Premium</h3>
                <p>Selección de las mejores bodegas</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🥟</div>
                <h3>Empanadas Artesanales</h3>
                <p>Recetas tradicionales</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🍕</div>
                <h3>Pizzas Únicas</h3>
                <p>Masa fina y crocante</p>
              </div>
            </div>

            <p className="about-text highlight">
              <strong>Nuestro compromiso:</strong> Brindarte una experiencia inolvidable 
              con productos de la más alta calidad y un servicio excepcional.
            </p>
          </div>

          <div className="about-footer">
            <p>¡Te esperamos!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SobreNosotros;