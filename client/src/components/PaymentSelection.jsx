import React, { useState } from 'react';
import leftArrow from "../images/icons/arrow-left.svg";
import esewa from "../images/logos/esewa-logo.svg";
import khalti from "../images/logos/khalti-logo.svg";
import HeaderMain from './HeaderMain';
import Footer from './Footer';
import Header from './header';

  const PaymentSection=()=>{

  return (
    <>
     
      <div className="mt-20 px-80 py-12 min-h-screen text-white bg-stone-950 max-md:p-8 max-sm:p-4">
        <Header></Header>

        <div className=' flex items-end  justify-start'>
        {/*top left section */}
          <div className=''>

          <button className="w-10 h-10 bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center rounded-full">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
          </button>
          <div className="flex flex-col gap-1 mt-4">
          
            <p className='text-3xl font-semibold'>Nosferatu</p>
            <p className="text-gray-500 text-base mb-2">2024  &bull;Movie &bull;120 mins</p>
          </div>

          <div className="mt-5 h-80 w-[239px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4f93f11bb39091f10cc8930fd3490fb97c54733"
              alt="Nosferatu movie poster"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/*right pricing section */}
        <div className="px-12 max-md:mt-8 max-sm:mt-8">
          <div className="flex justify-between items-center mb-10">
            <div className="text-base text-white">Total cost</div>
            <div className="text-xl font-semibold text-emerald-500">Rs.120</div>
          </div>
          <div className="flex gap-36 items-center mb-8 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
            <div className="text-base text-white">Category</div>
            <div className="flex gap-5 max-sm:w-full">
              <div
                className={`flex gap-2 items-center px-5 py-2 h-11 text-base text-white rounded cursor-pointer bg-stone-900 ${selectedCategory === 'buy'? "border-blue-500" : "border-stone-900" } border-solid border-2 max-sm:flex-1 
                }`}
                onClick={() => handleCategoryChange('buy')}
              >
                <input type="radio" name="type" className='w-4 h-4' checked = {selectedCategory === "buy"} />
                <p>Buy</p>
              </div>
              <div
                className={`flex gap-2 items-center px-5 py-2 h-11 text-base text-white rounded cursor-pointer bg-stone-900 ${selectedCategory === 'rent'? "border-blue-500" : "border-stone-900" } border-2 border-solid max-sm:flex-1 
                }`}
                onClick={() => handleCategoryChange('rent')}
               
              >
                <input type="radio" name="type" className='w-4 h-4' checked={selectedCategory === "rent"}/>
                <p>Rent</p>
              </div>
            </div>
          </div>
          <div className="mx-0 my-8 h-px bg-neutral-700" aria-hidden="true" />
          <div className='flex flex-col gap-4 items-start'>
            <h2 className='text-base text-stone-300 '>Select your preferred wallet</h2>
            {/*khalti wallet */}
            <div className='flex gap-5'>

            <div className={ selectedWallet === "khalti" ? "px-6 py-3 bg-stone-900 rounded-lg flex flex-col gap-4 items-start cursor-pointer border-2 border-solid border-blue-500  " : "px-6 py-3 bg-stone-900 rounded-lg flex flex-col gap-4 items-start cursor-pointer border-2 border-solid border-stone-800"} onClick={()=> handleWalletSelection("khalti")}>

              <input type="radio" name="paymentmethod" className='w-4 h-4 checked:bg-green-600'  checked={selectedWallet === "khalti"}/>
              <img src={khalti} className='h-10'/>
            </div>
            {/*esewa wallet */}
            <div className={ selectedWallet ==="esewa"? "px-6 py-3 bg-stone-900 rounded-lg flex flex-col gap-4 items-start cursor-pointer border-2 border-solid border-blue-500" :  "px-6 py-3 bg-stone-900 rounded-lg flex flex-col gap-4 items-start cursor-pointer border-2 border-solid border-stone-800"} onClick={()=> handleWalletSelection("esewa")}>
              <input type="radio" name="paymentmethod" className='w-4 h-4 checked:bg-green-600' onClick = {() => handleWalletSelection("esewa")} checked={selectedWallet === "esewa"}/>
              <img src={esewa} className='h-10'/>
            </div>
            </div>


        
            <button className="btn-primary">
              Continue
            </button>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
      
    </>
  );
};
