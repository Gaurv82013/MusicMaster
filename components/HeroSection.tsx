"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/moving-border";
import { Spotlight } from './ui/spotlight';
import { useRouter } from "next/navigation";


const HeroSection = () => {
  const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center h-screen text-white overflow-hidden bg-black/95'>
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#4ade80"
      />
      <h1 className='text-7xl font-semibold z-10 relative'>Master the Art of Music</h1>
      <p className='my-8 text-lg max-w-xl text-center z-10 relative'>Dive into our comprehensive courses and transform your musical journey today. Whether you are a beginner or looking to refine your skills, we have something for you.</p>
      <Button
        borderRadius="1.5rem"
        className="bg-black text-sm dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-green-500 hover:text-black"
        href="/courses"
        onClick={() => router.push('/courses')}
      >
        <div className='flex flex-row items-center justify-center'>
          <span className='mr-2'>Explore Courses</span>
          <ArrowRight size={16} />
        </div>
      </Button>
      
    </div>
      
  )
}

export default HeroSection
