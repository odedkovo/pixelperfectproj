import React from 'react';
import quote from '../assets/imgs/imgs/quote.svg';
import user1 from '../assets/imgs/imgs/user1.jpg';
import user2 from '../assets/imgs/imgs/user2.jpg';
import user3 from '../assets/imgs/imgs/user3.jpg';

export function SuccessStories() {
  return (
    <section className='success'>
      <section className='layout'>
        <p className='main-p'>
          Delivering real results for top <br />
          companies. Some of our <span>success stories.</span>
        </p>

        <section className='stories'>
          <div className='card card1'>
            <img className='quote' src={quote} />
            <p>
              “The team perfectly fit the specialized skill set
              <br /> required. They focused on the most essential
              <br /> features helping us launch the platform eight
              <br /> months faster than planned.”
            </p>
            <span>Kady Baker</span>
            <img className='userlogo' src={user3} alt='' />
          </div>
          <div className='card card2'>
            <img className='quote' src={quote} />
            <p>
              “We needed to automate our entire onboarding
              <br /> process. The team came in and built out the
              <br /> whole journey. Since going live, user retentio
              <br /> has gone through the roof!”
            </p>
            <span>Aiysha Reese</span>
            <img className='userlogo' src={user2} alt='' />
          </div>
          <div className='card card3'>
            <img className='quote' src={quote} />
            <p>
              “Amazing. Our team helped us build an app that <br />
              delivered a new experience for hiring a physio.
              <br /> The launch was an instant success with 100k
              <br /> downloads in the first month.”
            </p>
            <span>Arthur Clarke</span>
            <img className='userlogo' src={user1} alt='' />
          </div>
        </section>
      </section>
    </section>
  );
}
