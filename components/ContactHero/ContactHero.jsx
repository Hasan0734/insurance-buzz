export const ContactHero = () => {
  return (
    <div
      className=' relative top-[-165px]'
      style={{
        background: `url("/images/new/team-trust.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}
    >
      <div className='pt-60 pb-20 text-white bg-[#3d435db0]'>
        <div className='container mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-2'>Contact Us</h1>
          <p className='text'>
            Should you have any inquiries whatsoever, kindly reach out to us
            using the contact information below.
          </p>

          <p className='my-2'>
            We strive to respond promptly, typically within one business day.
          </p>

          <div className='flex flex-col gap-8 mt-12'>
            <div className='flex justify-center gap-12'>
              <div className='flex flex-col justify-center items-center gap-3'>
                <img src='/phone.svg' alt='phone' />
                <p>+1 (647) 469-8766</p>
              </div>

              <div className='flex flex-col justify-center items-center gap-3'>
                <img src='/mail.svg' alt='phone' />
                <p>vidyakithur@gmail,com</p>
              </div>
              {/* <div className='flex flex-col justify-center items-center gap-3'>
                <img src='/mail.svg' alt='phone' />
                <p>vidyakithur@gmail,com</p>
              </div>
              <div className='flex flex-col justify-center items-center gap-3'>
                <img src='/mail.svg' alt='phone' />
                <p>vidyakithur@gmail,com</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
