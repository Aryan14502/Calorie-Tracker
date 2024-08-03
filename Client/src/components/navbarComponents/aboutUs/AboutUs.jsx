import React from 'react';
import food from "../../../assets/images/food.jpeg"
import goals from "../../../assets/images/goals.png"
import weight from "../../../assets/images/lose weight.jpeg"

function AboutUs() {

  
  return (
    <div id="aboutUs" className="min-w-screen bg-gray-100 py-8">
      <div className="mx-auto px-4">

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              EatWell is motivating people to attain their ideal weight and embrace healthier lifestyles.
            </h2>
            <p className="text-lg">
              EatWell! was developed to streamline calorie tracking and facilitate weight loss, benefiting a wide audience
              by promoting precise health management. It aims to empower individuals to enhance their well-being and
              cultivate a healthier lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Set Goals</h3>
              <img src={goals}   alt="Set your Goals" className="mx-auto mb-4 w-24 h-24 object-cover rounded-full" />
              <p>Tell us your goals and get personalized targets to help you achieve them.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Track Your Food</h3>
              <img src={food} alt="Track food" className="mx-auto mb-4 w-24 h-24 object-cover rounded-full" />
              <p>Discover what you eat and stay within your daily calorie limit.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Weight Loss</h3>
              <img src={weight} alt="Lose Weight" className="mx-auto mb-4 w-24 h-24 object-cover rounded-full" />
              <p>Reach your goals and keep setting new ones to become a happier and healthier you!</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <button className="bg-orange-700 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
              Let's Track
            </button>
          </div>
        </div>

   

    
      </div>
    </div>
  );
}

export default AboutUs;
