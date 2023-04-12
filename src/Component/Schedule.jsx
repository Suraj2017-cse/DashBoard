import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md';

const Schedule = () => {
return (
    <div className='shadow rounded-xl p-4 w-full mt-4'>
        <div className='flex justify-between capitalize mb-4'>
            <h3 className='font-black'>today's schedule</h3>
            <a href="/" className='flex items-center'>See All <MdKeyboardArrowRight className='text-base' /></a>
        </div>

        <div className='flex flex-col gap-4'>
            <div className='line1 after:mr-4 after:top-0 after:absolute after:h-20 after:p-1 relative ms-5'>
                <h3 className='font-bold'>Meeting with suppliers from Kuta Bali</h3>
                <p className='text-slate-400'>14.00-15.00</p>
                <p className='text-slate-400'>at Sunset Kuta, Bali</p>
            </div>
            <div className='line2 after:mr-4 after:top-0 after:absolute after:h-20 after:p-1 relative ms-5'>
                <h3 className='font-bold'>Check opration at Giga Factory 1</h3>
                <p className='text-slate-400'>18.00-20.00</p>
                <p className='text-slate-400'>at Central Jakatra</p>
            </div>
        </div>

    </div>
)
}

export default Schedule