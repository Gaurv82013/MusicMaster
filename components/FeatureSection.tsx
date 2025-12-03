import Link from 'next/link'
import featureData from '@/data/featureData.json';
import { ArrowRight } from 'lucide-react';
import type { Course } from '@/types';

const FeatureSection = () => {
  const featuredCourses: Course[] = featureData.courses.filter((course) => course.isFeatured);
  return (
    <div className='bg-black flex flex-col items-center justify-center space-y-6 '>
            <div className='text-center mb-12'>
                <h2 className='text-3xl text-green-500 font-semibold mb-4'>Feature Section</h2>
                <p className='text-5xl text-center text-white font-bold'>Learn With the Best.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 px-4 md:px-0 mx-8'>
              {featuredCourses.map((course) => (
                <div key={course.id} className='bg-black p-4 rounded-lg border border-gray-700 flex flex-col space-y-4 items-center justify-center hover:scale-105 transition-transform'>
                    <h3 className='text-xl font-semibold text-white'>{course.title}</h3>
                    <p className='text-gray-300 mt-2 text-center'>{course.description}</p>
                    <Link href={`/courses/${course.slug}`} className="text-green-400 border border-green-400 rounded-md px-2 py-1 hover:bg-green-300 hover:text-black hover:border-green-500">Learn More</Link>
                </div>
              ))}
            </div>
            <div className='mt-8 bg-black border border-gray-700 text-white px-3 py-2 rounded-lg hover:scale-105 transition-transform'>
                <Link href="/courses">
                <div className='flex flex-row items-center justify-center'>
                    <span className='mr-2'>Explore Courses</span>
                    <ArrowRight size={16} />
                </div>
                    
                </Link>
            </div>
    </div>
  )
}

export default FeatureSection
