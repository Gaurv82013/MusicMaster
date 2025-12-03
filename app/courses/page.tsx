import featureData from '@/data/featureData.json';

interface Course{
    id: number;
    title: string;
    description: string;
    price: number;
    instructor: string;
    image: string;
}

export default function CoursesPage() {
    const courses: Course[] = featureData.courses;
  return (
    <div className='min-h-screen bg-black pt-36 pb-20 px-4'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                    All <span className='text-green-400'>Courses</span>
                </h1>
                <p className='text-gray-400 text-lg'>
                    Explore our collection of {courses.length} professional courses
                </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {courses.map((course) => (
                    <div 
                        key={course.id} 
                        className='group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2'
                    >
                        {/* Image Container */}
                        <div className='relative h-56 overflow-hidden'>
                            <img
                                src={course.image}
                                alt={course.title}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            
                            {/* Price Badge */}
                            <div className='absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg'>
                                ${course.price}
                            </div>
                        </div>

                        {/* Content */}
                        <div className='p-6 space-y-4'>
                            <h3 className='text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 line-clamp-2'>
                                {course.title}
                            </h3>
                            
                            <p className='text-gray-400 text-sm line-clamp-3 leading-relaxed'>
                                {course.description}
                            </p>

                            <div className='flex items-center justify-between pt-4 border-t border-gray-800'>
                                <div className='flex items-center space-x-2'>
                                    <div className='w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs'>
                                        {course.instructor.charAt(0)}
                                    </div>
                                    <span className='text-sm text-gray-300'>{course.instructor}</span>
                                </div>
                                
                                <button className='px-4 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 text-sm font-semibold'>
                                    Enroll
                                </button>
                            </div>
                        </div>

                        {/* Decorative gradient overlay */}
                        <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
