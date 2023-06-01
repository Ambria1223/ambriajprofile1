import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              Software Engineer Ambria 
          </section>
           
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            1223ambria@gmail.com
          </section>
          
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            678-613-0298
          </section>
          <section className="footer-info__contact">
            My Story
            <br />
            Contact Me 
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;