
import React from 'react';
import MoreFeaturedProducts from './components/ui/MoreFeaturedProducts';
import Footer from './components/layouts/Footer';
const FeatureItem = ({ icon, title, desc, showDivider }) => {
  const itemStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px 25px',
    flex: '1',
    minWidth: 'fit-content',
    position: 'relative',
    justifyContent: 'center'
  };

  const iconCircleStyle = {
    backgroundColor: '#d9534f',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15px',
    color: '#fff',
    fontSize: '1.2rem',
    flexShrink: 0,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  };

  const titleStyle = {
    margin: '0',
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#333',
    whiteSpace: 'nowrap'
  };

  const descStyle = {
    margin: '0',
    fontSize: '0.8rem',
    color: '#777',
    lineHeight: '1.3'
  };

  const dividerStyle = {
    position: 'absolute',
    right: '0',
    top: '25%',
    height: '50%',
    width: '1px',
    backgroundColor: '#eee'
  };

  return (
    <div style={itemStyle}>
      <div style={iconCircleStyle}>{icon}</div>

      <div style={textContainerStyle}>
        <h4 style={titleStyle}>{title}</h4>
        <p style={descStyle}>{desc}</p>
      </div>

      {showDivider && <div style={dividerStyle} />}
    </div>
  );
};

function App() {

  // ===== MAIN CONTAINER =====
  const pageStyle = {
    minHeight: '100vh',
    background: '#7c63ff',
    padding: '60px 20px',
    fontFamily: 'Arial, sans-serif'
  };

  const mainBoxStyle = {
    backgroundColor: '#fff',
    maxWidth: '1200px',
    margin: '0 auto',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
  };

  // ===== TOP SECTION =====
  const topSectionStyle = {
    display: 'flex',
    gap: '25px',
    marginBottom: '400px'
  };

  // LEFT SIDE
  const leftStyle = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const featuredLabelStyle = {
    color: '#d9534f',
    fontSize: '0.75rem',
    fontWeight: '700',
    marginBottom: '10px'
  };

  const headingStyle = {
    fontSize: '3rem',
    margin: '0',
    color: '#222',
    lineHeight: '1.1',
    fontWeight: '800'
  };

  const paragraphStyle = {
    color: '#666',
    fontSize: '0.95rem',
    marginTop: '15px',
    lineHeight: '1.5'
  };

  const buttonStyle = {
    marginTop: '25px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '14px 22px',
    borderRadius: '8px',
    width: 'fit-content',
    cursor: 'pointer',
    fontWeight: '600'
  };

  // RIGHT SIDE
  const productCardStyle = {
    width: '70%',
    backgroundColor: '#ece9ff',
    borderRadius: '18px',
    padding: '35px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const topPickStyle = {
    backgroundColor: '#fff',
    color: '#d9534f',
    fontSize: '0.7rem',
    fontWeight: '700',
    padding: '6px 12px',
    borderRadius: '20px',
    width: 'fit-content',
    marginBottom: '18px'
  };

  const productTitleStyle = {
    fontSize: '2.3rem',
    fontWeight: '800',
    lineHeight: '1.1',
    margin: '0',
    color: '#222'
  };

  const ratingStyle = {
    marginTop: '15px',
    color: '#f4b400',
    fontSize: '1rem'
  };

  const reviewStyle = {
    color: '#777',
    fontSize: '0.9rem',
    marginLeft: '8px'
  };

  const priceStyle = {
    color: '#e04848',
    fontSize: '2rem',
    fontWeight: '800',
    marginTop: '10px'
  };

  const viewStyle = {
    marginTop: '15px',
    color: '#e04848',
    fontWeight: '700',
    cursor: 'pointer'
  };

  const mouseImageStyle = {
  width: '350px',
  objectFit: 'contain',
  position: 'absolute',
  right: '30px',
  top: '80px',
  zIndex: '2'
  };

  const ellipseStyle = {
  position: 'absolute',
  width: '300px',
  height: '80px',
  backgroundColor: '#c8b8ff',
  borderRadius: '50%',
  bottom: '55px',
  right: '55px',
  zIndex: '1'
  };

  return (
    <div style={pageStyle}>
      <div style={mainBoxStyle}>

        {/* ===== TOP SECTION ===== */}
        <div style={topSectionStyle}>

          {/* LEFT */}
          <div style={leftStyle}>
            <span style={featuredLabelStyle}>★ Featured</span>

            <h1 style={headingStyle}>
              Featured Products
            </h1>

            <p style={paragraphStyle}>
              Hand picked items we think you'll love.
              <br />
              Top quality, great value.
            </p>

            <button style={buttonStyle}>
              Shop All Products
            </button>
          </div>

          {/* RIGHT */}
          <div style={productCardStyle}>

            <div>
              <div style={topPickStyle}>🔥 Top Pick</div>

              <h1 style={productTitleStyle}>
                INZONE MOUSE-A
                <br />
                Gaming Mouse
              </h1>

              <div style={ratingStyle}>
                ★★★★★
                <span style={reviewStyle}>(1.5k)</span>
              </div>

              <div style={priceStyle}>₱580</div>

              <div style={viewStyle}>
                View Product →
              </div>
            </div>

            <div style={ellipseStyle}></div>

            <img
              src="https://sony.scene7.com/is/image/sonyglobalsolutions/MSE-G500_Product_intro_03_orange_M?$productIntroPlatemobile$&fmt=png-alpha"
              alt="mouse"
              style={mouseImageStyle}
            />
          </div>
        </div>

        <MoreFeaturedProducts />
        <Footer/>

      </div>
    </div>
  );
}

export default App;
// =======
// import HomePage from "./pages/HomePage";
// import ContactUs from "./pages/ContactPage";

// function App() {
//   return <></>;
// }

// export default App;
// >>>>>>> main
