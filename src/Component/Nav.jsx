import {BiUserCircle} from 'react-icons/bi';
import {RiPieChart2Line} from 'react-icons/ri';
import {BsFillTagsFill} from 'react-icons/bs';
import {FaRegCalendarTimes, FaBars} from 'react-icons/fa';
import {IoSettingsOutline} from 'react-icons/io5';
// import {GrClose} from 'react-icons/gr';
import React, { useRef } from 'react';

const Nav = (props) => {

    const navElementRef = useRef(null);
    // const [close, setClose] = useState(null)

    const handleClick = () => {
        navElementRef.current.classList.toggle('show');
    // setClose("");
    }
   

    // const { navElementRef } = props;

  return (
    <>
          <FaBars className='ms-4 hidden bg-white absolute right-2 top-4 text-2xl z-50' onClick={handleClick} />
    <div className='md:w-1/4 m-4 nav'> 
            {/* <span onClick={handleCloseClick}><GrClose className='bg-white absolute right-2 top-2 text-2xl hidden' /></span> */}
        <div ref={navElementRef} className='bg-black capitalize text-white  h-100 rounded-3xl p-10 flex flex-col justify-between  md:sticky sm:sticky top-4 nav-item'>
            <div>
            <h3 className='text-3xl mb-8'>Board</h3>
            <ul className='md:flex flex flex-col gap-5'>
                <li><a className='flex gap-x-4 items-center' href="/"> <RiPieChart2Line/> Dashboard</a></li>
                <li><a className='flex gap-x-4 items-center' href="/"> <BsFillTagsFill /> transactions</a></li>
                <li><a className='flex gap-x-4 items-center' href="/"> <FaRegCalendarTimes /> schedules</a></li>
                <li><a className='flex gap-x-4 items-center' href="/"> <BiUserCircle /> users</a></li>
                <li><a className='flex gap-x-4 items-center' href="/"> <IoSettingsOutline /> settings</a></li>
            </ul>
            </div>
            <div>
                <ul>
                    <li><a href="/">Help</a></li>
                    <li><a href="/">Contact us</a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav