import React, { useState, useEffect } from 'react';
import { Center } from '../cmps/Center.jsx';
import { SuccessStories } from '../cmps/SuccessStories.jsx';
import { GetStarted } from '../cmps/GetStarted.jsx';
import { Footer } from '../cmps/Footer.jsx';

export function HomePage() {
  // const dispatch = useDispatch();
  // const { items } = useSelector((state) => ({ items: state.itemModule.items }));

  // useEffect(() => {
  //   getItems();
  // }, []);

  // const getItems = async () => {
  //   // console.log('you are in load product in home page ');
  //   dispatch(loadItems());
  // };

  // if (!items) return <div>loading...</div>;
  return (
    <section className='home-page'>
      <Center />
      <SuccessStories />
      <GetStarted />
      <Footer />
    </section>
  );
}
