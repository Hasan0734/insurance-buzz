import React from 'react';

const CoverageBox = ({ image, text, onClick, position = 'center' }) => {
  return (
    <div
      onClick={onClick}
      className='flex flex-col items-center justify-between rounded bg-white shadow-lg cursor-pointer hover:transition-all hover:scale-105'
    >
      <div
        className='h-[200px] w-[100%]'
        style={{
          background: `url(${image})`,
          backgroundPosition: position,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
        }}
      ></div>
      {/* <img src={image} alt='coverageimg' style={{ objectFit: 'cover' }} /> */}
      <p className='px-3 py-4'>{text}</p>
    </div>
  );
};

export default CoverageBox;
