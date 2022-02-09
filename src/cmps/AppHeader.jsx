import React from 'react';
import logoSvg from '../assets/imgs/svg/applogo.svg';
import myteam from '../assets/imgs/imgs/myteam.svg';
import hamurger from '../assets/imgs/svg/nav.svg';
import headerleft from '../assets/imgs/imgs/headerleft.png';
import headerdown from '../assets/imgs/imgs/headerdown.svg';

export function AppHeader() {
  return (
    <section className='app-header'>
      <img className='img-left' src={headerleft} />
      <img className='img-down' src={headerdown} />
      <section className='header-top'>
        <img src={myteam} className='myteam' />
        <span className='nav-link'> home</span>
        <span className='nav-link'>about</span>
        <button className='header-button'>contact us</button>
        <img className='nav' src={hamurger} />
      </section>
      <section className='header-bottom'>
        <div className='main-headline'>
          <span>Find the</span>
          <span>
            best <span className='talent-span'>talent</span>
          </span>
        </div>

        <span className='small-p'>
          Finding the right people and building high
          <br /> performing teams can be hard. Most companies <br />
          aren’t tapping into the abundance of global talent.
          <br /> We’re about to change that.
        </span>
      </section>
    </section>
  );
}
