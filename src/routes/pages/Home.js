import React from 'react';
import model from '../../../src/assests/model.jpg';
import face1 from '../../../src/assests/new/face1.png';
import face2 from '../../../src/assests/new/face2.png';
import hair from '../../../src/assests/new/hair.png';
import creame from '../../../src/assests/cream.jpg';


const Home = () => {
    return (
        <div>
             <section className=' lg:flex  md:flex sm:grid  bg-[#FFF8F5]'>
             <div className='my-12  mx-4  w-1/2 px-20'>
                 <div className='my-10'>
                 <h2 className='text-4xl font-semibold mt-3 mb-3' >BEAUTY SALON <br />
                FOR EVERY WOMEN</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit. Purus commodo ipsum duis <br />
                  laoreet maecenas. Feugiat </p>
                  <button className="btn bg-[#F63E7B] my-3">Get an Appointment</button>
                 </div>
              
             </div>
             <div className='my-12  mx-4 px-20'>
                      <img className='rounded' src={model} alt="" />
             </div>
        </section>
          
          <section>
              <div className='my-8 mx-6 p-4'>
                    <div className='justify-center'>
                        <h2 className='text-4xl  text-center font-semibold'>Our Awesome <span className='text-rose-500'>Services</span></h2>
                    </div>
                    <div className=' lg:flex md: grid sm:grid space-x-4 space-y-4 my-4 mx-4 py-3'>
                         <div className='card w-96 bg-base-150 shadow-xl'>
                                          <div className='my-5 mx-auto rounded'>
                                              <img className='w-[70px] bg-[#FFF8F5] rounded ' src={face1} alt="" />
                                          </div>
                                           <div className='text-center mb-4 mt-2'>
                                           <h2 className='text-2xl font-semibold'>Anti Age Face Treatment</h2>
                                            <p className='text-xl text-rose-500'>$199</p>
                                            <p>We craft stunning and amazing <br />
                                             web UI, using a well drrafted UX <br />
                                              to fit your product.</p>
                                           </div>
                         </div>
                         <div className='card w-96 bg-base-150 shadow-xl'>
                                          <div className='my-5 mx-auto rounded'>
                                              <img className='w-[70px] bg-[#FFF8F5] rounded ' src={hair} alt="" />
                                          </div>
                                           <div className='text-center mb-4 mt-2'>
                                           <h2 className='text-2xl font-semibold'>Hair Color & Styleing</h2>
                                            <p className='text-xl text-rose-500'>$99</p>
                                            <p>Amazing flyers, social media  <br />
                                            posts and brand representations  <br />
                                            that would make your brand stand out.</p>
                                           </div>
                         </div>
                         <div className='card w-96 bg-base-150 shadow-xl'>
                                          <div className='my-5 mx-auto rounded'>
                                              <img className='w-[70px] bg-[#FFF8F5] rounded ' src={face2} alt="" />
                                          </div>
                                           <div className='text-center mb-4 mt-2'>
                                           <h2 className='text-2xl font-semibold'>Skin Care Treatment</h2>
                                            <p className='text-xl text-rose-500'>$299</p>
                                            <p>With well written codes, we  <br />
                                             web UI, using a well drrafted UX <br />
                                             platforms,  mobile and web  <br /> apps in general.</p>
                                           </div>
                         </div>
                         
                    </div>
                     <div className='my-3 grid justify-center'> 
                        <button className=" text-center btn btn-active btn-secondary">Expore more</button>
                        </div>
                   
              </div>
          </section>

          <section>
              <div className=' lg:flex md:flex sm:grid my-5  px-4 bg-[#F2DEE5]'>
                 <div className=" lg:w-1/2 md:w-1/2 sm: w-full my-7 mx-6 p-4 rounded">
                    <img className='rounded ' src={creame} alt="" />
                 </div>
                 <div className='my-7 mx-6 p-4'>
                          <h2 className='text-4xl font-semibold'>Let us handle your screen <span className='text-[#D91D5B]'>Professionally</span></h2>
                          <p className='my-4 text-xl'>With well written codes, we build amazing apps  
                            <br /> for all platforms, mobile and web apps
                            <br /> in general ipsum. Lorem ipsum dolor sit amet, <br />
                             consectetur adipiscing elit. Purus commodo ipsum.</p>

                             <div className='flex space-x-8'>
                                    <div>
                                        <h3 className=' my-4 mx-3 text-6xl font-semibold text-[#D91D5B]'>500+</h3>
                                        <p className='text-xl my-3 mx-3'>Happy Customer</p>
                                    </div>
                                    <div>
                                        <h3 className=' my-4 mx-3 text-6xl font-semibold text-[#D91D5B]'>16+</h3>
                                        <p className='text-xl my-3 mx-3'>Total Service</p>
                                    </div>
                             </div>
                 </div>
              </div>
          </section>
         
        </div>


    );
};

export default Home;