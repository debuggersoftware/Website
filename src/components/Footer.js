import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import '../css/Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='footer'>
      <div className='contact-info'>
        <div className='info-item'>
          <i className='icon'>✉️</i>
          <span>{t('footer.email')}</span>
        </div>
        <div className='info-item'>
          <i className='icon'>📞</i>
          <span>{t('footer.phone')}</span>
        </div>
        <div className='info-item'>
          <i className='icon'>📍</i>
          <span>{t('footer.address')}</span>
        </div>
      </div>

      <div>
        <div className='social-icons'>
          <a href="https://www.tiktok.com/@debuggersoftware?_t=ZM-8vLIuV3GRBW&_r=1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={`${process.env.PUBLIC_URL}/linkedin.svg`} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/debuggersoftware?igsh=MXB5cm1yZDgwY2pzcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={`${process.env.PUBLIC_URL}/insta.svg`} alt="Instagram" className="social-icon" />
          </a>
        </div>

        <div className='copyright'>
          <Trans i18nKey="footer.rights" values={{ year: new Date().getFullYear() }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
