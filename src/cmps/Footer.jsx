import React from 'react';
import myteam from '../assets/imgs/imgs/myteam.svg';
import facebook from '../assets/imgs/imgs/facebook.svg';
import twitter from '../assets/imgs/imgs/twitter.svg';
import media from '../assets/imgs/imgs/media.svg';

export function Footer() {
  return (
    <section className='footer'>
      <main className='main-content'>
        <section className='my-team'>
          <img src={myteam} alt='' />

          <div className='home-about'>
            <span>home</span>
            <span>about</span>
          </div>
        </section>

        <section className='address'>
          <span>
            987 Hillcrest
            <br /> LaneIrvine, CA
            <br />
            California 92714
            <br />
            Call Us : 949-833-7432
          </span>
        </section>
        <section className='media'>
          <section className='media-logo'>
            <img src={facebook} alt='' />
            <img src={twitter} alt='' />
            <img src={media} alt='' />
          </section>
          <span className='Copyright'>Copyright 2020. All Rights Reserved</span>
        </section>
      </main>
    </section>
  );
}
