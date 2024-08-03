import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="mx-auto w-full">
        <div className="relative overflow-hidden text-white rounded-lg h-500 w-full">
          <img
            style={{ height: 700, width: '100%', maxWidth: '100%'}}
            className="rounded-lg"
            src="https://img.freepik.com/premium-photo/wholesome-food-fruits-vegetables-against-dark-wood-backdrop-looking-up-copy-space_410516-39082.jpg"
            alt="image1"
          />
        
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Track your health with EatWell
            </h2>
            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 decoration:none"
              to="/"
            >
              Get started
            </Link>
          </div>
        </div>

        

        {/* <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1> */ }
      </div>
    </div>
  );
}

export default Home;