import Link from "next/link";
import React from "react";


const Hero = () => {
  return (
    <section className="bg-slate-100 text-white">
      <div className="mx-auto max-w-screen-xl px-4  py-20 lg:flex lg:h-screen ">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            AI Course Generator
            <span className="sm:block text-black"> Custom Learning Paths, Powered By Ai </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-black">
            Unlock personalized education with Ai-driven course creation. Tailor learning journey to fit your unique goals  <br/>and pace
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border bg-black px-12 py-3 text-md font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/dashboard"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
