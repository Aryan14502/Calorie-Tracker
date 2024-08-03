import React from 'react';
import preview from "../../../assets/images/diet_support-removebg-preview.png";

export default function Features() {
  return (
    <div id='features' className='h-60 flex items-center justify-center bg-gray-100'>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center">
        <img src={preview} alt="phone preview" className="w-48 h-48 object-cover rounded-full mx-auto sm:mx-0 sm:mr-8" />
        <div className="sm:ml-8 mt-4 sm:mt-0 flex-1">
          <p className="text-lg mb-4">
            EatWell! supports people on their weight loss journeys by using calorie counting, a method that has
            been shown to be effective. We are committed to helping more people achieve their goals. Our focus is on
            listening to our customers and continuously improving our products based on their feedback. This
            approach allows us to create solutions that make a significant difference for our members.
          </p>
          <button className="bg-orange-700 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
            Let's See
          </button>
        </div>
      </div>
    </div>
  );
}
