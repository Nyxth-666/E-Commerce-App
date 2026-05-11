import React from 'react';

export default function TopPickProduct() {
  const topSectionStyle = {
    display: 'flex',
    gap: '32px',
    width: '100%',
    alignItems: 'center',
    flexWrap: 'nowrap'
  };

  const leftStyle = {
    flex: '1 1 420px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '0',
    paddingLeft: '24px'
  };

  const featuredLabelStyle = {
    color: '#d9534f',
    fontSize: '0.85rem',
    fontWeight: '700',
    marginBottom: '12px'
  };

  const headingStyle = {
    fontSize: '2.8rem',
    margin: '0',
    color: '#222',
    lineHeight: '1.1',
    fontWeight: '800'
  };

  const paragraphStyle = {
    color: '#666',
    fontSize: '0.95rem',
    marginTop: '16px',
    lineHeight: '1.5'
  };

  const buttonStyle = {
    marginTop: '24px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '14px 26px',
    borderRadius: '12px',
    width: 'fit-content',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '0.95rem'
  };

  const productCardStyle = {
    flex: '3 1 480px',
    minWidth: '0',
    backgroundColor: '#ece9ff',
    borderRadius: '22px',
    padding: '42px 36px 42px 42px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    position: 'relative',
    overflow: 'hidden',
    gap: '24px'
  };

  const topPickStyle = {
    backgroundColor: 'transparent',
    color: '#d9534f',
    fontSize: '0.85rem',
    fontWeight: '700',
    padding: '7px 0',
    borderRadius: '22px',
    width: 'fit-content',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const topPickDotStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: '#d9534f',
    borderRadius: '50%',
    display: 'inline-block'
  };

  const productTitleStyle = {
    fontSize: '2.9rem',
    fontWeight: '800',
    lineHeight: '1.1',
    margin: '0',
    color: '#222'
  };

  const ratingStyle = {
    marginTop: '18px',
    color: '#f4b400',
    fontSize: '1.15rem'
  };

  const reviewStyle = {
    color: '#777',
    fontSize: '1rem',
    marginLeft: '10px'
  };

  const priceStyle = {
    color: '#e04848',
    fontSize: '2.4rem',
    fontWeight: '800',
    marginTop: '12px'
  };

  const viewStyle = {
    marginTop: '18px',
    color: '#e04848',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '1rem'
  };

  const contentStyle = {
    flex: '1 1 52%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: '2',
    minWidth: '0',
    paddingRight: '12px'
  };

  const imageWrapStyle = {
    flex: '1 1 48%',
    minWidth: '280px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const mouseImageStyle = {
    width: '200%',
    maxWidth: '500px',
    objectFit: 'contain',
    position: 'absolute',
    top: '90px',
    zIndex: '2'
  };

  const ellipseStyle = {
    position: 'absolute',
    width: '100%',
    maxWidth: '800px',
    height: '90px',
    backgroundColor: '#c8b8ff',
    borderRadius: '50%',
    bottom: '10px',
    zIndex: '1'
  };

  return (
    <div style={topSectionStyle}>
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

      <div style={productCardStyle}>
        <div style={contentStyle}>
          <div style={topPickStyle}>
            <span style={topPickDotStyle}></span>
            Top Pick
          </div>

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

        <div style={imageWrapStyle}>
          <div style={ellipseStyle}></div>

          <img
            src="https://sony.scene7.com/is/image/sonyglobalsolutions/MSE-G500_Product_intro_03_orange_M?$productIntroPlatemobile$&fmt=png-alpha"
            alt="mouse"
            style={mouseImageStyle}
          />
        </div>
      </div>
    </div>
  );
}
