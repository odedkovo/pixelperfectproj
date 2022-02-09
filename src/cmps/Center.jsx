import React from 'react';
import center1 from '../assets/imgs/imgs/center1.svg';
import center2 from '../assets/imgs/imgs/center2.svg';
import center3 from '../assets/imgs/imgs/center3.svg';
import centerright from '../assets/imgs/imgs/centerright.png';
export function Center() {
  const advantages = [
    {
      img: center1,
      title: 'Experienced Individuals',
      par: `Our network is made up of highly experienced professionals
      who are passionate about what they do.`,
    },
    {
      img: center2,
      title: 'Easy to Implement',
      par: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
    },
    {
      img: center3,
      title: 'Enhanced Productivity',
      par: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
    },
  ];

  return (
    <section className='center'>
      <img className='img-right' src={centerright} />
      <main className='layout'>
        <p className='large-p'>
          Build &amp; manage
          <br /> distributed teams
          <br /> like no one else.
        </p>

        <section className='advantages'>
          {advantages.map((adv, idx) => {
            return (
              <div key={idx} className='adv'>
                <img src={adv.img} alt='' />
                <section className='adv-txt'>
                  <p className='title'>{adv.title}</p>
                  <p className='adv-par'>{adv.par}</p>
                </section>
              </div>
            );
          })}
        </section>
      </main>
    </section>
  );
}
