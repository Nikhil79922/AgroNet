import React from "react";
import Category from "./Category";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import Heading from "../../components/heading/Heading";

function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen"> {/* Dark background and light text */}
      <Hero />
      <Link to="/products"></Link>
      <div className="mx-auto w-11/12 mb-6 md:mb-12">
        {/* You can use Heading component or the h1 tag */}
        {/* <Heading text="Category" marginY="my-6 md:my-8" className="text-white" textAlign="text-center" /> */}
        <h1 className="my-6 md:my-8 text-center text-white text-4xl">Category</h1>
        <Category />
      </div>
    </div>
  );
}

export default Home;

