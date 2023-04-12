import React, { useRef  } from 'react';
import {BsBell} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
// import {FaBars} from 'react-icons/fa';
import Schedule from './Schedule';
import Product from './Product';
import ChartItem from './ChartItem';
import CardData from '../CardData';
import Nav from './Nav';

const Dashboard = () => {

  const navElementRef = useRef(null);

  // const handleClick = () => {
  //   navElementRef.current.classList.add('show');
  // };

  
  const data = CardData;
  return (
    <>    
    {<Nav navElementRef={navElementRef} className="show" />}
    <section className='md:w-4/5 p-4 deshboard'> 
      <div className='flex justify-between mb-4'>
        <div className="brand">Dashboard</div>
        <div className="item flex items-center">
          <div className='relative search' >
            <input type="text" id="search" placeholder='Search...' className='rounded-3xl border shadow p-2 outline-none' />
            <AiOutlineSearch className='absolute top-3 right-4 searchBar' />
          </div>
          <BsBell className='ms-6' />
          <img src="user.jpeg" className='rounded-full ms-6 mr-5' alt="user" />
          {/* <FaBars className='ms-4 hidden' onClick={handleClick} /> */}
        </div>
      </div>

     <div className='flex justify-between flex-wrap gap-8'>
      {
        data.map((element, index) => {
          return(
            <div className='rounded-2xl p-4 mb-2 flex-shrink flex-grow' id={element.bgColor} key={index}>
              <div className='flex justify-end'>{element.icon}</div>
              <div className="capitalize">{element.title}</div>
              <div className="number font-extrabold">{element.number}</div>
           </div>
          )
        })
      }
     </div>
      
      <ChartItem />

     <div className='md:flex justify-between gap-8'>
     <Product />
      <Schedule />
     </div>

    </section>
    
    </>
  )
}

export default Dashboard;