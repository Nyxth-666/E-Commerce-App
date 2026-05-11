import React from 'react'

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

function Footer() {
    // ===== FOOTER =====
  const footerBoxStyle = {
    border: '1px solid #f0f0f0',
    borderRadius: '15px',
    width: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    backgroundColor: '#fff'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: '10px 0'
  };

  const footerItems = [
    {
      icon: '🛡️',
      title: 'Quality Guaranteed',
      desc: 'premium products you can trust'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      desc: 'Get your items quickly and safely.'
    },
    {
      icon: '✔️',
      title: 'Easy Returns',
      desc: 'hassle-free returns within 7-days.'
    },
    {
      icon: '🎧',
      title: 'Customer Support',
      desc: "We're here to help 24/7."
    }
  ];
  return (
    <div style={footerBoxStyle}>
      <div style={containerStyle}>
        {footerItems.map((item, index) => (
          <FeatureItem
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            showDivider={index !== footerItems.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export default Footer