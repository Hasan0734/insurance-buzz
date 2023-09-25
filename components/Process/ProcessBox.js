import React from 'react';

const ProcessBox = ({ text1, text2, point1, point2 }) => {
  return (
    <div className='flex flex-col gap-5 flex-1 md:mt-[-5px] justify-center'>
      <span className='text-white text-lg' text-lg>{text1}</span>

      <span className='text-white text-lg'>{text2}</span>

      {/* <div className='flex gap-2 items-center'> */}
        {/* <i
          style={{ fontSize: '19px', color: 'white' }}
          className='fa fa-check-circle'
          aria-hidden='true'
        ></i> */}

        {/* <span className='text-white'>{point1}</span>
      </div> */}
      {/* <div className='flex gap-2 items-center'> */}
        {/* <i
          style={{ fontSize: '19px', color: 'white' }}
          className='fa fa-check-circle'
          aria-hidden='true'
        ></i> */}

        {/* <span className='text-white'>{point2}</span> */}
      {/* </div> */}
    </div>
  );
};

export default ProcessBox;
