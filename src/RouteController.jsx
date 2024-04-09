import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './components/home/TopNav';
import Footer from './components/home/Footer';
import BouncingIcon from './components/utils/Icons';
const icons = [
  '/img/physics.png',
  '/img/python.png',
  '/img/css-3.png',
  '/img/js-file.png',
  '/img/physics.png',
  '/img/programing.png',
  '/img/physics.png',
  '/img/sql.png',
  '/img/txt.png',
  '/img/idea.png',
  '/img/structure.png'
 
];

export default function RouteController() {
  const [openSideNav, setOpenSideNav] = useState(false);

  const handellOpenSideNav = () => {
    setOpenSideNav(!openSideNav);
  };

  useEffect(() => {
    if (openSideNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openSideNav]);

  return (
    <>
      {icons.map((icon, index) => (
        <BouncingIcon key={index} icon={icon} />
      ))}
      <TopNav handellOpenSideNav={handellOpenSideNav} openSideNav={openSideNav} />
      <main className='flex flex-col gap-1 mt-16'>
        <div className='flex flex-col gap-1 '>
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
