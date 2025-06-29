import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ----------------Left Section*------------------ */}
        <div>
          <img className="mb-5 w-40" src={assets.mainlogo} />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            HospiLink is your trusted platform for seamless healthcare
            solutions. We connect patients with experienced doctors for
            hassle-free consultations. Our mission is to enhance accessibility
            to quality medical care. Book appointments, consult specialists, and
            manage health effortlessly.
          </p>
        </div>

        {/* ----------------Center Section*------------------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ----------------Right Section*------------------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>+91 987654321</li>
            <li>rishavkamboj75@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ HospiLink - All right reserved</p>
      </div>
    </div>
  );
}

export default Footer