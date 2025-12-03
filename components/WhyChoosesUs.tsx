"use client";
import React from "react";

const content=[
    {
      "id":1,
      "title": "Expert Instructors",
      "description": "Learn directly from experienced musicians and producers who bring real-world expertise."
    },
    {
      "id":2,
      "title": "Comprehensive Learning",
      "description": "Structured courses covering fundamentals to advanced techniques, ensuring steady skill growth."
    },
    {
      "id":3,
      "title": "Flexible Access",
      "description": "Study anytime, anywhere with lifetime access to lessons and resources on all devices."
    }


];

const WhyChoosesUs = () => {
  return (
    <div className='bg-black flex flex-col items-center justify-center space-y-6 py-12'>
        <h1 className="text-3xl font-bold text-green-500 mb-8">Why Choose Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 px-4 md:px-0 mx-8' >
            
            {content.map((item) => (
                <div key={item.id} className=" bg-black flex flex-col items-center justify-center border border-gray-700 rounded-lg p-6 m-4 hover:scale-105 transition-transform">
                    <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-center">{item.description}</p>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default WhyChoosesUs
