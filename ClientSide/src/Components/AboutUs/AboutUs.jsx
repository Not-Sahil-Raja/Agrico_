import React from "react";

function AboutUs() {
  return (
    <>
      {/* <div>AboutUs</div> */}
      {/* <h2 className='text-yellow-950 text-center text-4xl mt-10 '>About Us</h2>
   <div className='max-w-[1320px] md:py-[80] py-5 flex mx-auto'>
    <div className='basis-[45%] mx-1 mx-black'>insert pic</div>

   </div>

   <div className='basis-[55%]'>
    <h1 className='text-2xl text-right'>This is heading   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos natus rem animi nihil earum amet ratione? Enim id, impedit eligendi nesciunt vel delectus voluptatum nostrum doloribus dicta quae facilis placeat.</h1>
   </div>
    {/* <div className='bg-red-900 basis-[45%] text-white'>hello</div>
    <div className='bg-lime-800 basis-[55%] text-white'>hi</div>
   */}
      <section className="w-screen bg-orange-200 grid h-screen place-items-center">
        <div className="flex flex-1 justify-start items-center flex-col gap-6">
          <h5 className="font-bold text-lime-950 text-4xl"> About Us</h5>
          <p className=" text-3xl upppercase font-bold text-lime-900">AgriCo</p>
          <p className="w-3/5 text-center text-2xl text-teal-950">
            The Farmer Education Platform with Farmer Marketplace is a
            comprehensive online platform designed to empower farmers with
            knowledge and resources while providing a convenient marketplace for
            them to buy and sell agricultural products, equipment, and services.
            Through interactive tutorials, articles, and tools, farmers can
            enhance their skills and stay updated on the latest farming
            techniques and market trends. The marketplace facilitates
            transactions between farmers, buyers, and sellers, fostering
            collaboration and economic growth within the agricultural community.
          </p>

          <div className="w-1/4 bg-orange-200 flex  justify-center items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1580982169321-36e1ad95adba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Img1"
            />

            <img
              src="https://images.unsplash.com/photo-1606739211185-2c846d734a6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Img2"
            />

            <img
              src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Img3"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
